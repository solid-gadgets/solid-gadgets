/**
 * @class BaseError
 * @reference https://zhuanlan.zhihu.com/p/113019880
 */
export class BaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, new.target);
    }
    if (typeof Object.setPrototypeOf === "function") {
      Object.setPrototypeOf(this, new.target.prototype);
    } else {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      (this as BaseError & { __proto__?: BaseError }).__proto__ = new.target.prototype;
    }
  }
}

export class SolidGadgetError extends BaseError {}
export class SolidGadgetComponentError extends BaseError {}
