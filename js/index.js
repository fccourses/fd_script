const mySymbol = Symbol();

const object = {
  test: 1,
  [mySymbol]: 2,
};

const myMap = new Map(); // Ассоциативный массив
myMap.set(1, 'Value1');
myMap.set('1', true);

console.log(myMap.get(1));
console.log(myMap.get('1'));


myMap.set(1,{newProp:'test'});
myMap.set(object,function(){})

