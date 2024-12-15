let userscore =0;
let compscore=0;

const userscorepara=document.getElementById("user_score");
const compscorepara=document.getElementById("comp_score")

const choices=document.querySelectorAll(".choice");
const gencompchoice =()=>{
    const option=["rock","paper","scissors"];
const randomidx=Math.floor(Math.random()*3);
return option[randomidx];


}
let msg=document.getElementById("msg");

const showwinner=(userwin , userchoice, compchoice)=>{
if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log("you win");
msg.innerText=`You Win. Your ${userchoice} beats ${compchoice}`;
msg.style.background="green"
}
else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("you lose");
    msg.innerText=`You Lost. ${compchoice} beats your ${userchoice}`
    msg.style.background="red"
}
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play again"
    msg.style.background="darkblue"
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
}
let playgame=(userchoice)=>{
    console.log(`user choice = ${userchoice}`);
    const compchoice=gencompchoice()
    console.log(`comp choice = ${compchoice}`);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
showwinner(userwin,userchoice,compchoice);
    }
};

    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userchoice = choice.getAttribute("id");
            playgame(userchoice);
        })
    })
