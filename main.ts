import { Hono } from 'hono'

import auth from './routes/auth/index.ts'
import dashbaord from './routes/app/index.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/auth', auth)
app.route('/app', dashbaord)


Deno.serve(app.fetch)
