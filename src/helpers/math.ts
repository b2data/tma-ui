export const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(value, max));
};

export const formatNumber = (number: string | number, decimals: number = 2) => {
  const integer = Math.floor(+number);
  const fractional = Math.round(
    (+number - Math.floor(+number)) * Math.pow(10, decimals),
  );

  if (!integer) {
    return "0." + `${fractional}`.padStart(decimals, "0");
  }

  const part1 = `${integer}`
    ?.split("")
    ?.reverse()
    ?.join("")
    ?.match(/.{1,3}/g)
    ?.map((i) => i.split("").reverse().join(""))
    ?.reverse()
    ?.join(" ");

  const part2 = `${fractional}`.padStart(decimals, "0");

  return `${part1}${fractional ? `.${part2}` : ""}`;
};

export const formatJettonBalance = (
  amount: bigint | string,
  decimals: number,
  symbol: string,
) => {
  const balance = amount.toString();

  if (balance === "0") {
    return `${balance} ${symbol}`;
  }

  return `${formatNumber(+balance / Math.pow(10, decimals), decimals)} ${symbol}`;
};
