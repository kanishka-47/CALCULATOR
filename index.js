(function(){
let buttons = document.querySelectorAll('#z');
let screen= document.querySelector(".screen");
let equal = document.querySelector(".F");
let clear = document.querySelector(".H");
buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
    let value=e.target.dataset.num;
      screen.value=screen.value+value;
    })
});
equal.addEventListener('click',()=>{
    if(screen.value===' '){
        let value ="please enter any value";
        alert(value);
    }
    else{
        let answer = eval(screen.value);
        screen.value= answer;
    }})
    clear.addEventListener('click',()=>{
        screen.value=" ";
    })
})();
