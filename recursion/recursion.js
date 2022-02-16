// Basic recursion example
function recursion(n, max) {
    // Firstly, a base case when to stop,
    // this goes (mostly) as the first line
    if (n > max) {
        return
    }
    
    recursion(max, n + 1)
}

// Fibonacci sequence
function fibonacci(n) {
    if (n <= 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

for (let i = 1; i < 10; i++) {
    console.log(i, fibonacci(i))
}

// Factorial
function factorial(n) {
    if (n < 2) {
        return 1
    }
    
    return n * factorial(n - 1)
}
