import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ThemeName } from '../theme'

export function useLocalStorage(
  defaultValue: ThemeName,
  key: string,
): [ThemeName, Dispatch<SetStateAction<ThemeName>>] {
  const [value, setValue] = useState<ThemeName>(defaultValue)

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key)

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue))
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
