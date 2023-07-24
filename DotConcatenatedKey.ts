type IndexValues = ['0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'];

type PathsToStringProps<T> = T extends any[]
    ? IndexValues
    : T extends string
    ? []
    : {
          [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
      }[Extract<keyof T, string>];

type Join<T extends string[], D extends string> = T extends []
    ? never
    : T extends [infer F]
    ? F
    : T extends [infer F, ...infer R]
    ? F extends string
        ? `${F}${D}${Join<Extract<R, string[]>, D>}`
        : never
    : string;

export type DotConcatenatedKey<TResource extends object> = TResource extends Record<string, any>
    ? Join<PathsToStringProps<TResource>, '.'>
    : string;
