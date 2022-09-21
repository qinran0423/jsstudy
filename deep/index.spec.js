import { expect, test } from "vitest"
import { getMaxWidth } from "./index"

test("deep", () => {
  const arr = [
    { width: 50 },
    { width: 100 },
    {
      width: 200,
      children: [{ width: 300 }]
    },
    {
      width: 50,
      children: [
        {
          width: 200,
          children: [
            {
              width: 400
            }
          ]
        }
      ]
    }
  ]

  expect(getMaxWidth(arr)).toBe(400)
})
