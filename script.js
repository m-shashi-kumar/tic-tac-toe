let boxes=document.querySelectorAll(".box");
let winningArray =[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let oturn=true;
let body=document.body;
let j= document.createElement("h1");
j.innerText= `Winner is`
handler = (box)=>{
    if (oturn){
        box.target.innerText="O";
        box.target.disabled=true;
        oturn=false;
    }
    else{
        box.target.innerText="X";
        box.target.disabled=true;
        oturn=true;
    }
    for (one of winningArray){
    if ((boxes[one[0]].innerText !='' && boxes[one[1]].innerText !='' && boxes[one[2]].innerText != '') && (boxes[one[0]].innerText == boxes[one[1]].innerText && boxes[one[1]].innerText == boxes[one[2]].innerText)){
        j.hidden=false;
        body.prepend(j);
        
        j.innerText=`Winner is ${boxes[one[0]].innerText}`;
        boxes.forEach((box)=>{
            box.disabled=true;
        })
        alert(j.innerText);
        re.innerText=" New Game ";
    }
}
}
boxes.forEach((box1)=>{
    box1.addEventListener("click", handler);
    console.log(box1.innerText)
});
let re=document.querySelector("#reset");
re.addEventListener("click",(e)=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
        j.hidden=true;
        re.innerText="reset"
    }
})


