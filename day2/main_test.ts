import { assertEquals } from "@std/assert";
import { pt1test, /* pt2test */ } from "./main.ts";

Deno.test(function testpt1() {
  assertEquals(pt1test(), 2);
});

/* Deno.test(function testpt2() {
  assertEquals(pt2test(), 4);
});
*/