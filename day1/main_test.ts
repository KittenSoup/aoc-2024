import { assertEquals } from "@std/assert";
import { testpt1, testpt2 } from "./main.ts";

Deno.test(function mockDataPt1() {
  assertEquals(testpt1(), 11);
});

Deno.test(function mockDataPt2() {
  assertEquals(testpt2(), 31);
});
