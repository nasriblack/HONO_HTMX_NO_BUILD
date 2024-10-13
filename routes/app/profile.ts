import { Hono } from 'hono'
import { AppLayout } from "../../views/pages/AppLayout.ts";
import Profile from "../../views/pages/Profile.ts";


const app = new Hono()

// get
app.get('/', (c)=> {
    return c.html(AppLayout({title:'My Profile', content:Profile()}))
});

//post
app.post("/", (c)=> {
    return c.text('Thanks for the post!',)
})


export default app