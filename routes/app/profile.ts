import { Hono } from 'hono'


const app = new Hono()

// get
app.get('/', (c)=> {
    return c.text('Hello Profile Page!')
});

//post
app.post("/", (c)=> {
    return c.text('Thanks for the post!',)
})


export default app