export function fib(n: number, memo = {}){
    if(n < 2 ) return n;
    if(n in memo) return memo[n];
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}
