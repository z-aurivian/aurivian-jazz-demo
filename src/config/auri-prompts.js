// Auri canned Q&A — Jazz demo.
// Social media alignment and signal aggregation are the headline capabilities.
// Responses reference Jazz-specific insights, MOs, and actions.

export const AURI_PROMPTS = [
  {
    prompt: 'Which KOLs have a public-private alignment gap on Modeyso?',
    response:
      'NOVA\'s alignment engine has flagged two priority gaps this cycle:\n\n• **Dr. S. Merchant** — alignment score dropped 78 → 49. Her X posts express caution on pediatric Modeyso data; her MSL interactions are decidedly more positive. The gap appears to be driven by a perceived absence of public-facing pediatric RWE. Action A1 (deploy pediatric data package) is already Started.\n\n• **Dr. R. Venkatramani** — publicly signals evidence gaps on LinkedIn but privately indicated in a recent advisory board that draft pediatric cohort data would "change the conversation immediately." Timing a data publication could close this gap before ESMO 2025.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'action',  id: 'A1'  },
      { type: 'action',  id: 'A2'  },
    ],
  },
  {
    prompt: 'What is social media telling us about Ziihera ahead of GEC launch?',
    response:
      'Three signals worth acting on:\n\n1. **Share-of-voice gap**: Zanidatamab appears in 41% of HER2+ GEC discussions on X and LinkedIn vs. Enhertu at 67%. The good news: favorable sentiment among those who mention zanidatamab is 74% — an awareness problem, not a perception problem.\n\n2. **Bispecific skepticism cluster**: 5 high-influence GI KOLs are driving a "show me survival data" narrative (insight AI2). NOVA estimates their combined reach at 47K followers. Actions A3 and A4 address this directly.\n\n3. **Mechanism curiosity trend**: Oncology fellows and community GI oncologists are engaging positively with bispecific mechanism content — a pre-launch education opportunity before practice patterns solidify.',
    cites: [
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI5' },
      { type: 'action',  id: 'A3'  },
      { type: 'action',  id: 'A4'  },
      { type: 'action',  id: 'A8'  },
    ],
  },
  {
    prompt: 'Where are our biggest strategic coverage gaps right now?',
    response:
      'Two MOs are flagged as Gap this cycle:\n\n• **MO3 (RWE and evidence gap closure)** — Social listening is amplifying this gap externally. Patient communities on NBTS and PBTF Facebook groups are actively surfacing pediatric dosing questions (AI4). No LP currently monitors patient advocacy social channels.\n\n• **MO5 (Access & reimbursement)** — Caregiver narratives on social media document real prior authorization failures. AI4 has two documented cases. No MA response is currently present in these communities — a gap competitors could exploit.\n\nI\'d recommend LP6 (KOL digital alignment) as an immediate addition — it bridges MO1 and MO3 and operationalizes the public-private gap detection that\'s already surfacing high-value signals.',
    cites: [
      { type: 'mo',      id: 'MO3' },
      { type: 'mo',      id: 'MO5' },
      { type: 'insight', id: 'AI4' },
      { type: 'lp',      id: 'LP6' },
    ],
  },
  {
    prompt: 'What is the H3 K27M testing conversation looking like on social media?',
    response:
      'Growing and active. NOVA detected an 89% growth rate in "must test" framing around H3 K27M molecular testing over 60 days — primarily on X and LinkedIn among neuro-oncologists.\n\nKey findings (AI3):\n- Community oncologists in the OncologyTribe LinkedIn group are openly asking about testing turnaround times\n- A neuro-oncology fellow\'s tweet about reflexive testing gaps generated 340+ engagements\n- The dominant gap: community institutions are not reflexing H3 K27M on midline glioma biopsy automatically\n\nAction A5 (deploy H3 K27M testing resource to community LinkedIn groups) is Accepted and in flight. Action A6 (commission pathology network survey) is Proposed — needs an owner.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A5'  },
      { type: 'action',  id: 'A6'  },
    ],
  },
  {
    prompt: 'What would NOVA change about the current plan if given free rein?',
    response:
      'Four changes:\n\n1. **Add a patient advocacy social monitoring KIT under MO3 and MO5** — caregiver and patient voices are active and unmonitored. AI4 documents real access failures; LP5 doesn\'t yet capture this channel.\n\n2. **Activate LP6 (KOL digital alignment) immediately** — the public-private gap detection on Dr. Merchant and Dr. Venkatramani is already surfacing high-value signals. Formalizing this LP unlocks systematic alignment tracking across all tier-1 KOLs.\n\n3. **Promote A8 (Ziihera social amplification program)** — share-of-voice is the constraint, not sentiment. A focused KOL-co-creation program on X before GEC launch could narrow the 26-point gap vs Enhertu before practice patterns solidify.\n\n4. **Commission a social listening benchmark study** — establish baseline share-of-voice, sentiment NPS, and alignment scores at current state to measure impact of all MA interventions over the next 12 months.',
    cites: [
      { type: 'mo',      id: 'MO3' },
      { type: 'mo',      id: 'MO5' },
      { type: 'lp',      id: 'LP6' },
      { type: 'action',  id: 'A8'  },
      { type: 'insight', id: 'AI4' },
    ],
  },
  {
    prompt: 'Which actions have the highest social signal ROI right now?',
    response:
      'Ranked by signal velocity × strategic impact:\n\n1. **A2** (Alert monitoring for Dr. Merchant + 4 aligned KOLs) — cheapest to activate, highest alignment risk mitigation. Signal velocity: +74% in 30 days.\n\n2. **A8** (Ziihera KOL amplification program) — addresses a 26-point share-of-voice gap with high-sentiment audience. Favorable sentiment is already there; this converts it to reach.\n\n3. **A5** (H3 K27M testing resource to LinkedIn/OncologyTribe) — community oncologists are already asking; supplying the answer with Jazz-authored content makes Jazz the authoritative voice in an active conversation.',
    cites: [
      { type: 'action',  id: 'A2'  },
      { type: 'action',  id: 'A8'  },
      { type: 'action',  id: 'A5'  },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI5' },
      { type: 'insight', id: 'AI3' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'Which KOLs have a public-private alignment gap on Modeyso?',
  'What is social media telling us about Ziihera ahead of GEC launch?',
  'Where are our biggest strategic coverage gaps right now?',
  'What is the H3 K27M testing conversation looking like on social media?',
  'Which actions have the highest social signal ROI right now?',
  'What would NOVA change about the current plan if given free rein?',
];
