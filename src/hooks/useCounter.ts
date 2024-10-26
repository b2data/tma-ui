import dayjs from "dayjs";
import { Duration } from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
import { useDeepEqualMemo } from "./useDeepEqualMemo";

export const useCounter = ({
  fromDate,
  toDate,
  ms = 1000,
}: {
  fromDate?: Date;
  toDate?: Date;
  ms?: number;
}) => {
  const [duration, setDuration] = useState<Duration | null>(null);

  useEffect(() => {
    const processData = () => {
      const date1 = fromDate ? +fromDate : Date.now();
      const date2 = toDate ? +toDate : Date.now();
      const res = dayjs.duration(date1 - date2);
      setDuration(res);
      if (res.asMilliseconds() < 0) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(processData, ms);
    processData();

    return () => {
      clearInterval(interval);
    };
  }, [useDeepEqualMemo({ ms, fromDate, toDate })]);

  const h = duration?.get("h");
  const m = duration?.get("m");
  const s = duration?.get("s");

  const durationText =
    (duration?.get("ms") || 0) > 0 && (fromDate || toDate)
      ? `${typeof h !== "undefined" && h > 0 ? `${h}:` : ""}${typeof m !== "undefined" && m >= 0 ? `${m > 9 ? m : `0${m}`}:` : ""}${typeof s !== "undefined" && s >= 0 ? `${s > 9 ? s : `0${s}`}` : ""}`
      : "";

  return { ...duration, durationText, h, m, s };
};
