import { Hono } from 'hono'
import Login from "../../views/pages/Login.ts";
import { Layout } from "../../views/Layout.ts";


const app = new Hono()

app.get('/', (c)=> {
    return c.html(Layout({title:'Login', content:Login()}))
});

app.post("/", (c)=> {
    return c.redirect("/app")
})


export default app