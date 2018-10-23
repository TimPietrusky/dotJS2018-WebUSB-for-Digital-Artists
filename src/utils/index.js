export const select = (
  [aL = 0, aC = 0],
  [hL = 0, hC = 0]
) => ({
  anchor: {
    line: aL,
    ch: aC
  },
  head: {
    line: hL,
    ch: hC
  }
})
