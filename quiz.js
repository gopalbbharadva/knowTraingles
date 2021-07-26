var form=document.querySelector('form');
var score=document.querySelector('.formula');
var h2=document.querySelector('h2');
var btn=document.querySelector('button');
var questions=document.querySelectorAll('.question')

var options=["o1","o3","o2","o2","o3","o3","o2","o1"];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var answers=new FormData(form);
    var i=0,s=0;
    for(var ans of answers){
        if(ans[1] == options[i]){
            console.log(questions[i]);
            questions[i].style.backgroundColor="#34D399";
            s++;
        }else{
            questions[i].style.backgroundColor='#F87171';
        }
        i++;
    }
    score.innerText=s;
    btn.style.display='none';
})