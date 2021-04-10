import test from "ava";
import { getMeterPrice } from "../../services/pricing.js";

// Unit test
test.serial("getMeterPrice | pass test", (t) => {
  const value = getMeterPrice();
  const expected = 9800;

  t.is(
    value,
    expected,
    `The function expected ${expected} as value but received ${value}`
  );
});
