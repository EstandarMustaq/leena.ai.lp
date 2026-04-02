declare module "locomotive-scroll" {
  interface LocomotiveOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    getDirection?: boolean;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveOptions);
    init(): void;
    on(event: string, callback: (...args: any[]) => void): void;
    update(): void;
    scrollTo(target: number | string | HTMLElement, options?: { offset?: number; duration?: number }): void;
    destroy(): void;
  }
}
