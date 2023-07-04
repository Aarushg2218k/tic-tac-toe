flag=1;
var clkad=new Audio("click.wav");
var clkwn=new Audio("win.wav");
function dochange(chng,turn,sta){
    
    turn.innerText="Player 2";
    sta.innerText="In Progress";
    if(flag==1){
        chng.value="X";
        chng.disabled=true;
        
        flag=0;
    }
    else{
        chng.value="0";
        chng.disabled=true;
        turn.innerText="Player 1";
        flag=1;
    }
    
        clkad.play();

}


function dorst(rst,a1,a2,a3,a4,a5,a6,a7,a8,a9){
        a1.value =a2.value =a3.value =a4.value =a5.value =a6.value =a7.value =a8.value =a9.value ='';
        a1.disabled=a2.disabled=a3.disabled=a4.disabled=a5.disabled=a6.disabled=a7.disabled=a8.disabled=a9.disabled=false;
        flag=1;
        turn.innerText="Player 1";
        sta.innerText="Not Started";
        win.innerText="Not Declared";
        b1.style.color=b2.style.color=b3.style.color=b4.style.color=b5.style.color=b6.style.color=b7.style.color=b8.style.color=b9.style.color="white";
       

}
function dowin(turn,b1,b2,b3,b4,b5,b6,b7,b8,b9){
    if(b1.value == "X" && b2.value == "X" && b3.value == "X"){
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b1.style.color="red";
        b2.style.color="red";
        b3.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
       
        clkwn.play();

    }
    else if(b4.value == "X" && b5.value == "X" && b6.value == "X"){
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b4.style.color="red";
        b5.style.color="red";
        b6.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        
        clkwn.play();
    }
    else if(b7.value == "X" && b8.value == "X" && b9.value == "X"){
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;

        b7.style.color="red";
        b8.style.color="red";
        b9.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        
        clkwn.play();
    }
    else if(b1.value == "X" && b4.value == "X" && b7.value == "X"){
        b2.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b3.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b1.style.color="red";
        b4.style.color="red";
        b7.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        clkwn.play();
    }
    else if(b2.value == "X" && b5.value == "X" && b8.value == "X"){
        b4.disabled=true;
        b1.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b3.disabled=true;
        b9.disabled=true;

        b5.style.color="red";
        b2.style.color="red";
        b8.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        clkwn.play();
    }
    else if(b3.value == "X" && b6.value == "X" && b9.value == "X"){
        b4.disabled=true;
        b5.disabled=true;
        b1.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b2.disabled=true;

        b6.style.color="red";
        b9.style.color="red";
        b3.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        clkwn.play();
    }
    else if(b1.value == "X" && b5.value == "X" && b9.value == "X"){
        b4.disabled=true;
        b2.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b3.disabled=true;

        b1.style.color="red";
        b5.style.color="red";
        b9.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        clkwn.play();

    }
    else if(b3.value == "X" && b5.value == "X" && b7.value == "X"){
        b4.disabled=true;
        b1.disabled=true;
        b6.disabled=true;
        b2.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b5.style.color="red";
        b7.style.color="red";
        b3.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 1 won";
        clkwn.play();

    }
    else if(b1.value == "0" && b2.value == "0" && b3.value == "0"){
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b1.style.color="red";
        b2.style.color="red";
        b3.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else if(b4.value == "0" && b5.value == "0" && b6.value == "0"){
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b4.style.color="red";
        b5.style.color="red";
        b6.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else if(b7.value == "0" && b8.value == "0" && b9.value == "0"){
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;

        b7.style.color="red";
        b8.style.color="red";
        b9.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else if(b1.value == "0" && b4.value == "0" && b7.value == "0"){
        b2.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b3.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b1.style.color="red";
        b4.style.color="red";
        b7.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else if(b2.value == "0" && b5.value == "0" && b8.value == "0"){
        b4.disabled=true;
        b1.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b3.disabled=true;
        b9.disabled=true;

        b5.style.color="red";
        b2.style.color="red";
        b8.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else if(b3.value == "0" && b6.value == "0" && b9.value == "0"){
        b4.disabled=true;
        b5.disabled=true;
        b1.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b2.disabled=true;

        b6.style.color="red";
        b9.style.color="red";
        b3.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else if(b1.value == "0" && b5.value == "0" && b9.value == "0"){
        b4.disabled=true;
        b2.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b3.disabled=true;

        b1.style.color="red";
        b5.style.color="red";
        b9.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();
    }
    else if(b3.value == "0" && b5.value == "0" && b7.value == "0"){
        b4.disabled=true;
        b1.disabled=true;
        b6.disabled=true;
        b2.disabled=true;
        b8.disabled=true;
        b9.disabled=true;

        b5.style.color="red";
        b7.style.color="red";
        b3.style.color="red";
        turn.innerText="Game over";
        sta.innerText="Finish";
        win.innerText="Player 2 won";
        clkwn.play();

    }
    else{

    }
}