import { useEffect, useState } from 'react'

export const useDisplayAnimation = (
  shouldDisplay: boolean,
  transitionTime: number,
) => {
  const [display, setDisplay] = useState(shouldDisplay)

  const [animationIn, setAnimationIn] = useState(false)
  const [animationOut, setAnimationOut] = useState(false)

  // TODO: Надо бы тролить анимашку, по-хорошему, чтобы не моргало если быстро скролить туда-сюда
  useEffect(() => {
    // Если уже в нужном состоянии - анимировать не нужно
    if (shouldDisplay === display) {
      return
    }

    let timeoutCallback: (() => void) | undefined
    // Если false -> true
    // Сначала включаем отображение, потом играем анимацию
    if (shouldDisplay) {
      setDisplay(true)
      setAnimationIn(true)

      timeoutCallback = () => {
        setAnimationIn(false)
      }
    }
    // Если true -> false
    // Сначала играем анимацию, потом выключаем отображение
    else {
      setAnimationOut(true)

      timeoutCallback = () => {
        setDisplay(false)
        setAnimationOut(false)
      }
    }

    setTimeout(timeoutCallback, transitionTime)
  }, [display, transitionTime, shouldDisplay])

  return { display, animationIn, animationOut }
}
