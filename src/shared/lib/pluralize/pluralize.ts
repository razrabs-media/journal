/*eslint max-params: ["error", 3]*/
/*eslint-env es6*/
export const pluralize = (
  txt: string[],
  number = 0,
  cases = [2, 0, 1, 1, 1, 2],
) =>
  txt[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
