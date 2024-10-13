import { Hono } from 'hono'

import  dashboard  from  './app/index.ts'

const app = new Hono()

app.get('/', (c)=> {
    return c.text('Hello Lnqding Page!')
});


app.route("/app", dashboard);

export default app