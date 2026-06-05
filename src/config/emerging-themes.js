// Emerging Themes — Jazz demo.
// NOVA surfaces these from social media, MSL reports, and congress feeds.
// Social media sourcing is prominently flagged to demonstrate the Jazz angle.

export const EMERGING_THEMES = [
  {
    id: 'et-1',
    theme: 'H3 K27M Testing Urgency Narrative on Social Media',
    growthRate: 89,
    firstDetected: '2025-11-28',
    relatedKIT: 'H3 K27M Testing Barriers',
    description: 'X and LinkedIn discussions among neuro-oncologists increasingly frame H3 K27M molecular testing not as optional but as standard-of-care gating. Language has shifted from "should test" to "must test before treatment decision." NOVA detected 89% growth in this framing over 60 days across 4 platforms.',
    sourceBreakdown: { social: 62, msl: 21, congress: 17 },
  },
  {
    id: 'et-2',
    theme: 'Bispecific Skepticism in HER2+ GEC Community',
    growthRate: 54,
    firstDetected: '2025-12-14',
    relatedKIT: 'Ziihera Mechanism Perception',
    description: 'GI oncology Twitter/X threads show growing skepticism about whether bispecific HER2 antibodies offer differentiated clinical benefit over Enhertu in first-line GEC. Sentiment analysis of 340 posts: 44% skeptical, 38% curious, 18% positive. Primarily driven by 5 high-influence GI KOLs.',
    sourceBreakdown: { social: 71, msl: 18, congress: 11 },
  },
  {
    id: 'et-3',
    theme: 'Caregiver Voice: Pediatric DMG Travel Burden',
    growthRate: 41,
    firstDetected: '2026-01-07',
    relatedKIT: 'Pediatric DMG Evidence Gaps',
    description: 'Patient advocacy communities on Facebook and Reddit are surfacing a consistent theme: families with pediatric H3 K27M DMG children face extreme travel burden to reach academic centers that offer Modeyso. Community sentiment is supportive of Modeyso but critical of access pathways. NBTS and PBTF have amplified 12 caregiver stories.',
    sourceBreakdown: { social: 83, msl: 9, congress: 8 },
  },
  {
    id: 'et-4',
    theme: 'ASCO 2025 Abstract Social Amplification',
    growthRate: 37,
    firstDetected: '2026-02-01',
    relatedKIT: 'Modeyso RWE Dissemination',
    description: 'NOVA detected pre-congress social amplification clustering around three ASCO 2025 abstract numbers tied to DMG and HER2+ GEC. KOL preposting and thread commentary is shaping narrative before official presentation. Top amplifier accounts identified for proactive engagement planning.',
    sourceBreakdown: { social: 55, msl: 12, congress: 33 },
  },
];
