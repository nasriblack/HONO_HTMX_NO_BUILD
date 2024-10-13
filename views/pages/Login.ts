import {html} from 'hono/html'

export default function Login() {
    return html`
    <form
      hx-post="/auth/login"
      hx-target="#login-form"
      hx-swap="outerHTML"
      hx-trigger="submit"
    >
      
      <div id="login-form">
        <h1>Login Page</h1>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </div>
    </form>
    ` 
}