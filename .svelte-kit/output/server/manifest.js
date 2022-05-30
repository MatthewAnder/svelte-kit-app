export const manifest = {
	appDir: "_app",
	assets: new Set(["Hamburger Menu.svg","Logos/JP Morgan.svg","Logos/Samsung.svg","Logos/Tinder.svg","Logos/Verizon.svg","Logos/Visa.svg","Logos/Walmart.svg","Social Icons/Github.svg","Social Icons/LinkedIn.svg","Social Icons/Twitter.svg","Spense.png","YelpCamp.png","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"start-7844553e.js","js":["start-7844553e.js","chunks/index-ab700c65.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "About",
				pattern: /^\/About\/?$/,
				names: [],
				types: [],
				path: "/About",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "Articles",
				pattern: /^\/Articles\/?$/,
				names: [],
				types: [],
				path: "/Articles",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "Awards",
				pattern: /^\/Awards\/?$/,
				names: [],
				types: [],
				path: "/Awards",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Chats",
				pattern: /^\/Chats\/?$/,
				names: [],
				types: [],
				path: "/Chats",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
