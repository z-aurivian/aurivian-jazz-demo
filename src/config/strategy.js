// Strategic framework — Demo Brief §4.
// This is NOVA's spine: ISP → POA (Medical Objectives) → Listening
// Priorities → KIQs / KITs. Drives the Strategy-to-Action surface and the
// coverage scoring displayed on the Command Center.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Drive Modeyso adoption and RWE in H3 K27M DMG',          description: 'Establish Modeyso as the standard of care in H3 K27M-mutant diffuse midline glioma; close evidence gaps in pediatric and adolescent populations.' },
  { id: 'p2', title: 'Build scientific foundation for Ziihera pre-launch',      description: 'Educate on zanidatamab bispecific HER2 mechanism; shape HCP expectations on place-in-therapy ahead of GEC launch.' },
  { id: 'p3', title: 'Generate and communicate post-launch real-world evidence', description: 'Capture real-world Modeyso outcomes; address head-to-head and subgroup data gaps flagged by oncology KOLs.' },
  { id: 'p4', title: 'Strengthen biomarker-driven treatment paradigms',          description: 'Advance HCP confidence in H3 K27M and HER2 testing as gatekeepers to treatment; support companion diagnostic uptake.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'Modeyso HCP education',        description: 'Build community oncologist and neuro-oncologist confidence in Modeyso clinical profile; address evidence gaps in pediatric use and long-term outcomes.', ispPillarRef: 'p1' },
  { id: 'MO2', name: 'Ziihera pre-launch readiness',  description: 'Engage GI and medical oncology KOLs on zanidatamab bispecific mechanism data; track competitive landscape vs trastuzumab deruxtecan.', ispPillarRef: 'p2' },
  { id: 'MO3', name: 'RWE and evidence gap closure',  description: 'Identify and prioritize real-world evidence gaps for Modeyso in underrepresented subgroups; support investigator-initiated research.', ispPillarRef: 'p3' },
  { id: 'MO4', name: 'Biomarker adoption',            description: 'Drive H3 K27M and HER2 testing uptake among community oncologists; identify and address testing barriers.', ispPillarRef: 'p4' },
  { id: 'MO5', name: 'Access & reimbursement',        description: 'Surface payer landscape barriers for Modeyso; prepare access strategy intelligence for Ziihera launch.', ispPillarRef: 'p2' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'Modeyso real-world experience',  moRef: 'MO1', kiq: 'What are neuro-oncologists observing in real-world Modeyso-treated H3 K27M DMG patients — efficacy, tolerability, and treatment sequencing?',           kits: ['MSL field report', 'Ad board summary', 'Med Info query log'] },
  { id: 'LP2', name: 'Ziihera mechanism perception',   moRef: 'MO2', kiq: 'How are HER2+ GEC and BTC oncologists perceiving zanidatamab bispecific data vs trastuzumab deruxtecan — and what additional evidence do they need?',     kits: ['Congress debrief', 'KOL advisory board', 'X/LinkedIn social listening'] },
  { id: 'LP3', name: 'Pediatric DMG evidence gaps',    moRef: 'MO3', kiq: 'What clinical questions remain unanswered for pediatric and adolescent H3 K27M DMG patients — and are those gaps limiting prescriber confidence?',          kits: ['Pediatric oncology advisory board', 'Publication gap analysis', 'Patient advocacy social monitoring'] },
  { id: 'LP4', name: 'H3 K27M testing barriers',      moRef: 'MO4', kiq: 'Where are community oncologists encountering barriers to H3 K27M molecular testing, and how is this affecting time-to-diagnosis and treatment?',           kits: ['MSL access log', 'Pathology network survey', 'LinkedIn community monitoring'] },
  { id: 'LP5', name: 'Access & payer landscape',       moRef: 'MO5', kiq: 'Which payer segments are creating coverage barriers for Modeyso, and what evidence do they require for favorable formulary placement?',                    kits: ['Payer landscape report', 'HEOR summary', 'Patient community access narratives'] },
  { id: 'LP6', name: 'KOL digital alignment',          moRef: 'MO1', kiq: 'Where do KOL public social media positions on Modeyso and Ziihera diverge from private MSL engagement — and what is driving those gaps?',               kits: ['NOVA alignment engine', 'X/LinkedIn monitoring', 'MSL interaction log'] },
];

// Coverage score per MO at the moment of the demo.
// MO3 and MO5 intentionally Gap — drives evidence gap and access radar moments.
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Gap',
  MO4: 'Low',
  MO5: 'Gap',
};
