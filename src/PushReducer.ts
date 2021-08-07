/** @since 0.0.1 */
export const PushReducer = <T>(arr: T[], v: T, i: number, arrc: T[]): T[] => [
  ...arr,
  v,
]
