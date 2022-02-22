// Some array with only sorted beginning
let arr = [1, 2, 7, 5, 12, 84, 9, 16, 17]

function insertionSort(n) {
    for (let i = 1; i < n.length; i++) {
        for (let j = 0; j < i; j++) {
            if (n[i] < n[j]) {
                let spl = n.splice(i, 1)
                n.splice(j, 0, spl[0])
            }
        }
    }
    return n
}

console.log(insertionSort(arr));
