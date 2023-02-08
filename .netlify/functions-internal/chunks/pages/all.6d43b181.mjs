import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, m as maybeRenderHead, e as renderComponent, f as renderSlot } from '../astro.c25035d5.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                             *//* empty css                           *//* empty css                           *//* empty css                         */
const SITE_TITLE = "Welcome to Punkt Studio - Interior Design company";
const SITE_KEYWORDS = "interior design, interior decoration, sofia, bulgaria";
const INTRO1 = `We are an interior decorator company that provides the highest quality
services to clients looking to elevate their space. Our team of
experienced designers and decorators work with you to create a
personalized look that reflects your style and budget.`;
const INTRO2 = `We offer a variety of services, from simple color changes to complete
room renovations, to help you create the perfect space for your needs.
With our help, you can turn any room into a beautiful, inviting space.`;
const SITE_DESCRIPTION = INTRO1;

const $$Astro$c = createAstro();
const $$Basehead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Basehead;
  const { title } = Astro2.props;
  return renderTemplate`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta name="generator"${addAttribute(Astro2.generator, "content")}>
  <title>${`${SITE_TITLE} - ${title}`}</title>
  <meta name="keywords"${addAttribute(SITE_KEYWORDS, "content")}>
  <meta name="description"${addAttribute(SITE_DESCRIPTION, "content")}>
  <meta name="author" content="">
${renderHead($$result)}</head>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/basehead.astro");

const $$Astro$b = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<div class="main footer astro-SZ7XMLTE">
  <div class="footer__page columns astro-SZ7XMLTE">
    <div class="footer__page-column astro-SZ7XMLTE">Punkt Studio</div>
    <div class="footer__page-column astro-SZ7XMLTE">Address: Sofia, Bulgaria<br class="astro-SZ7XMLTE">str. William Gladstone 6<br class="astro-SZ7XMLTE">Tel:
      0899229759 / 0899667261<br class="astro-SZ7XMLTE"><a href="mailto:info@punktstudio.bg" class="astro-SZ7XMLTE">info@punktstudio.bg</a></div>
    <div class="footer__page-column astro-SZ7XMLTE">Polly Georgieva<br class="astro-SZ7XMLTE"><a href="mailto:polly@punktstudio.bg" class="astro-SZ7XMLTE">polly@punktstudio.bg</a><br class="astro-SZ7XMLTE"><br class="astro-SZ7XMLTE">Denitsa Nikolova<br class="astro-SZ7XMLTE"><a href="mailto:denitsa@punktstudio.bg" class="astro-SZ7XMLTE">denitsa@punktstudio.bg</a></div>
  </div>
</div>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Footer.astro");

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
  <div class="logo astro-3EF6KSR2">Punkt Studio</div>
  <nav class="astro-3EF6KSR2">
    <ul class="astro-3EF6KSR2">
      <li class="astro-3EF6KSR2"><a href="/" class="astro-3EF6KSR2">Home</a></li>
      <li class="astro-3EF6KSR2"><a href="/about" class="astro-3EF6KSR2">About</a></li>
      <li class="astro-3EF6KSR2"><a href="/projects" class="astro-3EF6KSR2">Projects</a></li>
      <li class="astro-3EF6KSR2"><a href="/contact" class="astro-3EF6KSR2">Contact</a></li>
    </ul>
  </nav>
</header>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Header.astro");

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-SCKKX6R4">
  ${renderComponent($$result, "Basehead", $$Basehead, { "title": title, "class": "astro-SCKKX6R4" })}
  ${maybeRenderHead($$result)}<body class="astro-SCKKX6R4">
    <div class="height-control astro-SCKKX6R4">
      ${renderSlot($$result, $$slots["default"])}
      ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-SCKKX6R4" })}
      ${renderComponent($$result, "Header", $$Header, { "class": "astro-SCKKX6R4" })}
    </div>
    </body>
</html>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/layouts/Layout.astro");

const $$Astro$8 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    rarrow,
    larrow,
    class: classname,
    primary = true,
    secondary,
    size = "large",
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(id, "id")}${addAttribute(`fluid-font ${classname} ${primary && !secondary && "primary"} ${size === "medium" && "medium"} ${secondary && "secondary"} astro-VNZLVQNM`, "class")}${addAttribute(href, "data-href")}>${larrow && !secondary && renderTemplate`<span class="astro-VNZLVQNM">&larr;</span>`}<span class="astro-VNZLVQNM">${renderSlot($$result, $$slots["default"])}</span>${rarrow && !secondary && renderTemplate`<span class="astro-VNZLVQNM">&rarr;</span>`}</a>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Button.astro");

const $$Astro$7 = createAstro();
const $$Herosection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Herosection;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hero astro-VFDBIAUJ">
  <img loading="lazy" role="presentation" sizes="(max-width: 600px) 1000px,
          1400px" srcset="
          /assets/interiordesign_hero_mobile.webp 1000w,
          /assets/interiordesign_hero.webp 1400w,
          " src="/assets/interiordesign_hero.webp" class="astro-VFDBIAUJ">
  <div class="hero__content astro-VFDBIAUJ">
    <div class="astro-VFDBIAUJ">${renderSlot($$result, $$slots["default"])}<div class="buttons astro-VFDBIAUJ">${renderComponent($$result, "Button", $$Button, { "primary": true, "href": "/about", "rarrow": "true", "class": "astro-VFDBIAUJ" }, { "default": ($$result2) => renderTemplate`
          Tell me more
        ` })}${renderComponent($$result, "Button", $$Button, { "secondary": true, "href": "/contact", "rarrow": "true", "class": "astro-VFDBIAUJ" }, { "default": ($$result2) => renderTemplate`
          Nah, I feel brave
        ` })}</div></div>
  </div>
</div>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Herosection.astro");

const $$Astro$6 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
  <a${addAttribute(href, "href")} class="astro-DOHJNAO5">
    <h2 class="astro-DOHJNAO5">
      ${title}
      <span class="astro-DOHJNAO5">&rarr;</span>
    </h2>
    <p class="fluid-font astro-DOHJNAO5">
      ${body}
    </p>
  </a>
</li>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/Card.astro");

const $$Astro$5 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Punkt Studio - Interior Design company.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="main astro-J7PV25F6">
    ${renderComponent($$result2, "Herosection", $$Herosection, { "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<p class="intro1 fluid-font astro-J7PV25F6">${INTRO1}</p>` })}
  </div><div class="main astro-J7PV25F6">
    <article class="astro-J7PV25F6">
      <h2 class="astro-J7PV25F6">Our Services</h2>
      <p class="intro2 fluid-font astro-J7PV25F6">${INTRO2}</p>
      <ul class="aside columns astro-J7PV25F6">
        ${renderComponent($$result2, "Card", $$Card, { "title": "Interior decoration", "body": "Selection of furniture, artwork, and other decorative objects to enhance the aesthetic of a space. ", "href": "/", "class": "astro-J7PV25F6" })}
        ${renderComponent($$result2, "Card", $$Card, { "title": "Interior design", "body": "The creation of a space through the manipulation of space, colour, texture, and lighting. ", "href": "/", "class": "astro-J7PV25F6" })}
        ${renderComponent($$result2, "Card", $$Card, { "title": "Space planning", "body": "Arrangement and organization of furniture, furnishings, and other objects within a space to maximize the use of the space and create a desired atmosphere.", "href": "/", "class": "astro-J7PV25F6" })}
      </ul>
      <hr class="astro-J7PV25F6">
      <h2 class="astro-J7PV25F6">Punkt Studio in the magazines</h2>
      <div class="feature astro-J7PV25F6">
        <img src="/assets/BRAVACASA-724x1024.jpg" alt="feature image" class="astro-J7PV25F6">
        <div class="astro-J7PV25F6"><p class="fluid-font astro-J7PV25F6">Punkt Studio featured in Bravacasa - Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nostrum odio optio voluptates facere.
            Voluptatum, laudantium sapiente veritatis porro illum officiis?
            Pariatur officiis deleniti a, molestias inventore nobis illo eum
            magni!</p></div>
      </div>
    </article>
  </div>` })}`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/index.astro");

const $$file$3 = "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$GoogleMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GoogleMap;
  return renderTemplate(_a || (_a = __template(["", `<div id="map" class="astro-L3OJ3RJO"></div>
<script>
  let map

  function initMap() {
    // map = new google.maps.Map(document.getElementById('map'), {
    //   center: { lat: -34.397, lng: 150.644 },
    //   zoom: 8,
    // })
    const myLatLng = { lat: 42.69135607193375, lng: 23.32145416142027 }

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatLng,
    })

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Punkt Studio!',
    })
  }

  window.initMap = initMap
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBF5VoJ54Kz4IC4WgGQC1kIF2WW4tH4pv4&callback=initMap&v=weekly" defer><\/script>`])), maybeRenderHead($$result));
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/GoogleMap.astro");

const $$Astro$3 = createAstro();
const $$HerosectionSimple = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HerosectionSimple;
  const { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hero astro-RJJRULVB">
  <img loading="lazy" role="presentation"${addAttribute(src, "src")} class="astro-RJJRULVB">
</div>`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/components/HerosectionSimple.astro");

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About us", "class": "astro-UW5KDBXL" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="main astro-UW5KDBXL">
    ${renderComponent($$result2, "HerosectionSimple", $$HerosectionSimple, { "src": "/assets/about.webp", "class": "astro-UW5KDBXL" })}
  </div><div class="main astro-UW5KDBXL">
    <article class="astro-UW5KDBXL"><h1 class="astro-UW5KDBXL">Contact</h1>
      <p class="astro-UW5KDBXL">Because we'd love to hear from you.</p>
      <div class="columns astro-UW5KDBXL">
        <div class="vcard astro-UW5KDBXL"><div class="astro-UW5KDBXL">
            ${renderComponent($$result2, "GoogleMap", $$GoogleMap, { "class": "astro-UW5KDBXL" })}
            <p class="astro-UW5KDBXL"><strong class="astro-UW5KDBXL">Punkt Studio</strong></p><p class="astro-UW5KDBXL">Address: Sofia, Bulgaria<br class="astro-UW5KDBXL">
              str. William Gladstone 6</p>
            <p class="astro-UW5KDBXL">Tel: <a href="tel:0899229759" class="astro-UW5KDBXL">0899229759</a> / <a href="tel:0899667261" class="astro-UW5KDBXL">0899667261</a></p>
            <a href="mailto:info@punktstudio.bg" class="astro-UW5KDBXL">info@punktstudio.bg</a></div></div>

        <form action="" onsubmit="return false;" class="astro-UW5KDBXL">
          <div class="columns astro-UW5KDBXL">
            <formgroup class="astro-UW5KDBXL">
              <label for="name" class="astro-UW5KDBXL">Name</label>
              <input type="text" id="name" value="" class="astro-UW5KDBXL">
            </formgroup>
            <formgroup class="astro-UW5KDBXL">
              <label for="surname" class="astro-UW5KDBXL">Surname</label>
              <input type="text" id="surname" value="" class="astro-UW5KDBXL">
            </formgroup>
          </div>
          <formgroup class="astro-UW5KDBXL">
            <label for="email" class="astro-UW5KDBXL">Email</label>
            <input type="email" id="email" value="" class="astro-UW5KDBXL">
          </formgroup>
          <formgroup class="astro-UW5KDBXL">
            <label for="subject" class="astro-UW5KDBXL">Subject</label>
            <input type="text" id="subject" value="" class="astro-UW5KDBXL">
          </formgroup>
          <formgroup class="astro-UW5KDBXL">
            <label for="message" class="astro-UW5KDBXL">Message</label>
            <textarea id="message" class="astro-UW5KDBXL"></textarea>
          </formgroup>
          <formgroup class="astro-UW5KDBXL">
            <label for="tel" class="astro-UW5KDBXL">Phone number</label>
            <input type="tel" id="tel" value="" class="astro-UW5KDBXL">
          </formgroup>
          ${renderComponent($$result2, "Button", $$Button, { "href": "", "class": "astro-UW5KDBXL" }, { "default": ($$result3) => renderTemplate`Submit` })}
        </form>
      </div>
    </article></div>` })}`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/contact.astro");

const $$file$2 = "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/contact.astro";
const $$url$2 = "/contact";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About us", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="main astro-KH7BTL4R">
    ${renderComponent($$result2, "HerosectionSimple", $$HerosectionSimple, { "src": "/assets/about.webp", "class": "astro-KH7BTL4R" })}
  </div><div class="main astro-KH7BTL4R">
    <article class="astro-KH7BTL4R"><h1 class="astro-KH7BTL4R">This is Punkt Studio</h1><p class="astro-KH7BTL4R">Punkt Studio is love. Love has various dimensions and one of them
        relates to finding the right balance and functionality. We create
        interiors with the utmost attention to our clients’ needs and
        aspirations.</p><p class="astro-KH7BTL4R">To us, design is mostly a philosophy and a lifestyle. It breeds on
        imagination, on courage to test something new. Imagination is the key
        driver to accomplishing the basic human need for beauty.</p><hr class="astro-KH7BTL4R">
      <div class="vcard columns astro-KH7BTL4R">
        <div class="astro-KH7BTL4R"><img src="/assets/polly.webp" alt="Polly" class="astro-KH7BTL4R"><div class="vcard__content astro-KH7BTL4R"><p class="astro-KH7BTL4R">Polly Georgieva</p><quote class="astro-KH7BTL4R"><span class="astro-KH7BTL4R">Every room needs a touch of black, just as it needs at least
                one antiques piece.</span> - Jan Showers</quote></div></div>
        <div class="astro-KH7BTL4R"><img src="/assets/denitsa.webp" alt="Denitsa" class="astro-KH7BTL4R"><div class="vcard__content astro-KH7BTL4R"><p class="astro-KH7BTL4R">Denitsa Nikolova</p><quote class="astro-KH7BTL4R"><span class="astro-KH7BTL4R">An interior is the natural projection of the soul.</span> -
              Coco Chanel</quote></div></div>
      </div>
    </article></div>` })}`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/about.astro");

const $$file$1 = "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/about.astro";
const $$url$1 = "/about";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Page missing" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="main">
    <article>
      <h1>404 Page missing</h1>
      <p>Sorry but it seems this page is missing.</p>
    </article>
  </div>` })}`;
}, "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/404.astro");

const $$file = "/Users/nicolashervy/Documents/random stuff/studiopunkt/src/pages/404.astro";
const $$url = "/404";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
