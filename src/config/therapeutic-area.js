// Therapeutic area — Demo Brief §3.
// Default fill reflects Alexion (rare hematology/neurology).

export const THERAPEUTIC_AREA = {
  name: 'Oncology — Neuro-Oncology & GI/GEC',
  subIndications: ['H3 K27M-mutant DMG', 'HER2+ Biliary Tract Cancer', 'HER2+ Gastroesophageal Cancer'],
  competitors: [
    { name: 'ONC201 / Olutasidenib', company: 'Chimerix', moA: 'DRD2/DRD3 antagonist (ONC201 = same as Modeyso)', posture: 'Modeyso IS ONC201 — branded name; first-in-class, no direct competitor in H3 K27M DMG yet' },
    { name: 'Trastuzumab deruxtecan (Enhertu)', company: 'Daiichi Sankyo / AstraZeneca', moA: 'HER2-targeted ADC', posture: 'Key competitor for Ziihera in HER2+ GEC/BTC' },
    { name: 'Trastuzumab + chemotherapy', company: 'Roche / biosimilars', moA: 'HER2-targeted mAb + cytotoxic', posture: 'Standard of care in HER2+ GEC; Ziihera targeting superior bispecific profile' },
    { name: 'Margetuximab (Margenza)', company: 'MacroGenics', moA: 'Fc-optimized anti-HER2 mAb', posture: 'HER2+ breast/gastric; limited uptake; bispecific differentiation opportunity' },
  ],
  advocacyOrgs: ['National Brain Tumor Society', 'Pediatric Brain Tumor Foundation', 'Cholangiocarcinoma Foundation', 'Debbie's Dream Foundation (GEC)'],
};
