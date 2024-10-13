import { html } from 'hono/html'
import type { HtmlEscapedString } from "hono/utils/html";

export const AppLayout = ({title, content}: {
    title:string;
    content:HtmlEscapedString | Promise<HtmlEscapedString>
}) => {
// export const AppLayout = (title: string, content: HtmlEscapedString | Promise<HtmlEscapedString>) => {
    return html`
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <script 
                    src="https://unpkg.com/htmx.org@2.0.3" 
                    integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq"
                    crossorigin="anonymous">
                </script>
                <script  
                    src="//unpkg.com/alpinejs" defer>
                </script>
                <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
            </head>
            <body>
                <nav class="navbar">
                    <a href="/"> dashboard</a>
                    <a href="/profile"> Profile</a>
                    <a href="/auth/logout"> logout</a>
                </nav>
                ${content}
            </body>
        </html>
    `
}