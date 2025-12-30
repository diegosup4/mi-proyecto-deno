import { createServer } from "./server.ts";

const server = createServer();

const handler = (req: Request): Response => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Deno App</title>
        </head>
        <body>
          <h1>¡Hola desde Deno!</h1>
          <p>Pipeline CI/CD funcionando correctamente</p>
        </body>
      </html>`,
      {
        headers: { "content-type": "text/html; charset=utf-8" },
      },
    );
  }

  if (url.pathname === "/api/health") {
    return new Response(JSON.stringify({ status: "ok" }), {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response("Not Found", { status: 404 });
};

console.log(`Server running on http://localhost:${server.port}`);
Deno.serve({ port: server.port }, handler);
