 export function binarySearch(
    list,
    value,
    compareFunc
  ) {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
  
    while (start <= end) {
      tempIndex = Math.floor((start + end) / 2);
      const midValue = list[tempIndex];
  
      const compareRes = compareFunc(midValue, value);
      if (compareRes === 1) {
        return tempIndex;
      }
  
      if (compareRes === 2) {
        start = tempIndex + 1;
      } else if (compareRes === 3) {
        end = tempIndex - 1;
      }
    }
  
    return tempIndex;
  }
  