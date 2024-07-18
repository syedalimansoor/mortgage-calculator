import { Updater } from "use-immer";

export type ContextWithState<T> = [T, Updater<T>];

export type Replace<T, R> = Omit<T, keyof R> & R;
