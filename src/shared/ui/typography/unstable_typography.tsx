import { styled } from '@mui/system'
import { Typography } from './typography'

const isTypographyProp = (prop: PropertyKey) =>
  [
    'theme',
    'sx',
    'as',
    'uppercase',
    'disableHover',
    'color',
    'weight',
    'letterSpacing',
    'align',
  ].some((value) => prop === value)

export default styled(Typography, {
  shouldForwardProp: (prop) => !isTypographyProp(prop),
})({})
