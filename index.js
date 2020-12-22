const globalVar = 'global';

if (globalVar) {
  const ifVar = 'ifVar1';

  console.log(ifVar);
  console.log(globalVar);

  if (globalVar) {
    const ifVar = 'ifVar2';
    console.log(ifVar);
    console.log(globalVar);
  }


} 


// console.log(ifVar);
console.log(globalVar);
