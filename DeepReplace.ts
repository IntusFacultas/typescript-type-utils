import { DotConcatenatedKey } from './DotConcatenatedKey';

export type DeepReplace<
    TResource extends Record<string, any>,
    TKey extends string,
    TReplacementType
> = TKey extends `${infer Head}.${infer Rest}`
    ? Rest extends DotConcatenatedKey<TResource[Head]>
        ? Omit<TResource, Head> & Record<Head, DeepReplace<TResource[Head], Rest, TReplacementType>>
        : never
    : Record<TKey, TReplacementType>;
