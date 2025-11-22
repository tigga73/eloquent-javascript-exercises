function reverseArray(arr) {
  if (arr.length <= 0) return
  if (arr.length === 1) return arr[0]

  const reverseArray = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i])
  }

  return reverseArray
}

// function reverseArrayInPlace() { }

const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr))

