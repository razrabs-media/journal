import { UrlObject } from 'url'
import { useRouter } from 'next/router'

export function useQueryParamsStore(): any {
  const { pathname, query } = useRouter()

  const getHref: (obj: any) => UrlObject = (obj) => ({
    pathname,
    query: { ...query, ...obj },
  })

  return { getHref, ...query }
}
