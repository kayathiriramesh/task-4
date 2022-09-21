var obj1={name:"person1",age:5};
var obj2={age:5,name:"person2"};
var s1=JSON.stringify(obj1);
var s2=JSON.stringify(obj2);
if(s1==s2)
{
    console.log("true");
}
console.log("false");

//DISPLAY ALL COUNTRIES FLAG, COUNTRIES NAME,REGIONS, SUB-REGIONS AND POPULATIONS
    

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(i=0;i<result.length;i++)
    {
        console.log(result[i].flags,result[i].name,result[i].region,result[i].subregion,result[i].population);
        }
    };

    