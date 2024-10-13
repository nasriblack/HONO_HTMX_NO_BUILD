import { Hono } from 'hono'

import  profile  from  './profile.ts'
import { AppPage } from "../../views/pages/App.ts";
import { AppLayout } from "../../views/pages/AppLayout.ts";

const app = new Hono()

app.get('/', (c)=> {
    return c.html(AppLayout({title:'App', content:AppPage()}))
});


app.route("/profile", profile);

export default app