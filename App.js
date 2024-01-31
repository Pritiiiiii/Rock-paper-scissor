const imgs = document.querySelectorAll('.choose');
const result = document.querySelector('.result');
const user=document.querySelector('.user');
const computer=document.querySelector('.computer');

let userCount = 0;
let comCount = 0;
const Compchoice =()=>{
    const Choices = ['rock','paper','scissor'];
    let comp = Choices[Math.floor(Math.random()*3)];
    return comp;
}
const choosen=(e)=>{
    const yourchoice = e.target.id;
    const compchoose = Compchoice();
    if(compchoose == yourchoice){
        result.innerHTML = "Draww";
    }
    else if(compchoose == 'paper' && yourchoice == 'rock')
    {
        result.innerHTML = `Comp choose ${compchoose} Computer Win!!`;
        comCount++;
    }
    else if(compchoose == 'scissor' && yourchoice == 'paper')
    {
        result.innerHTML = `Comp choose ${compchoose} Computer Win!!`;
        comCount++;
    }
    else if(compchoose == 'rock' && yourchoice == 'scissor')
    {
        result.innerHTML = `Comp choose ${compchoose} Computer Win!!`;
        comCount++;
    }
    else{
        result.innerHTML = `You Win, Computer Choose ${compchoose}`;
        userCount++;
    }

    user.innerHTML = userCount;
    computer.innerHTML = comCount;
    
}
    for(let img of imgs){
        img.addEventListener('click', choosen );   
    }

