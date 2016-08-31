
/* =================== USAGE ===================

 import * as serveIndex from 'serve-index';
 app.use(serveStatic('public/ftp', {'index': ['default.html', 'default.htm']}))

 =============================================== */


declare module 'serve-index' {
    import * as express from 'express';

    function serveIndex(root: string, options?: {

        filter?: boolean;
        hidden?: boolean;
        icons?: boolean;
        template?: (options: any, cb:any ) => any | string;

    }): express.Handler;

    module serveIndex {
    }

    export = serveIndex;
}
