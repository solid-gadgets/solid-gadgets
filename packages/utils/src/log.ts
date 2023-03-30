import { isString } from "./common";

export function logWarn(msg: unknown, componentName?: string, ...rest: unknown[]): void {
  const prefix =
    componentName && isString(componentName)
      ? `[solid-gadget-component] ${componentName}:`
      : "[solid-gadget]";
  if (isString(msg)) {
    console.warn(`${prefix} ${msg}`, ...rest);
  } else {
    console.warn(prefix, msg, ...rest);
  }
}

export function logError(msg: unknown, componentName?: string, ...rest: unknown[]): void {
  const prefix =
    componentName && isString(componentName)
      ? `[solid-gadget-component] ${componentName}:`
      : "[solid-gadget]";
  if (isString(msg)) {
    console.error(`${prefix} ${msg}`, ...rest);
  } else {
    console.error(prefix, msg, ...rest);
  }
}
