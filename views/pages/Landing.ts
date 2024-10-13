import { html, raw } from "hono/html";
import Title from "../components/Title.ts";

export default function Landing() {
  return html`
    <div>
    ${Title({title:'App',primary:false})}
      <p>This is a landing page for Hono and HTMX and ALPINE</p>
      <a href="/auth/login">Login</a>
    </div>
  `;
}
