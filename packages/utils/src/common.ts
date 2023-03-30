export function isString(target: unknown): target is string {
  return typeof target === "string";
}

export function isPromise(target: unknown): target is Promise<unknown> {
  return toString.call(target) === "[object Promise]";
}
