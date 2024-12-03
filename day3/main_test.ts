import { assertEquals } from "@std/assert";
import { testpt1, testpt2 } from "./main.ts";

Deno.test(function pt1Test() {
  assertEquals(testpt1(), 161);
});

Deno.test(function pt2Test() {
  assertEquals(testpt2(), 48);
});