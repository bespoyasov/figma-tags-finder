export function assureType<TType>(entity: unknown): TType {
  return <TType>entity;
}

export type Global = typeof globalThis & {
  figma: any;
};
