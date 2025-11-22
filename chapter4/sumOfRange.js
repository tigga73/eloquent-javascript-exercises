function rangeToArray(start, end, step = 1) {
  let arr = []

  if (start < end) {
    for (let i = start; i <= end; i+= step) {
      arr.push(i)
    }
  } else {
    for (let i = start; i >= end; i+= step) {
      arr.push(i);
    }
  }

  return arr
}

function sumOfArray(arr) {
  if (arr.length === 0) return
  if (arr.length === 1) return arr[0]

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

console.log(rangeToArray(1, 10))
console.log(sumOfArray(rangeToArray(1, 10)))

console.log(rangeToArray(1, 10, 2))
console.log(rangeToArray(5, 2, -1))
