function compressString(data = '') {
  if (!data || data.length < 2) return data;

  let compressed = '';
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    let current = data[i];
    let next = data[i + 1];

    if (current === next) {
      count++;
      continue;
    }
    
    compressed = compressed + current;
    if (count > 1) {
      compressed = compressed + count;
    }
    count = 1;    
  }

  return compressed;
};

console.log('>Result 1 = ', compressString('a'));
console.log('>Result 2 = ', compressString('aaabcc'));
console.log('>Result 3 = ', compressString('abcdddssswwdef!@@@@'));
console.log('>Result 4 = ', compressString(''));