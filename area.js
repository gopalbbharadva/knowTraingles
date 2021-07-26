var inputs=document.querySelectorAll('input');
var result=document.querySelector('.formula');
var form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(inputs)
    var base=inputs[0];
    var height=inputs[1];
    var area=1/2*(base.value*height.value);
    result.textContent=area;
    inputs[0].value=' ';
    inputs[1].value=' ';
})