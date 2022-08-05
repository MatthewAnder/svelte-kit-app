export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\articles.svelte"),
	() => import("..\\..\\src\\routes\\awards.svelte"),
	() => import("..\\..\\src\\routes\\chats.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"about": [[0, 2], [1]],
	"articles": [[0, 3], [1]],
	"awards": [[0, 4], [1]],
	"chats": [[0, 5], [1]]
};