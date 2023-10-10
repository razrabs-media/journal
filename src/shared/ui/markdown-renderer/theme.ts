import { ThemeName } from 'shared/ui/theme'

enum Colors {
  white = '#E2E2E8',
  black = '#2D2D2D',
  darkBlack = '#1D1D21',
  lightGray = '#93949A',
  darkGray = '#636369',
  purple = '#E2777A',
  dullBlue = '#6196CC',
  orange = '#EF8203',
  yellow = '#F8C555',
  pink = '#C799E3',
  lightGreen = '#7EC699',
  aquamarine = '#67CDCC',
  green = '#00FF00',
}

enum CodeColorsLight {
  code = Colors.darkBlack,
  description = Colors.darkGray,
}

enum CodeColorsDark {
  code = Colors.white,
  description = Colors.lightGray,
}

const codeColorsTheme = {
  light: CodeColorsLight,
  dark: CodeColorsDark,
} as Record<
  ThemeName,
  Record<keyof typeof CodeColorsLight | CodeColorsDark, Colors[keyof Colors]>
>

export const codeTheme = (themeName: ThemeName) => {
  const colorTheme = codeColorsTheme[themeName]
  return {
    'code[class*="language-"]': {
      color: colorTheme.code,
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
      color: colorTheme.code,
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
      background: Colors.black,
      padding: '.1em',
      borderRadius: '.3em',
      whiteSpace: 'normal',
    },
    comment: {
      color: colorTheme.description,
    },
    'block-comment': {
      color: colorTheme.description,
    },
    prolog: {
      color: colorTheme.description,
    },
    doctype: {
      color: colorTheme.description,
    },
    cdata: {
      color: colorTheme.description,
    },
    punctuation: {
      color: colorTheme.code,
    },
    tag: {
      color: Colors.purple,
    },
    'attr-name': {
      color: Colors.purple,
    },
    namespace: {
      color: Colors.purple,
    },
    deleted: {
      color: Colors.purple,
    },
    'function-name': {
      color: Colors.dullBlue,
    },
    boolean: {
      color: Colors.orange,
    },
    number: {
      color: Colors.orange,
    },
    function: {
      color: Colors.orange,
    },
    property: {
      color: Colors.yellow,
    },
    'class-name': {
      color: Colors.yellow,
    },
    constant: {
      color: Colors.yellow,
    },
    symbol: {
      color: Colors.yellow,
    },
    selector: {
      color: Colors.pink,
    },
    important: {
      color: Colors.pink,
      fontWeight: 'bold',
    },
    atrule: {
      color: Colors.pink,
    },
    keyword: {
      color: Colors.pink,
    },
    builtin: {
      color: Colors.pink,
    },
    string: {
      color: Colors.lightGreen,
    },
    char: {
      color: Colors.lightGreen,
    },
    'attr-value': {
      color: Colors.lightGreen,
    },
    regex: {
      color: Colors.lightGreen,
    },
    variable: {
      color: Colors.lightGreen,
    },
    operator: {
      color: Colors.aquamarine,
    },
    entity: {
      color: Colors.aquamarine,
      cursor: 'help',
    },
    url: {
      color: Colors.aquamarine,
    },
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    inserted: {
      color: Colors.green,
    },
  } as const
}
