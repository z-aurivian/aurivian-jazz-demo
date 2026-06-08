// Medical Messaging Alignment — Jazz demo.
// Pillars cover both Modeyso (H3 K27M DMG) and Ziihera (HER2+ GEA/BTC).

export const MESSAGING_PILLARS = [
  { id: 'pillar-1', name: 'Modeyso efficacy in H3 K27M DMG (real-world & trial)',  short: 'Modeyso RWE' },
  { id: 'pillar-2', name: 'Pediatric & adolescent dosing confidence',               short: 'Pediatric dosing' },
  { id: 'pillar-3', name: 'Ziihera bispecific HER2 mechanism differentiation',      short: 'Bispecific MoA' },
  { id: 'pillar-4', name: 'H3 K27M biomarker testing as treatment gatekeeper',      short: 'Biomarker testing' },
];

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const TIER_BASELINE = { 'Tier 1': 78, 'Tier 2': 64, 'Tier 3': 50 };

export function getMessagingAlignment(kol) {
  if (!kol) return null;
  const baseline = TIER_BASELINE[kol.engagementTier] ?? 60;
  const influenceLift = Math.round((kol.influenceScore - 70) / 4);
  const idHash = hashCode(kol.id);

  const pillars = MESSAGING_PILLARS.map((p, i) => {
    const offset = ((idHash + i * 37) % 31) - 15;
    const score = Math.max(20, Math.min(98, baseline + influenceLift + offset));
    return { ...p, score };
  });

  const gap = pillars.reduce((min, p) => (p.score < min.score ? p : min), pillars[0]);
  const strongest = pillars.reduce((max, p) => (p.score > max.score ? p : max), pillars[0]);
  const avgScore = Math.round(pillars.reduce((sum, p) => sum + p.score, 0) / pillars.length);

  let recommendation;
  if (gap.score >= 75) {
    recommendation = `Strong alignment across all messaging pillars (avg ${avgScore}%). Maintain current cadence — consider advisory board invitation, particularly on ${strongest.short}.`;
  } else if (gap.score >= 55) {
    recommendation = `Average alignment ${avgScore}%. Largest gap is ${gap.name} (${gap.score}%). Recommended: targeted scientific exchange focused on this pillar; bring updated evidence pack.`;
  } else {
    recommendation = `Below-target alignment on ${gap.name} (${gap.score}%). Suggest urgent re-engagement and 1:1 advisory; risk of competitor capture if not addressed within 6 weeks.`;
  }

  return { pillars, avgScore, gap, strongest, recommendation };
}
