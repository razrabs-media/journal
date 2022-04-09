import styled from '@emotion/styled'
import { forwardRef, ImgHTMLAttributes } from 'react'
import { Typography } from 'shared/ui/typography'
import FallbackImage from './404.svg'

const StyledFallbackImage = styled(FallbackImage)`
  stroke: ${({ theme }) => theme.colors.primary}
  width: 80px;
  height: 80px;
`

// Экспортирую отдельно, чтобы была возможность застилизовать в дальнейшем
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 80px;
  max-height: 500px;
  height: 100%;
`

const StyledImage = styled.img`
  min-height: 80px;
  min-width: 80px;
  max-width: 100%;
  max-height: 500px;
  height: 100%;
`

const Label = styled(Typography)`
  position: absolute;
  bottom: -32px;
`

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  label?: string
  src: string | undefined | null
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, label, ...restProps }, ref) => (
    <ImageWrapper>
      {src ? (
        <StyledImage {...restProps} ref={ref} src={src} />
      ) : (
        <StyledFallbackImage />
      )}

      {label && (
        <Label transparent uppercase size='small'>
          {label}
        </Label>
      )}
    </ImageWrapper>
  ),
)

Image.displayName = 'Image'
