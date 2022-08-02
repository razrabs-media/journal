export type Payload =
  | { event: 'start'; initialTime: number }
  | { event: 'stop' }
