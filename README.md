## Why i choose Deno ? 
<p>Deno is runtime for Javascript and Typescrit, it's lake a remake for node.js</p>

<p>Deno support TS in first class without need to external compiler or configuration</p>

<p> Deno uses A URL-BASED SYSTEM instead of package manager like npm , and there is no node_modules</p> 

```bash
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });
console.log("HTTP webserver running. Access it at: http://localhost:8000/");

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
```

**Hono downloads and cache the packages on my machine , no need to node_modules**

# This project is deployed using deployctl 
deployctl deploy : https://no-build-htmx-hono-stack.deno.dev/


## What is Hono 

<p>Hono is a small , fast and lightweight for building api and web application in different javascript run time ...</p>

<p>Hono is like Express, always use middleware</p>

```bash
import { Hono } from 'https://deno.land/x/hono/mod.ts';

const app = new Hono();

// Define a route for GET requests to "/"
app.get('/', (c) => c.text('Hello, Hono!'));

// Define a route for POST requests to "/data"
app.post('/data', (c) => {
  const data = c.req.body;
  return c.json({ received: data });
});

// Start the server on port 3000
app.fire();
```

<p> I use a one of helpers of hono which is HTML to generate html from the server side </p>

## What is HTMX

<p> HTMX is js library that allows to build dynamic web application without to javascript framework </p>

<p> Is like creating SPA without Javascript </p>

```bash
<!-- Trigger an AJAX GET request when the button is clicked -->
<button hx-get="/get-user-info" hx-target="#info">Get User Info</button>

<!-- The response from the server will be placed here -->
<div id="info"></div>
```

>When the button is clicked, HTMX will send a GET request to /get-user-info.
>
>The server will respond with HTML, and HTMX will insert that HTML into the <div id="info"> element.

**Often used with server side**

**No virtual DOM**

## What is Alpine.js

<p> Is a lightweight alternative for javascript framework like react , vue. it make SPA withoud refreshing the page or reload </p>

<p> No uses of build tools like webpack or babel </p>

**Good for small project**

```bash

<div x-data="{ open: false }">
  <!-- Button to open the modal -->
  <button x-on:click="open = true">Open Modal</button>

  <!-- Modal -->
  <div x-show="open" style="display: none;">
    <div class="modal">
      <p>This is a modal dialog.</p>
      <button x-on:click="open = false">Close Modal</button>
    </div>
  </div>
</div>

```bash



