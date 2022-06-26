declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>

  export default content
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const content: DocumentNode

  export default content
}

declare module '*.gql' {
  const content: DocumentNode

  export default content
}
