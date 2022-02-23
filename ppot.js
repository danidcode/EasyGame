
let machine;
let player;
let score= 0;
let record= 0;
const stone = 1;
const paper = 2;
const scissors = 3;

function receiveData(){
    player = document.getElementById("enter").value //recibe del input
    let resultMachine = Math.floor(Math.random() * 3) + 1; //generate ramdon number beetween 1 and 3
    switch(resultMachine){

        case 1: 
        if(player == 1){
    
           console.log("tie")
        }
        else if(player==2){
        score++;
        if(score > record) record = score;
            console.log("The Player won")
        }
        else if(player==3){
            if(score > record) record = score;
            score = 0;
            console.log("The Machine won")
        }
        break;
        case 2: 
        if(player == 1){
            if(score > record) record = score;
            score = 0;
            console.log("The Machine won")
         }
         else if(player==2){
     
             console.log("tie")
         }
         else if(player==3){
            score++;
            if(score > record) record = score;
             console.log("The Player won")
         }
         break;
         case 3:
            if(player == 1){
                score++;
                if(score > record) record = score;
                console.log("The Player won")
             }
             else if(player==2){
                if(score > record) record = score;
                 score = 0;
                 console.log("The Machine won")
             }
             else if(player==3){
                 console.log("tie")
             }
           break;
             default: console.log("err")
            
    }
    
   
    console.log("score",score)
    console.log("record",record);
}


