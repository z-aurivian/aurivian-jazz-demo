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
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pillarAlignment(kolId, pillarIndex, tier, influence) {
  const base = tier === 'Tier 1' ? 72 : tier === 'Tier 2' ? 58 : 44;
  const influenceBonus = Math.floor((influence - 70) / 5);
  const offset = ((hashCode(kolId + pillarIndex) % 24) - 12);
  return Math.min(99, Math.max(28, base + influenceBonus + offset));
}

function aiRecommendation(kol, alignments) {
  const avg = Math.round(alignments.reduce((a, b) => a + b, 0) / alignments.length);
  const weakPillar = MESSAGING_PILLARS[alignments.indexOf(Math.min(...alignments))];
  const strongPillar = MESSAGING_PILLARS[alignments.indexOf(Math.max(...alignments))];
  if (avg >= 80) return `Strong overall alignment (avg ${avg}%). Leverage ${kol.name} for scientific exchange on ${strongPillar.short} — consider advisory board nomination. Maintain cadence.`;
  if (avg >= 65) return `Moderate alignment (avg ${avg}%). Gap on "${weakPillar.name}" — schedule targeted scientific exchange before next congress. ${kol.name} is a high-value conversion opportunity.`;
  return `Alignment gap (avg ${avg}%). "${weakPillar.name}" is the lowest-scoring pillar. Social signal monitoring shows public narrative may diverge from private. Prioritise re-engagement with updated evidence package.`;
}

export function getMessagingAlignment(kolData) {
  return kolData.map(kol => {
    const alignments = MESSAGING_PILLARS.map((_, i) =>
      pillarAlignment(kol.id, i, kol.engagementTier, kol.influenceScore)
    );
    return {
      kolId: kol.id,
      pillars: MESSAGING_PILLARS.map((p, i) => ({ ...p, alignment: alignments[i] })),
      aiRecommendation: aiRecommendation(kol, alignments),
    };
  });
}
