const durationRE = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;

export type DurationUnits =
  | "ms"
  | "second"
  | "sec"
  | "s"
  | "секунда"
  | "сек"
  | "с"
  | "minute"
  | "min"
  | "m"
  | "минута"
  | "мин"
  | "м"
  | "hour"
  | "hr"
  | "h"
  | "час"
  | "ч";
// | "day"
// | "d"
// | "week"
// | "wk"
// | "w"

// | "nanosecond"
// | "ns"
// | "µs"
// | "μs"
// | "us"
// | "microsecond"
// | "millisecond"

// | "second"
// | "sec"
// | "month"
// | "b"
// | "year"
// | "yr"
// | "y";

export const durationRatios: Record<DurationUnits, number> = {
  // nanosecond: 1 / 1e6,
  // ns: 1 / 1e6,

  // μs: 1 / 1e3,
  // µs: 1 / 1e3,
  // us: 1 / 1e3,
  // microsecond: 1 / 1e3,

  // millisecond: 1,
  ms: 1,

  second: 1000,
  sec: 1000,
  s: 1000,
  секунда: 1000,
  сек: 1000,
  с: 1000,

  minute: 1000 * 60,
  min: 1000 * 60,
  m: 1000 * 60,
  минута: 1000 * 60,
  мин: 1000 * 60,
  м: 1000 * 60,

  hour: 1000 * 60 * 60,
  hr: 1000 * 60 * 60,
  h: 1000 * 60 * 60,
  час: 1000 * 60 * 60,
  ч: 1000 * 60 * 60,

  // day: 1000 * 60 * 60 * 24,
  // d: 1000 * 60 * 60 * 24,

  // week: 1000 * 60 * 60 * 24 * 7,
  // wk: 1000 * 60 * 60 * 24 * 7,
  // w: 1000 * 60 * 60 * 24 * 7,

  // month: 1000 * 60 * 60 * 24 * (365.25 / 12),
  // b: 1000 * 60 * 60 * 24 * (365.25 / 12),

  // year: 1000 * 60 * 60 * 24 * 365.25,
  // yr: 1000 * 60 * 60 * 24 * 365.25,
  // y: 1000 * 60 * 60 * 24 * 365.25,
};

export const durationLabels = {
  ru: { w: "нед", d: "дн", h: "ч", m: "м", s: "с" },
  en: { w: "w", d: "d", h: "h", m: "m", s: "s" },
};

const getUnitRatio = (str: any) => {
  return (
    durationRatios[str as DurationUnits] ||
    durationRatios[str.toLowerCase().replace(/s$/, "") as DurationUnits]
  );
};

export const parseDuration = (str?: string, format: DurationUnits = "ms") => {
  let result = 0;
  if (!str) {
    return result;
  }
  // ignore commas/placeholders
  str = (str + "").replace(/(\d)[,_](\d)/g, "$1$2");
  const isNegative = str[0] === "-";
  str.replace(durationRE, (substring: string, n: any, units: any) => {
    units = getUnitRatio(units);
    if (units) {
      result = result + Math.abs(parseFloat(n)) * units;
    }
    return substring;
  });

  return (
    result && (result / (getUnitRatio(format) || 1)) * (isNegative ? -1 : 1)
  );
};

export const displayDuration = (ms?: number, lang?: "ru" | "en") => {
  if (!ms) {
    return "";
  }
  const i18n = durationLabels[lang || "en"];

  // const w = Math.floor(ms / durationRatios.w);
  // const d = Math.floor((ms - w * durationRatios.w) / durationRatios.day);
  const h = Math.floor(ms / durationRatios.h);
  const m = Math.floor((ms - h * durationRatios.h) / durationRatios.m);
  const s = Math.floor(
    (ms - h * durationRatios.h - m * durationRatios.m) / durationRatios.s,
  );

  return `${h > 0 ? `${h}${i18n.h} ` : ""}${m > 0 ? `${m}${i18n.m} ` : ""}${s > 0 ? `${s}${i18n.s} ` : ""}`.trim();
};
