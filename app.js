document.body.style.textAlign="center";
document.body.style.marginTop="50px";
document.body.style.backgroundColor="Fuchsia";
document.body.style.fontSize="30px";
document.body.style.fontWeight="500";

var array=[1, 67, 34, 56, 55, 10, 7, 30, 20];
var index=0;

while(index<array.length){
    document.getElementById('text').innerHTML=  ("მოცემულია მასივი: ") + array;
    if(array[index] % 5 ==0){
       
      
        document.write(array[index], "- 5-ზე უნაშთოდ  იყოფა. <br>");
             
       
    }
    

    index++;
}

