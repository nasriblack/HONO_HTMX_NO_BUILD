import { Hono } from 'hono'

import  login  from  './login.ts'

const app = new Hono()

app.get('/', (c)=> {
    return c.text('Hello Auth Page!')
});


app.route("/login", login);

export default app