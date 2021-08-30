/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		paths: {
			base: '/generative-drawings',
		},
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		files: {
			routes: 'src/pages',
		},
	},
};

export default config;