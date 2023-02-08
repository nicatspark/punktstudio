import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.c25035d5.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3 } from './chunks/pages/all.6d43b181.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 *//* empty css                                 *//* empty css                                   *//* empty css                                 *//* empty css                                 *//* empty css                               */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/contact.astro", _page1],["src/pages/about.astro", _page2],["src/pages/404.astro", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/404.5cb0326f.css","_astro/index.e43ffb1d.css","_astro/index.54f4fcd2.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.e43ffb1d.css","_astro/contact.2a266dcc.css","_astro/about.3fa93350.css","_astro/404.5cb0326f.css"],"scripts":[],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.3fa93350.css","_astro/about.8bede002.css","_astro/404.5cb0326f.css"],"scripts":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.5cb0326f.css"],"scripts":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///Users/nicolashervy/Documents/random%20stuff/studiopunkt/src/content/"},"pageMap":null,"propagation":[["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/basehead.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Footer.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Header.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/layouts/Layout.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Button.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Herosection.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Card.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/index.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/GoogleMap.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/HerosectionSimple.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/contact.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/about.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/404.astro","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/index.astro?astro&type=style&index=0&lang.css","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/about.astro?astro&type=style&index=0&lang.css","in-tree"],["/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/contact.astro?astro&type=style&index=0&lang.css","in-tree"]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.3fa93350.css","/_astro/index.54f4fcd2.css","/_astro/index.e43ffb1d.css","/_astro/404.5cb0326f.css","/_astro/about.8bede002.css","/_astro/contact.2a266dcc.css","/favicon.svg","/assets/BRAVACASA-724x1024.jpg","/assets/about.webp","/assets/denitsa.webp","/assets/interiordesign_hero.webp","/assets/interiordesign_hero_mobile.webp","/assets/polly.webp"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
