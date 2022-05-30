export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\About.svelte"),
	() => import("..\\..\\src\\routes\\Articles.svelte"),
	() => import("..\\..\\src\\routes\\Awards.svelte"),
	() => import("..\\..\\src\\routes\\Chats.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"About": [[0, 2], [1]],
	"Articles": [[0, 3], [1]],
	"Awards": [[0, 4], [1]],
	"Chats": [[0, 5], [1]]
};