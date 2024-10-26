export const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(value, max));
};

export const formatNumber = (number: string | number, decimals: number = 2) => {
  number = `${+number * Math.pow(10, decimals)}`;
  if (number.length <= decimals) return number;

  const part1 = number.substring(0, number.length - decimals);
  const part2 = Number(
    number.substring(number.length - decimals, number.length),
  );

  const coins = part1
    ?.split("")
    ?.reverse()
    ?.join("")
    ?.match(/.{1,3}/g)
    ?.map((i: string) => i.split("").reverse().join(""))
    ?.reverse()
    ?.join(" ");

  const coop = part2 > 10 ? part2 : part2 > 0 ? `0${part2}` : "";

  return `${coins}${coop ? `.${coop}` : ""}`;
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
