import { Hono } from 'hono'

import auth from './routes/auth/index.ts'
import dashbaord from './routes/app/index.ts'
import landing from './routes/index.ts'
const app = new Hono()


app.route('/', landing)
app.route('/auth', auth)
app.route('/app', dashbaord)


Deno.serve(app.fetch)
