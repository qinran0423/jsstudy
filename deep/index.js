export function getMaxWidth(arr, maxWidth = 0) {
  arr.forEach((element) => {
    maxWidth = Math.max(
      maxWidth,
      element.children ? getMaxWidth(element.children, maxWidth) : element.width
    )
  })

  return maxWidth
}
