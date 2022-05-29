import { g as getContext, c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-23a4675b.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main><ul class="${"flex flex-row content-between place-content-center bg-lime-500 font-extrabold"}"><li class="${[
    "px-5 py-3 bg-transparent hover:bg-green-200 duration-200",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}"><a class="${"text-white"}" sveltekit:prefetch href="${"/"}">Home</a></li>
    <li class="${[
    "px-5 py-3 bg-transparent hover:bg-green-200 duration-200",
    $page.url.pathname === "/about" ? "active" : ""
  ].join(" ").trim()}"><a class="${"text-white"}" sveltekit:prefetch href="${"/about"}">About</a></li>
    <li class="${[
    "px-5 py-3 bg-transparent hover:bg-green-200 duration-200",
    $page.url.pathname === "/todos" ? "active" : ""
  ].join(" ").trim()}"><a class="${"text-white"}" sveltekit:prefetch href="${"/todos"}">Todo</a></li></ul></main>`;
});
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

  ${slots.default ? slots.default({}) : ``}</main>`;
});
export { _layout as default };
