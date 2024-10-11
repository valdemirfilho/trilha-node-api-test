import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/", async () => {
  const tables = await knex("sqlite_schema").select("*");
  return tables;
});

app
  .listen({
    port: 5000,
  })
  .then(() => {
    console.log("Server running in http://localhost:5000");
  });
