import { concatPath } from "./concats.ts";
import { describe, expect, it } from "./dev_deps.ts";

describe("concatPath", () => {
  it("should return non duplicated slash path", () => {
    const table: [string[], string][] = [
      [[""], ""],
      [["", "", "", ""], ""],
      [["////"], "////"],
      [["//aaa//"], "//aaa//"],
      [[" "], " "],
      [["", "", ""], ""],
      [["/", ""], "/"],
      [["/", "/"], "/"],
      [["////", ""], "////"],
      [["/abc", "/abc/"], "/abc/abc/"],
      [["a", "a"], "a/a"],
      [["/abc/", "/abc/"], "/abc/abc/"],
      [["//abc//", "abc"], "//abc//abc"],
      [["//abc//", "/abc"], "//abc//abc"],
      [["abc", "abc"], "abc/abc"],
      [["", " "], " "],
      [["", " ", " "], " / "],
      [["abc", "abc", "abc"], "abc/abc/abc"],
      [["/abc/", "/abc/", "/abc/"], "/abc/abc/abc/"],
      [["///abc/", "/abc/", "/abc///"], "///abc/abc/abc///"],
      [["///abc///", "///abc////", "///abc///"], "///abc///abc////abc///"],
      [["abc/", "//abc///", "////abc/////"], "abc//abc////abc/////"],
    ];

    table.forEach(([paths, result]) =>
      expect(concatPath(...paths)).toBe(result)
    );
  });
});
