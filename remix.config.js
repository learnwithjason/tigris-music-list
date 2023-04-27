/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	routes: async (defineRoutes) => {
		return defineRoutes((route) => {
			route('/', 'index.tsx', { id: 'index' });
			route('*', 'index.tsx', { id: 'splat' });
		});
	},
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
};
