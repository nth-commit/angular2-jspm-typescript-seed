declare module jspm {
  class Builder {
    constructor(baseUrl?: string, output?: string);
    bundle(source: string, target: string, options?: any): Promise<any>;
    buildStatic(source: string, target: string, options?: any): Promise<any>;
  }
}

declare module 'jspm' {
  export = jspm;
}
