var toDos = [
    "clean room",
    "brush teeth",
    "walk with dogs",
    "study javascript",
    "eat healty"
];

for (var i=0; i<toDos.length; i++){
    console.log(toDos[i]);
}

console.log('adding "!" at the end:');

for (var i=0; i<toDos.length; i++){
 toDos[i] = toDos[i]+"!";
 console.log(toDos[i]);
}

b = 0;
while(b<=10){
    console.log(b);
    b++;
}

c=0;
do{
    console.log("comi "+c+" maçã");
    c++;
}while(c<10);