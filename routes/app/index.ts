import { Hono } from 'hono'

import  profile  from  './profile.ts'

const app = new Hono()

app.get('/', (c)=> {
    return c.text('Hello App Page!')
});


app.route("/profile", profile);

export default app