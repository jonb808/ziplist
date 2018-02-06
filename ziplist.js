const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

// returns result of alternatingly taking elements
function ziplist(list1, list2) {
  const finalList = [];
  if (list1.length !== list2.length) {
    return console.log('2 lists must be of equal length');
  }
  for (let i = 0; i < list1.length; i++) {
    finalList.push(list1[i]);
    finalList.push(list2[i]);
  }
  return finalList;
}

console.log(ziplist(listOne, listTwo));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listOne, listTwo));
