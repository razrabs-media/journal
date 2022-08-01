/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/
export const pluralize = (
  { zero, one, few }: { zero: string, one: string, few: string },
  number = 0,
  cases = [2, 0, 1, 1, 1, 2],
): string => {
  const titles = [zero, one, few]
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
    ]
}
