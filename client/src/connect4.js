const createEmptyTable = () =>
  new Array(6).fill(null).map(
    () => new Array(7).fill(0)
);

  

// the above shoud look like this 
// (8)[Array(6), Array(6), Array(6), Array(6), Array(6), Array(6), Array(6), Array(6)]
// 0 (6)[null, null, null, null, null, null]
// 1 (6)[null, null, null, null, null, null]
// and so on for a couple more



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



function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
  }
  
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });
  
