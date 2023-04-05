export function isString(target: unknown): target is string {
  return typeof target === "string";
}

export function isPromise(target: unknown): target is Promise<unknown> {
  return toString.call(target) === "[object Promise]";
}

export class Deferred<T> {
  public promise: Promise<T>;

  public resolve!: (value: PromiseLike<T> | T) => void;

  public reject!: (reason?: unknown) => void;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
