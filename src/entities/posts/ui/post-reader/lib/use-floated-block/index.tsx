import { useEffect, useRef, useState } from 'react'

export const useFloatedBlock = () => {
  const postHeaderRef = useRef<HTMLDivElement>(null)
  const [shouldDisplay, setShouldDisplay] = useState(false)

  useEffect(() => {
    const target = postHeaderRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldDisplay(!entry.isIntersecting)
      },
      {
        threshold: 0,
      },
    )

    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [postHeaderRef, setShouldDisplay])

  return { postHeaderRef, shouldDisplay }
}
