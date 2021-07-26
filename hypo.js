var inputs=document.querySelectorAll('input');
var form=document.querySelector('form');
var result=document.querySelector('.formula');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var x=inputs[0];
    var y=inputs[1];
    var hypo=Math.sqrt((x.value*x.value)+(y.value*y.value));
    result.innerText=hypo;
    x.value='';
    y.value='';
})