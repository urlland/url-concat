// Copyright 2022-latest the urlland authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isTruthy } from "./deps.ts";

/** Securely concatenate URL paths.
 * The concatenation is free of duplicate slashes.
 * Empty segments are ignored.
 *
 * Behaves strictly according to the meaning of "concatenation".
 * Do nothing about anything other than the concatenation, e.g., head and tail slashes.
 */
export function concatPath(...paths: readonly string[]): string {
  const [head, ...tail] = paths.filter(isTruthy);

  if (!head) return "";

  const reLeft = /\/+$/g;
  const reRight = /^\/+/g;

  return tail.reduce((acc, cur) => {
    const left = acc.match(reLeft)?.[0] ?? "";
    const right = cur.match(reRight)?.[0] ?? "";
    const slashes = Math.max(1, left.length, right.length);

    return acc.replaceAll(reLeft, "") + "/".repeat(slashes) +
      cur.replaceAll(reRight, "");
  }, head);
}
