var inputs=document.querySelectorAll('input');
var form=document.querySelector('form');
var result=document.querySelector('.formula');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var x=inputs[0];
    var y=inputs[1];
   if(x.value >0 && y.value>0){
    var hypo=Math.sqrt((x.value*x.value)+(y.value*y.value));
    result.innerText=hypo;
    x.value='';
    y.value='';
   }
   else
       alert("Please enter values greater than 0!!")
})