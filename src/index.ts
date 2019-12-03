import { createServer } from './app';

(function initServer() {
    try {
        createServer();
    } catch (e) {
        console.error(`Init server error: ${e}`);
    }
})();
