
console.log(para);
var para= document.getElementById('para')

para.innerHTML= "fhh0";
para.style.textAlign="center";
para.style.backgroundColor="red";

//console.log(para.attributes)
var x=10;
console.log(x);
{
   var  x=20;
    console.log(x);
}

console.log(x);

document.write("hello")
console.log('hello');

(function(){
   // var x=40;
    console.log(x + "inside function");
        console.log("bye");
    }
    )()

    console.log(x+"outside");

    let a=5;
 //   console.log(a);
    {
        a=10;
    console.log(a);
    }
    (function(){
        // var x=40;
       var a=55;
         console.log(a + "inside function");
             console.log("bye");
         }
         )()
     
    console.log(a);














    //////////////////////////////////////////////////////////////
    //map filter reduce

    const arr=[
    {fname:"abhi",lname:"v",age:3},
    {fname:"ram",lname:"v",age:4},
    {fname:"aas",lname:"v",age:5},
    {fname:"ab",lname:"v",age:6},
    {fname:"abc",lname:"v",age:7}
]

const ouptut=arr.filter((x)=>{
    if(x.age>4) {return x.fname;}
}).map((x)=>x.fname)

//using map will return those values which satisfy conditon and for those value 
//which doen satisfy return undefined

//so map is only when to change values not to filter for filtering use filter()


console.log(ouptut);
