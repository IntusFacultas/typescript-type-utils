type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];
type NonObjectKeys<T> = KeysMatching<T, string | number | any[] | boolean | undefined | null>;
type OnlyObjectKeys<T> = KeysMatching<T, Record<string, any>>;
export type DeepPartial<T> = Partial<Pick<T, NonObjectKeys<T>>> & {
    [K in OnlyObjectKeys<T>]?: DeepPartial<T[K]>;
};
