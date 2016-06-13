/*
 * The chocolate bar puzzle has three parameters:
 *  - Two side lengths (m and n)
 *  - Selection of lines along which to break the bar and its parts.
 * Keeping m and n fixed for a few trials leaves a lot of room to experiment with the third parameter
 * even for small values of m and n. Following this venue it is hard to miss the fact that:
 *  - The number of breaks actually does NOT depend on the sequence of moves.
 * After several attempts it becomes clear that the number of breaks it takes to split a chocolate bar
 * into its constituent squares depends on:
 *  - Neither its shape 
 *  - Nor the selected sequence of breaks
 * But only on the total number of squares m*n. Furthermore, denoting this number as f(m*n) we summarize:
 *  - f(m*n) = m*n - 1.
 */

var breakChocolate = function(n, m) {
  return n * m - 1;
};