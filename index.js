const globalVar = 'global';

if (globalVar) {
  const ifVar1 = 'ifVar1';

  console.log(ifVar1);
  console.log(globalVar);

  if (globalVar) {
    const ifVar2 = 'ifVar2';
    console.log(ifVar2);
    
    console.log(ifVar1);

    console.log(globalVar);
  }


} 


// console.log(ifVar);
console.log(globalVar);
