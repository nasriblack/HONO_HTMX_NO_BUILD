import { Hono } from 'hono'


const app = new Hono()

app.get('/', (c)=> {
    return c.text('Hello Profile Page!')
});


app.post("/", (c)=> {
    return c.text('Thanks for the post!',)
})


export default app