function mergeSort(n) {
    if (n.length < 2) {
        return n
    }

    const length = n.length
    const middle = Math.floor(length / 2)
    const left = n.slice(0, middle)
    const right = n.slice(middle, length)

    return stitch(mergeSort(left), mergeSort(right))
}

function stitch(n1, n2) {
    const res = []

    while (n1.length && n2.length) {
        if (n1[0] <= n2[0]) {
            res.push(n1.shift())
        } else {
            res.push(n2.shift())
        }
    }

    while (n1.length) {
        res.push(n1.shift())
    }

    while (n2.length) {
        res.push(n2.shift())
    }

    return res
}
