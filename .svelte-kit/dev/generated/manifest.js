const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\universities\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\profile\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth\\redirect.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth\\register.svelte"),
	() => import("..\\..\\..\\src\\routes\\test.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/universities/index.svelte
	[/^\/universities\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/profile/index.svelte
	[/^\/profile\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/auth/index.svelte
	[/^\/auth\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/auth/redirect.svelte
	[/^\/auth\/redirect\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/auth/register.svelte
	[/^\/auth\/register\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/test.svelte
	[/^\/test\/?$/, [c[0], c[8]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];