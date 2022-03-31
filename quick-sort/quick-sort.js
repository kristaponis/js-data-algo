function quickSort(n) {
    if (n.length <= 1) {
        return n
    }

    const pivot = n[n.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < n.length - 1; i++) {
        if (n[i] < pivot) {
            left.push(n[i])
        } else {
            right.push(n[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
