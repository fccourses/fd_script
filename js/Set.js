const set = new Set([1, 1, 2, 3, 4, 5]);

/* for (const item of set.values()) {
  console.log(item);
}

for (const item of set.entries()) {
  console.log(item); // ['value','value'];
} */

const arr = [...set];
const newSet = new Set([...arr]);

const nums1 = [99,1, 2, 12, 4, 235, 31, 3, 325, 234, 12, 13243, 43, 243];
const nums2 = [1, 2, 3, 2345, 756, 34, 4532, 43, 12, 13243, 43, 243];

const unique = [...new Set([...nums1, ...nums2])]; // уникальные значения из двух массивов

/* 
for(const item of vocabulary.values()){
  console.log(item);
} 

for(const item of vocabulary){
  console.log(item); // ['key', 'value']
} */
