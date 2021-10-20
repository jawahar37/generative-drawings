/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

const config = {
	kit: {
		paths: {
			base: dev ? '' : '/generative-drawings',
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
