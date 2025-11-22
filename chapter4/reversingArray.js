function reverseArray(arr) {
  if (arr.length <= 0) return
  if (arr.length === 1) return arr[0]

  const reverseArray = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i])
  }

  return reverseArray
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const old = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = old
  }

  return arr
}

const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr))

reverseArrayInPlace(arr)
console.log(arr)
