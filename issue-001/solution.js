/**
 * Issue #1: Drill 0: ArraySum
 */

function arraySum(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}