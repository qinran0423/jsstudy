export function compactObject(val) {
  const data = Array.isArray(val) ? val.filter(Boolean) : val
  return Object.keys(data).reduce(
    (acc, key) => {
      if (data[key]) {
        acc[key] =
          typeof data[key] === "object" ? compactObject(data[key]) : data[key]
      }

      return acc
    },
    Array.isArray(data) ? [] : {}
  )
}
