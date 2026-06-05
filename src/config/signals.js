// Background signals — Jazz demo.
// Social media signal velocity is the headline — reflects Jazz's primary interest.

export const SIGNALS = [
  {
    agent: 'ARIA',
    timestamp: '2026-06-04T08:15:00Z',
    headline: '#H3K27M social signal spike +310% following ASCO 2025 abstract drops',
    context: '7 neuro-oncology KOLs and 3 patient advocacy accounts drove a 310% surge in H3 K27M and dordaviprone mentions on X. Tone: 82% positive framing around Modeyso efficacy. 4 of the 7 KOLs are not on the current MSL engagement list.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-06-03T11:30:00Z',
    headline: 'KOL alignment gap detected: Dr. S. Merchant public vs. private divergence',
    context: 'LUCA alignment score for Merchant dropped 78 → 49. Public LinkedIn posts express pediatric data caution; private MSL interactions are positive. Alignment score now below engagement threshold.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-06-02T14:00:00Z',
    headline: 'Ziihera share-of-voice rising: 41% of HER2+ GEC discussions mention zanidatamab',
    context: 'Up from 18% 90 days ago. Enhertu still leads at 67%. Favorable sentiment among Ziihera mentions: 74%. Gap is awareness, not perception — community GI oncologists not yet reflexing to zanidatamab.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-06-01T09:45:00Z',
    headline: 'Pediatric DMG evidence gap amplified in NBTS and PBTF advocacy communities',
    context: 'Combined 85K-member communities on Facebook and X are surfacing pediatric Modeyso dosing questions. Mentions spiked after a patient-shared journal club post. No MA response presence exists in these channels.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-05-30T10:00:00Z',
    headline: '3 emerging neuro-oncology digital influencers crossed the 5K follower threshold',
    context: 'Three neuro-oncologists (combined 18K X followers) have posted ≥4 times about H3 K27M testing in 30 days. None are on the MSL engagement list. Posting cadence trending toward tier-2 KOL territory.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
];
