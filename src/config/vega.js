// VEGA — Strategic Analytics agent — Jazz demo.
// Social signal velocity and KOL public-private alignment are the headline VEGA story.

export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '29% of target HCPs achieving sustained practice change vs 22% industry average — +32% outperformance. Slowest conversion: Knowledgeable → Intent (61%, avg 54 days). Primary blocker: H3 K27M testing access barriers at community centers. Recommended action: deploy testing resource kit to community oncology LinkedIn groups and OncologyTribe.',
  stages: [
    { stage: 'Sustained practice change', hcps: 312,  pctTotal: 29, vsQ4: '+9%'  },
    { stage: 'Actively changing practice', hcps: 441,  pctTotal: 41, vsQ4: '+11%' },
    { stage: 'Intent to change',           hcps: 658,  pctTotal: 61, vsQ4: '+7%'  },
    { stage: 'Knowledgeable',              hcps: 934,  pctTotal: 87, vsQ4: '+5%'  },
    { stage: 'Aware only',                 hcps: 378,  pctTotal: 35, vsQ4: '-8%'  },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Marcus R shows high interaction volume but below-average social signal follow-up rate — MSL conversations are generating insights that are not being cross-referenced against KOL public social activity. Priya N shows excellent quality and social monitoring integration. Recommended: MSL training on LP6 social alignment protocol.',
  rows: [
    { msl: 'Priya N',    region: 'Northeast',  interactions: 44, vsTarget: '+10%', quality: 9.1, insightRate: 87, overall: 'Excellent' },
    { msl: 'Marcus R',   region: 'Southeast',  interactions: 51, vsTarget: '+21%', quality: 6.3, insightRate: 41, overall: 'Quality gap' },
    { msl: 'Sofia L',    region: 'Midwest',    interactions: 37, vsTarget: '-8%',  quality: 8.6, insightRate: 79, overall: 'Volume gap' },
    { msl: 'James W',    region: 'West Coast', interactions: 42, vsTarget: '+5%',  quality: 8.2, insightRate: 74, overall: 'On track' },
    { msl: 'Anika P',    region: 'South',      interactions: 31, vsTarget: '-23%', quality: 5.8, insightRate: 36, overall: 'Needs support' },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. R. Venkatramani', tier: 'Tier 2', lastContact: '2026-04-10', gap: '8 weeks', action: 'Re-engage urgently — alignment gap detected' },
  { kol: 'Dr. B. Nabors',       tier: 'Tier 2', lastContact: '2026-04-28', gap: '5 weeks', action: 'Schedule before ESMO 2025' },
  { kol: 'Dr. R.T. Shroff',     tier: 'Tier 2', lastContact: '2026-05-12', gap: '3 weeks', action: 'Plan Ziihera BTC interaction' },
  { kol: 'Dr. S. Mueller',      tier: 'Tier 1', lastContact: '2026-05-28', gap: '1 week',  action: 'On track — pediatric data package ready' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Ziihera social and digital share of voice growing (+23pts in 90 days) but still 26 points behind Enhertu in HER2+ GEC discussions. H3 K27M Modeyso share of voice is dominant in neuro-oncology. Recommend accelerating Ziihera KOL co-creation program on X ahead of GEC launch.',
  rows: [
    { source: 'Congress abstracts (ASCO 2025)',    us: '44%', compA: '31%', compB: '18%', compC: '7%',  trend: 'up' },
    { source: 'Peer-reviewed publications (12m)',  us: '38%', compA: '28%', compB: '23%', compC: '11%', trend: 'up' },
    { source: 'KOL active endorsements',            us: '51%', compA: '22%', compB: '19%', compC: '8%',  trend: 'up' },
    { source: 'X / LinkedIn mentions (HER2+ GI)',  us: '41%', compA: '67%', compB: '14%', compC: '8%',  trend: 'up' },
    { source: 'Social / digital (H3 K27M neuro)',  us: '68%', compA: '12%', compB: '11%', compC: '9%',  trend: 'up' },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Isabel Arrillaga-Romany', score: 91, change30d: '+3.1', velocity: '+1.2 ↑↑', interpretation: 'Strongly positive — ACTION PI role sustains high alignment; advisory board anchor' },
  { kol: 'Dr. S. Merchant',         score: 49, change30d: '-8.4', velocity: '-2.1 ↓↓', interpretation: 'Worsening fast — public-private divergence detected; urgent data package deployment' },
  { kol: 'Yelena Janjigian',        score: 83, change30d: '+2.2', velocity: '+0.8 ↑',  interpretation: 'Steady positive — maintain cadence; KEYNOTE-811 post-hoc engagement opportunity' },
  { kol: 'Kohei Shitara',           score: 88, change30d: '+1.4', velocity: '+0.4 ↑',  interpretation: 'Stable — HERIZON-GEA-01 PI relationship strong; prioritise Japan PMDA engagement' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'H3 K27M testing rate at community centers', linkedMO: 'MO4',    baseline: '56%',     current: '68% (+12pts)',  patientsImpacted: '~340 additional patients tested per quarter' },
  { gap: 'Time to Modeyso treatment (diagnosis → Rx)', linkedMO: 'MO1',   baseline: '8.2 wks', current: '6.4 wks (-1.8w)', patientsImpacted: '~180 patients faster treatment initiation' },
  { gap: 'Ziihera HCP awareness (GEC community onc)', linkedMO: 'MO2',   baseline: '18%',     current: '41% (+23pts)',  patientsImpacted: 'Pre-launch metric — baseline established for launch impact' },
];

export const VEGA_ROMI = {
  netValueCreated: '$18.4M',
  roiPct: '+212%',
  returnPerPound: '$3.12',
  rows: [
    { category: 'Modeyso prescription growth attributed to MA', value: '$11.2M', methodology: 'HCPs with high MSL engagement show 2.4× higher Modeyso prescribing — difference-in-difference vs matched controls' },
    { category: 'Testing barrier removal (H3 K27M)',            value: '$3.8M',  methodology: 'Incremental patients reaching treatment through testing rate improvement; avg Modeyso treatment value applied' },
    { category: 'Ziihera pre-launch HCP priming',               value: '$7.6M',  methodology: 'Estimated launch-quarter revenue uplift from pre-launch awareness building (41% → 60% target)' },
    { category: 'Total MA investment',                           value: '-$4.2M', methodology: 'Full Medical Affairs budget — field team, advisory boards, social listening, congress, content' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 74,
  vsQ4: '+11',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',      score: 81, commentary: 'MSL interaction volume above target; quality gap in Southeast region being addressed' },
    { dim: 'External ecosystem impact', score: 79, commentary: '+18% KOL network expansion; 23 new social influencer accounts identified and mapped' },
    { dim: 'HCP practice change',       score: 72, commentary: '29% sustained change vs 22% industry average; H3 K27M testing rate improvement is the primary driver' },
    { dim: 'Patient care gap closure',  score: 70, commentary: 'Testing rate +12pts, treatment delay -1.8 weeks; Ziihera pre-launch awareness baseline established' },
    { dim: 'Social signal intelligence', score: 68, commentary: 'New capability — social listening now tracking 23 HCP accounts; LP6 alignment protocol not yet fully operationalized' },
  ],
};
