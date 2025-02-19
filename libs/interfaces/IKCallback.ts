export interface IKCallback<T, E extends Error = Error> {
  (err: E | null, response: T): void;
}
