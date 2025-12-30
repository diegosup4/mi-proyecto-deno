import { assertEquals } from "@std/assert";
import { add, multiply } from "../src/server.ts";

Deno.test("add function - suma dos números correctamente", () => {
  const result = add(2, 3);
  assertEquals(result, 5);
});

Deno.test("multiply function - multiplica dos números correctamente", () => {
  const result = multiply(4, 5);
  assertEquals(result, 20);
});
