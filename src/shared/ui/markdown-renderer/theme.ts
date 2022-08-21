enum ColorsLight {
  silver = '#1D1D21',
  black = '#2D2D2D',
  lightGray = '#999999',
  purple = '#E2777A',
  dullBlue = '#6196CC',
  orange = '#F08D49',
  yellow = '#F8C555',
  pink = '#CC99CD',
  lightGreen = '#7EC699',
  aquamarine = '#67CDCC',
  green = '#00FF00',
}

enum ColorsDark {
  silver = '#CCCCCC',
  black = '#2D2D2D',
  lightGray = '#999999',
  purple = '#E2777A',
  dullBlue = '#6196CC',
  orange = '#F08D49',
  yellow = '#F8C555',
  pink = '#CC99CD',
  lightGreen = '#7EC699',
  aquamarine = '#67CDCC',
  green = '#00FF00',
}

const codeColorsTheme = {
  light: ColorsLight,
  dark: ColorsDark,
} as Record<string, Record<string, string>>

export const codeTheme = (themeName: string) => {
  const colorTheme = codeColorsTheme[themeName]
  return {
    'code[class*="language-"]': {
      color: colorTheme.silver,
      background: 'none',
      fontFamily: "JetBrainsMono', monospace",
      fontSize: '14px',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
    },
    'pre[class*="language-"]': {
      color: colorTheme.silver,
      fontFamily: "'JetBrainsMono', monospace",
      fontSize: '1em',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      padding: '1em',
      margin: '.5em 0',
      overflow: 'auto',
    },
    ':not(pre) > code[class*="language-"]': {
      background: colorTheme.black,
      padding: '.1em',
      borderRadius: '.3em',
      whiteSpace: 'normal',
    },
    comment: {
      color: colorTheme.lightGray,
    },
    'block-comment': {
      color: colorTheme.lightGray,
    },
    prolog: {
      color: colorTheme.lightGray,
    },
    doctype: {
      color: colorTheme.lightGray,
    },
    cdata: {
      color: colorTheme.lightGray,
    },
    punctuation: {
      color: colorTheme.silver,
    },
    tag: {
      color: colorTheme.purple,
    },
    'attr-name': {
      color: colorTheme.purple,
    },
    namespace: {
      color: colorTheme.purple,
    },
    deleted: {
      color: colorTheme.purple,
    },
    'function-name': {
      color: colorTheme.dullBlue,
    },
    boolean: {
      color: colorTheme.orange,
    },
    number: {
      color: colorTheme.orange,
    },
    function: {
      color: colorTheme.orange,
    },
    property: {
      color: colorTheme.yellow,
    },
    'class-name': {
      color: colorTheme.yellow,
    },
    constant: {
      color: colorTheme.yellow,
    },
    symbol: {
      color: colorTheme.yellow,
    },
    selector: {
      color: colorTheme.pink,
    },
    important: {
      color: colorTheme.pink,
      fontWeight: 'bold',
    },
    atrule: {
      color: colorTheme.pink,
    },
    keyword: {
      color: colorTheme.pink,
    },
    builtin: {
      color: colorTheme.pink,
    },
    string: {
      color: colorTheme.lightGreen,
    },
    char: {
      color: colorTheme.lightGreen,
    },
    'attr-value': {
      color: colorTheme.lightGreen,
    },
    regex: {
      color: colorTheme.lightGreen,
    },
    variable: {
      color: colorTheme.lightGreen,
    },
    operator: {
      color: colorTheme.aquamarine,
    },
    entity: {
      color: colorTheme.aquamarine,
      cursor: 'help',
    },
    url: {
      color: colorTheme.aquamarine,
    },
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    inserted: {
      color: colorTheme.green,
    },
  }
}
