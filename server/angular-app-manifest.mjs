
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/InesEcx.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/InesEcx.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: '2bc42996f7ed35ec868b6e3fda31d26475873396ca5686fc80a32ec9efaa9021', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: 'ec215d62ecfa63561c2106f5012c41c74094096890eb71b5b1927e4afc7ed8b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20849, hash: 'ff4dc0d66e7b2e28d37580aa5130574a0b68691ff436616fc48de80e84a7a273', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
