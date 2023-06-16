const transpose = function (matrix) {
const numRows = matrix.length;
const numColumns = matrix[0].length;
const transposedMatrix = [];

for(let col = 0; col<numColumns; col++){
  transposedMatrix[col] = [];
  for(let row =0; row<numRows; row++){
    // [col][row] = [row][col]
    transposedMatrix[col][row] = matrix[row][col];
  } 
}

  return transposedMatrix;
};

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  // search for word horizontally
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // search for word vertically
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};



module.exports = wordSearch