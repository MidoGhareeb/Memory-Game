//set variables
let start =document.querySelector(".start-control span");
let splashScreen=document.querySelector(".start-control");
let namePlayer=document.querySelector(".info-container .name span");
//function for start game button
start.onclick=function () {
    //prompet for ask the user's Name
    let yourName =prompt("Whats Your Name?");
    let nameWinner =document.getElementById("namee")
    //if the name is empty and make it unknown
    if(yourName == null || yourName ==""){
        namePlayer.innerHTML="Unknown"
        nameWinner.innerHTML="Unknown";
        //if not empty and make it your name
    }else{
        namePlayer.innerHTML=yourName;
        nameWinner.innerHTML=yourName;
    };
    //remove splash screen
    splashScreen.remove();
    document.getElementById("back").play();
}

//set the duaration
let duration =1200;
//select game container
let blocksContainer=document.querySelector(".game-container");
//create array
let blocks=Array.from(blocksContainer.children);

//create range of keys
let order =[...Array(blocks.length).keys()];
shuffle (order)
//add css property order to game block
blocks.forEach((block, index) =>{
    block.style.order=order[index];
    
    block.addEventListener("click",function(){
        flipBlock(block)
    })


});
//flip function
function flipBlock(selectedBlock){
    selectedBlock.classList.add("rotate")
    let allflibBlock =blocks.filter(flippedBlocks => flippedBlocks.classList.contains("rotate"))
    if(allflibBlock.length === 2){
        noclicking()
        ifMatched(allflibBlock[0] , allflibBlock[1])
    }
}
//noclicking function
function noclicking(){
    blocksContainer.classList.add("no-clicking")
    setTimeout(()=>{
        blocksContainer.classList.remove("no-clicking")
    },duration)
} 
// if matched blocks
function ifMatched(firstBlock , secondBlock){
    let tries =document.querySelector(".tries span");
    let triesTotal =document.querySelector(".Totaltries span");
    let score =document.querySelector(".score span");
    if(firstBlock.dataset.sponge === secondBlock.dataset.sponge){
        firstBlock.classList.remove("rotate");
        secondBlock.classList.remove("rotate");
        firstBlock.classList.add("match");
        secondBlock.classList.add("match");        
        triesTotal.innerHTML=parseInt(triesTotal.innerHTML)+1;
        score.innerHTML=parseInt(score.innerHTML)+1;
        document.getElementById("success").play();
        
        
    }else{
        tries.innerHTML=parseInt(tries.innerHTML)+1;
        triesTotal.innerHTML=parseInt(triesTotal.innerHTML)+1;
        setTimeout(()=>{
            firstBlock.classList.remove("rotate")
            secondBlock.classList.remove("rotate")
        },duration)
        document.getElementById("wrong").play();
    }
    if(score.innerHTML == 10){
        let cong =document.getElementById("cong")
        let mov =document.getElementById("mov-score")
        let mis =document.getElementById("mis-score")
        cong.style.opacity="1"
        cong.style.top="50%"
        mis.innerHTML=parseInt(tries.innerHTML)
        mov.innerHTML=parseInt(triesTotal.innerHTML)
        
    }
} 
//shufffle function
function shuffle (array){
    let current = array.length,
        temp,
        random;
    while(current > 0){
        random = Math.floor(Math.random ()* current)
        current--
        temp =array[current]
        array[current]=array[random]
        array[random]=temp
    }
}
//music
let count=0;
function playMusic(){
    if(count == 0){
        count=1;
        back.pause()
        document.querySelector(".music .no").classList.toggle("yes")
    }else{
        count=0;
        back.play()
        document.querySelector(".music .no").classList.toggle("yes")
    }
}
function Reload (){
    location.reload()
}
function exit(){
    window.close()
}
let closeWindow=document.getElementById("closer")
function showCloseWindow(){
    closeWindow.style.left="50%"
    closeWindow.style.opacity="1"
}
function again(){
    closeWindow.style.left="-400%"
    closeWindow.style.opacity="0"
}