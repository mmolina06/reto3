

//myFunction(['a','b','c'],[1,2,3])	
//myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}])	
//myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false])	

function myFunction(a,b){

const obj = {};

a.forEach((element, index) => {
if (b[index]== undefined){
    obj[element] = b[index].toString();
}
obj[element] = b[index];
});

return obj;
}
console.log(myFunction(['a','b','c'],[1,2,3]));	
console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]))	
console.log(myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false])	)