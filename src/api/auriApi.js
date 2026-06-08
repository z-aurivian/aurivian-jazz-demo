import { queryClaudeAPI } from './claudeApi';
import { queryOpenAIAPI } from './openaiApi';
import { buildSystemPrompt } from './promptBuilder';
import { retrieveContext } from './rag';
import {
  KIT_SCORECARDS,
  KOL_DATA,
  INSIGHTS,
  ACTIONS,
  CLIENT,
  PRODUCT_OPTIONS,
  CONGRESS_OPTIONS,
} from '../config';

function keywordFallback(query, selectedProduct) {
  const q = query.toLowerCase();
  const product = PRODUCT_OPTIONS.find(p => p.id === selectedProduct) || PRODUCT_OPTIONS[0];
  const productKols = KOL_DATA.filter(k =>
    !selectedProduct || k.productAlignment.includes(selectedProduct)
  );

  // KITs / signal velocity
  if (
    q.includes('kit') || q.includes('signal') || q.includes('velocity') ||
    q.includes('theme') || q.includes('trend') || q.includes('what is happening') ||
    q.includes('what\'s happening')
  ) {
    return `## Key Insight Themes (KITs)\n\n${KIT_SCORECARDS.map(k =>
      `### ${k.name}\n- **Status:** ${k.status} | Mentions: ${k.currentMentions} (${k.percentChange > 0 ? '+' : ''}${k.percentChange.toFixed(1)}% vs prior)\n- **Sentiment:** ${k.currentSentiment.toFixed(2)} (was ${k.priorSentiment.toFixed(2)})\n\n${k.aiSummaryCurrent}`
    ).join('\n\n')}`;
  }

  // KOL alignment / social divergence
  if (
    q.includes('alignment') || q.includes('diverge') || q.includes('public') ||
    q.includes('private') || q.includes('merchant') || q.includes('social media') ||
    q.includes('twitter') || q.includes('linkedin') || q.includes('x.com')
  ) {
    const alignmentInsight = INSIGHTS.find(i => i.id === 'AI1');
    return `## KOL Public–Private Alignment\n\n${alignmentInsight ? alignmentInsight.summary : ''}\n\n**Top Tier 1 KOLs tracked for ${product.name}:**\n${productKols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5).map(k =>
      `- **${k.name}** (${k.institution}): ${k.focusAreas[0]}`
    ).join('\n')}\n\nOpen LUCA for full per-KOL alignment scores and messaging gap breakdown.`;
  }

  // Insights
  if (
    q.includes('insight') || q.includes('finding') || q.includes('gap') ||
    q.includes('risk') || q.includes('issue') || q.includes('concern')
  ) {
    return `## Strategic Insights\n\n${INSIGHTS.map(i =>
      `### ${i.title}\n**Priority:** ${i.priority} | **Confidence:** ${Math.round(i.confidenceScore * 100)}% | **Signal velocity:** ${i.socialSignalVelocity || 'N/A'}\n\n${i.summary}`
    ).join('\n\n')}`;
  }

  // Actions / recommendations
  if (
    q.includes('action') || q.includes('recommend') || q.includes('next step') ||
    q.includes('should we') || q.includes('what should') || q.includes('priority') ||
    q.includes('deploy') || q.includes('engage')
  ) {
    return `## Recommended Actions\n\n${ACTIONS.map(a =>
      `### ${a.id}: ${a.title}\n- **Owner:** ${a.owner} | **Due:** ${a.dueBy} | **Status:** ${a.status}${a.strategyImpact ? ` | **Impact:** ${a.strategyImpact}` : ''}`
    ).join('\n\n')}`;
  }

  // KOLs
  if (
    q.includes('kol') || q.includes('opinion leader') || q.includes('expert') ||
    q.includes('physician') || q.includes('engagement') || q.includes('who are')
  ) {
    const tier1 = productKols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5);
    const toShow = tier1.length > 0 ? tier1 : KOL_DATA.slice(0, 5);
    return `## Key Opinion Leaders — ${product.name}\n\n${toShow.map(k =>
      `### ${k.name}\n- **Institution:** ${k.institution}, ${k.country}\n- **Specialty:** ${k.specialty} | **Influence:** ${k.influenceScore}/100\n- **Focus:** ${k.focusAreas.join(', ')}\n- **Strategy:** ${k.recommendedStrategy}`
    ).join('\n\n')}\n\n*${productKols.length} total KOLs tracked for this product.*`;
  }

  // Modeyso / DMG
  if (
    q.includes('modeyso') || q.includes('dordaviprone') || q.includes('dmg') ||
    q.includes('diffuse midline') || q.includes('h3 k27m') || q.includes('h3k27m')
  ) {
    const modeyso = PRODUCT_OPTIONS.find(p => p.id === 'modeyso');
    const modeysoKits = KIT_SCORECARDS.filter(k =>
      k.name.toLowerCase().includes('modeyso') || k.name.toLowerCase().includes('pediatric') || k.name.toLowerCase().includes('h3')
    );
    return `## Modeyso (dordaviprone) Intelligence\n\n**Indication:** ${modeyso?.indications.join(', ')}\n**Stage:** ${modeyso?.stage}\n\n${modeysoKits.map(k =>
      `### ${k.name}\n${k.aiSummaryCurrent}`
    ).join('\n\n')}\n\nAsk about KOL engagement strategy, pediatric evidence gaps, or H3 K27M testing barriers for more detail.`;
  }

  // Ziihera / HER2
  if (
    q.includes('ziihera') || q.includes('zanidatamab') || q.includes('btc') ||
    q.includes('gec') || q.includes('her2') || q.includes('biliary') ||
    q.includes('gastro') || q.includes('bispecific')
  ) {
    const ziihera = PRODUCT_OPTIONS.find(p => p.id === 'ziihera');
    const ziiheraKits = KIT_SCORECARDS.filter(k =>
      k.name.toLowerCase().includes('ziihera') || k.name.toLowerCase().includes('her2')
    );
    return `## Ziihera (zanidatamab) Intelligence\n\n**Indications:** ${ziihera?.indications.join(', ')}\n**Stage:** ${ziihera?.stage}\n\n${ziiheraKits.map(k =>
      `### ${k.name}\n${k.aiSummaryCurrent}`
    ).join('\n\n')}\n\nAsk about pre-launch KOL engagement, bispecific mechanism perception, or share-of-voice vs Enhertu for more detail.`;
  }

  // Congress
  if (
    q.includes('congress') || q.includes('conference') || q.includes('asco') ||
    q.includes('esmo') || q.includes('sno') || q.includes('abstract')
  ) {
    const available = CONGRESS_OPTIONS.filter(c => c.available);
    return `## Congress Intelligence\n\n${available.map(c =>
      `### ${c.name}\n- Status: Active / Recent`
    ).join('\n\n')}\n\nSocial signal velocity from ASCO 2025 has been the primary driver of KIT growth this cycle — particularly for Ziihera's bispecific mechanism narrative and Modeyso pediatric data discussions.`;
  }

  // Default
  return `## Auri Intelligence Summary — ${CLIENT.name}\n\nI can help you with intelligence across ${CLIENT.franchiseDescription}. Key areas this cycle:\n\n- **Signal Velocity** — ${KIT_SCORECARDS.length} KITs tracked; portfolio social volume +107% this quarter\n- **KOL Alignment** — Public–private divergence detected; Merchant (78→49) is the priority case\n- **Strategic Insights** — ${INSIGHTS.length} active insights mapped to Medical Objectives\n- **Actions** — ${ACTIONS.length} recommended actions across Field Medical, Digital MA, and HEOR\n- **Products** — Modeyso (H3 K27M DMG, launched) · Ziihera (HER2+ BTC/GEC, pre-launch)\n\nTry asking about KOL alignment gaps, Ziihera pre-launch readiness, social signal velocity, H3 K27M testing barriers, or recommended actions for this cycle.`;
}

export async function queryAuri(messages, selectedProduct) {
  const lastMessage = messages[messages.length - 1]?.content || '';
  const ragContext = retrieveContext(lastMessage, selectedProduct);
  const systemPrompt = buildSystemPrompt(selectedProduct, ragContext);

  try {
    return await queryClaudeAPI(messages, systemPrompt);
  } catch (e) {
    console.log('Claude API unavailable, trying OpenAI:', e.message);
  }

  try {
    return await queryOpenAIAPI(messages, systemPrompt);
  } catch (e) {
    console.log('OpenAI API unavailable, using keyword fallback:', e.message);
  }

  return keywordFallback(lastMessage, selectedProduct);
}
