import {html} from 'hono/html'
import Title from "../components/Title.ts";

export const AppPage = () => {
    return html`
        <div>
            ${Title({title:'App',primary:true})}
            <p>Welcome to the app</p>
        </div>    
    `
}