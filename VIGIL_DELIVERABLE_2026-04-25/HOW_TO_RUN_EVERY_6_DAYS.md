# VIGIL Farm Intelligence Report — 6-Day Run Protocol

**Farm:** Junnar, Pune district (19.1417°N, 73.9652°E)  
**Crop:** Grapes (assumed)  
**Harvest target:** August 15, 2026  

---

## Folder Contents

```
VIGIL_DELIVERABLE_2026-04-25/
├── vigil_farmer_report_2026-04-25.json   ← Main report (farmer-facing)
├── accuracy_analysis.json                ← Devil's advocate accuracy breakdown
├── pune_grapes_live.json                 ← Pipeline config (reuse every run)
├── HOW_TO_RUN_EVERY_6_DAYS.md           ← This file
├── figures/
│   ├── ndvi_baseline_vs_target.png       ← NDVI: 2026 vs 3-year average
│   ├── evi_baseline_vs_target.png        ← EVI: active photosynthesis trend
│   ├── ndre_baseline_vs_target.png       ← NDRE: nitrogen/chlorophyll trend
│   ├── composite_stress_chart.png        ← Combined stress score chart
│   └── ndvi_warning_map.png             ← Spatial farm zone map
└── data/
    ├── scene_metrics.csv                 ← Every satellite scene processed
    ├── weekly_metrics.csv                ← Weekly index values per year
    └── target_vs_baseline.csv           ← 2026 vs baseline comparison
```

---

## What Each PNG Shows (for dashboard)

| PNG | What it is | What to tell the farmer |
|-----|-----------|------------------------|
| `ndvi_baseline_vs_target.png` | Farm greenness 2026 (blue line) vs 3-year average (grey band) | "This is how green your farm looks vs the last 3 years at the same time" |
| `evi_baseline_vs_target.png` | Active photosynthesis — how hard the plants are working | "This shows if your crop is growing actively or slowing down" |
| `ndre_baseline_vs_target.png` | Chlorophyll/nitrogen — leaf colour signal | "If this drops, your crop may need fertiliser" |
| `composite_stress_chart.png` | Overall stress score across all three signals | "Overall crop stress — higher = more stressed" |
| `ndvi_warning_map.png` | Spatial map: which zones of the farm are below baseline | "Red zones = parts of your farm that look weaker than normal" |

---

## How to Run Every 6 Days

### Step 1 — Re-run the satellite pipeline
```bash
cd "/Users/harshitgajjar/Downloads/College/VIGIL - Earth/teesta "
.venv_report/bin/python run_agri_retrospective.py \
  --config configs/pune_grapes_live.json \
  --log-level INFO
```
- Runtime: ~10–20 minutes (cached scenes are reused; only new satellite passes are downloaded)
- Output: updated PNGs + CSVs in `configs/outputs/pune_grapes_live/`

### Step 2 — Pull fresh weather data and regenerate the farmer report
*(A weather + report builder script to automate this is the next build step)*

For now, manually call Open-Meteo:
```
https://api.open-meteo.com/v1/forecast?latitude=19.14167&longitude=73.96519
  &daily=temperature_2m_max,temperature_2m_min,precipitation_sum,
          et0_fao_evapotranspiration,windspeed_10m_max,
          relative_humidity_2m_max,relative_humidity_2m_min
  &past_days=6&forecast_days=16&timezone=Asia/Kolkata
```

### Step 3 — Package the deliverable
Create a new dated folder: `VIGIL_DELIVERABLE_YYYY-MM-DD/`  
Copy PNGs, CSVs, updated JSON into it. This preserves the full audit trail.

### Step 4 — Check the monsoon blackout status
| Month | Satellite usable? | Report mode |
|-------|-------------------|-------------|
| April–June 20 | YES (~70–80% clear scenes) | Satellite + Weather |
| June 21–September | NO (monsoon clouds) | Weather-only — label clearly |
| October onward | YES | Satellite + Weather |

**When satellite is unavailable:** Remove all satellite-derived findings from the farmer report. Add this line: *"Satellite data unavailable this week due to monsoon cloud cover. Recommendations based on weather forecast only."*

---

## Accuracy Numbers to Include in Every Report

Based on the accuracy audit (`accuracy_analysis.json`):

**Current overall accuracy: 59%**

This number will INCREASE as you collect:
- Exact farm boundary polygon → +12%
- Confirmed Bahar type and pruning date → +10%
- Crop mix percentage (% grapes) → +8%
- 1 season of input cost records → +15% on financial model
- IoT soil moisture sensor → +10%

**Expected accuracy at end of first full season (with above data): ~85%**

---

## Confidence Labels for the Report

Use these labels next to every finding:

| Label | Accuracy | Use when |
|-------|----------|----------|
| **CONFIRMED** | >80% | Multi-week satellite trend + weather-validated |
| **LIKELY** | 60–80% | Weather forecast 0–7 days, or single satellite pass |
| **INDICATIVE** | 40–60% | FAO model estimate, 8–16 day forecast |
| **UNVERIFIED** | <40% | Assumed from stated harvest date, not field-confirmed |

---

## Three Things to Collect Before Next Report (May 1)

1. **Farm boundary** — ask farmer to walk the farm perimeter with Google Maps / Field Area Measure app and share the KML
2. **Pruning date** — when were the vines last pruned? What growth stage are they in today?
3. **Crop split** — what percentage of the farm is grapes vs other crops?

These three inputs alone move the overall report accuracy from 59% → ~80%.
