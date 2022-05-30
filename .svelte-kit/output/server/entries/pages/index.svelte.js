import { c as create_ssr_component, e as escape, a as each, b as add_attribute, v as validate_component } from "../../chunks/index-fa0ff56f.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { btnStatus = "" } = $$props;
  if ($$props.btnStatus === void 0 && $$bindings.btnStatus && btnStatus !== void 0)
    $$bindings.btnStatus(btnStatus);
  return `<button class="${"header bg-yellow-300 text-black py-2.5 px-5 phone:" + escape(btnStatus) + " laptop:block"}">${slots.default ? slots.default({}) : ``}</button>`;
});
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [
    {
      image: ".././Spense.png",
      name: "Spense.com",
      content: "Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc"
    },
    {
      image: ".././YelpCamp.png",
      name: "YelpCamp.com",
      content: "Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021"
    }
  ];
  return `<ul class="${"flex justify-between mt-12 laptop:flex-row phone:flex-col"}">${each(projects, (project) => {
    return `<li class="${"laptop:w-5/12 laptop:py-0 phone:py-3"}"><img${add_attribute("src", project.image, 0)} alt="${"project"}">
      <h3 class="${"my-3"}">${escape(project.name)} \u2192</h3>
      <p>${escape(project.content)}</p>
    </li>`;
  })}</ul>`;
});
const CompanyList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [
    {
      source: "../Logos/Walmart.svg",
      delay: 500
    },
    {
      source: "../Logos/JP Morgan.svg",
      delay: 600
    },
    { source: "../Logos/Visa.svg", delay: 700 },
    {
      source: "../Logos/Tinder.svg",
      delay: 700
    },
    {
      source: "../Logos/Samsung.svg",
      delay: 600
    },
    {
      source: "../Logos/Verizon.svg",
      delay: 500
    }
  ];
  return `<div class="${"flex justify-between items-center mt-16 h-full laptop:flex-row phone:flex-wrap"}">${each(images, (image) => {
    return `<div class="${"laptop:basis-auto tablet:basis-1/3 phone:basis-1/2 laptop:p-0 phone:p-3"}"><img class="${"text-center"}"${add_attribute("src", image.source, 0)} alt="${"logos"}"></div>`;
  })}</div>`;
});
const Speech = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"py-14 my-14 bg-[#2e3038] laptop:-mx-44 tablet:-mx-32 phone:-mx-10"}"><div class="${"flex laptop:flex-row phone:flex-col justify-between laptop:mx-44 tablet:mx-32 phone:mx-10"}"><div class="${"laptop:w-5/12"}"><h3>A co-founder at one of the world&#39;s largest communities</h3>
      <p>The combined experience I have working at the top Fortune 500 companies has allowed me to developer a skillset that helps me in not just development, but in every aspect of any business. 
        <br><br>
        I&#39;m proud to announce that I am now working at one of the world&#39;s largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world of opportunities.
      </p></div>
    <div class="${"laptop:w-5/12"}"><p>As a developer, you have everything available to you and all that&#39;s holding you back is yourself. 
        <br><br>
        A quote I live by perfectly illustrates what I mean.
        <br><br>
        &quot;How big would you dream, if you knew you wouldn&#39;t fail?&quot; You&#39;ve already gone through the hardest parts being a developer, it&#39;s time to elevate your skills and become a leader in something you&#39;re passionate about.
        <br><br>
        I&#39;m happy to chat over coffee some time about how I can help your company.
      </p></div></div></div>`;
});
const CallToAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"laptop:w-5/12 my-20"}"><h3>Interested in working with me?</h3>
  <p class="${"my-3"}">I&#39;m active on all social media platforms listed below, but you can also mail me an email and I will get back to your within 24-28 hours.</p>
  ${validate_component(Button, "Button").$$render($$result, { btnStatus: "block" }, {}, {
    default: () => {
      return `Get in touch`;
    }
  })}</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<div><div class="${"laptop:w-7/12"}"><h1 class="${"mt-20"}">Helping companies build better, scalable software.</h1>
    <p class="${"mt-3 laptop:w-10/12"}">Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more</p></div>

  ${validate_component(CompanyList, "CompanyList").$$render($$result, {}, {}, {})}
  ${validate_component(ProjectList, "ProjectList").$$render($$result, {}, {}, {})}
  ${validate_component(Speech, "Speech").$$render($$result, {}, {}, {})}
  ${validate_component(CallToAction, "CTA").$$render($$result, {}, {}, {})}</div>`;
});
export { Routes as default };
