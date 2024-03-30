import { Elysia, t } from 'elysia';

const app = new Elysia({ aot: false })
	// #region endpoints
	.get('/', () => ({ hello: 'Elysia' }))
	.post('/greeting', ({ body: { name } }) => ({ hello: name }), {
		body: t.Object({ name: t.String() }),
	})
	// #endregion
	.get('/bogus', () => ({}));

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return await app.fetch(request);
	},
};
