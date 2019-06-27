const createEmptyTable = () =>
  new Array(8).fill(null).map(
    () => new Array(6).fill(null)
);

// the above shoud look like this 
// (8)[Array(6), Array(6), Array(6), Array(6), Array(6), Array(6), Array(6), Array(6)]
// 0 (6)[null, null, null, null, null, null]
// 1 (6)[null, null, null, null, null, null]
// 2 (6)[null, null, null, null, null, null]
// 3 (6)[null, null, null, null, null, null]
// 4 (6)[null, null, null, null, null, null]
// 5 (6)[null, null, null, null, null, null]
// 6 (6)[null, null, null, null, null, null]
// 7 (6)[null, null, null, null, null, null]


let table = createEmptyTable() //?


const checkElements = ([head, ...tail], matchCount = 0, lastElement = null) => {
  if (matchCount === 3 && head === lastElement) return true;
  if (tail.length === 0) return false;
  if (head === null) return checkElements(tail);
  if (head === lastElement) return checkElements(tail, matchCount + 1, head);
    return checkElements(tail, 1, head);
}


const checkColumns = table =>
  table.reduce(
  (hasMatch, column) => hasMatch || checkElements(column),
     false
);


const checkRows = table => {
  for (let i = 0; i < table[0].length; ++i) {
    let rowArray = table.map(column => column[i]);
      if (checkElements(rowArray)) return true;
    }
    return false;
}


const checkTable = table => checkRows(table) || checkColumns(table)

