import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

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
      setAnimationIn(true)
      setDisplay(true)

      timeoutCallback = () => {
        setAnimationIn(false)
      }
    }

    // Если true -> false
    // Сначала играем анимацию, потом выключаем отображение
    else {
      setAnimationOut(true)

      timeoutCallback = () => {
        // Избавляемся от морганий анимации, которые вызваны батчингом
        // П.С. Если у вас моргают анимации выхода - используйте "animation-fill-mode: forwards;", чтобы зафиксировать последний кадр
        flushSync(() => {
          setDisplay(false)
        })

        setAnimationOut(false)
      }
    }

    setTimeout(timeoutCallback, transitionTime)
  }, [display, transitionTime, shouldDisplay])

  return { display, animationIn, animationOut }
}
