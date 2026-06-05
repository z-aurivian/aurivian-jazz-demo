// Congress roster — Demo Brief §3 (+ §8 for per-congress ARIA data).

export const CONGRESS_OPTIONS = [
  {
    id: 'sno-2024',
    name: 'SNO 2024',
    fullName: 'Society for Neuro-Oncology Annual Meeting 2024',
    location: 'Houston, TX',
    date: 'Nov 21–24, 2024',
    available: true,
  },
  {
    id: 'asco-2025',
    name: 'ASCO 2025',
    fullName: 'American Society of Clinical Oncology Annual Meeting 2025',
    location: 'Chicago, IL',
    date: 'May 30 – Jun 3, 2025',
    available: true,
  },
  {
    id: 'trend-sno-asco',
    name: 'Trend: SNO → ASCO',
    fullName: 'Sentiment trend SNO 2024 to ASCO 2025',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'esmo-2026',
    name: 'ESMO 2026',
    fullName: 'European Society for Medical Oncology Congress 2026',
    location: 'TBD',
    date: 'Sep 2026',
    available: false,
    comingSoon: true,
  },
  { id: 'aacr-2026', name: 'AACR 2026', fullName: 'American Association for Cancer Research Annual Meeting 2026', location: 'TBD', date: 'Apr 2026', available: false, comingSoon: true },
  { id: 'sno-2026',  name: 'SNO 2026',  fullName: 'Society for Neuro-Oncology Annual Meeting 2026',              location: 'TBD', date: 'Nov 2026', available: false, comingSoon: true },
];
