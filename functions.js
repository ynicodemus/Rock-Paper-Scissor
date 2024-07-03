function instruction(){
    main.style = 'height: 700px; margin-top: 110px;'
    subMain.style = 'height: 580px; width: 360px; padding-right: 15px; padding-left: 15px;'
    start.innerHTML = "";
    rps.src = "";

    gameplay.innerHTML = 
    `<b>Game Instructions</b><br><br>

        1. You will play against the computer in each round. <br> <br>
        2. Choose one of three hand signs: rock, paper, or scissors. <br><br>
        3. The computer will randomly generate its choice.<br>
        &nbsp;&nbsp;The outcomes are: <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rock beats scissors (rock crushes scissors) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scissors beats paper (scissors cuts paper) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paper beats rock (paper covers rock) <br>
        &nbsp;&nbsp;The same hand sign results in a tie. <br><br>
        4. If the computer reached 5 points, you'll face a random consequence. <br><br>
        5. If you win a round, It will deduct a point from the computer’s score <br><br>
        6. Continue playing rounds until you decide to stop or until you want to face more consequences.`;

    startBtn.innerHTML = "Start";
    startBtn.style = "background-color:#3282B8; width:80px; height:auto; padding:10px; border-radius:10px; text-align:center; margin-top:35px; float:right;";
    
}

function StartGame(){
    main.style = 'height: 700px; margin-top: 110px;'
    subMain.style = 'height: 580px; width: 360px; padding:15px; padding-top:0px;'
    start.innerHTML = "";
    rps.src = "";

    gameplay.innerHTML = "";
    startBtn.innerHTML = "";
    startBtn.style = "height: 0px; width:0px;";

    scoring.innerHTML = "Computer Score:&nbsp;&nbsp;"

    innerDiv.style = "height:370px; width:360px; background-color: #3282B8; border-radius:10px"
    player.style= "margin: 2px; margin-top: 7px; height:200px; width:175px; float: left"
    playertxt.innerHTML = "Player"
    comptxt.innerHTML = "Computer"
    computer.style= "margin: 2px; margin-top: 7px; height:200px; width:175px; float: right"
    choices.style = "height:130px; width:330px; border-radius:10px; position:absolute; margin-top:240px; padding-left: 25px"
    result.style = "margin:20px; text-align: center"
    conseqDiv.style = "height:25px; width:320px; background-color: #3282B8; border-radius:10px"


    player_choice.src = "rock.png"
    computer_choice.src = "rock.png"
    rock.src = "rock.png"
    paper.src = "paper.png"
    scissor.src = "scissor.png"


    
}
let comptscore = 0;
function Gamestart(start){
        let conseq = [
            "Do 10 jumping jacks",
            "Sing a song loudly",
            "Do a silly dance for 30 seconds",
            "Tell a funny joke",
            "Act like an animal for 1 minute",
            "Do a cartwheel or attempt one",
            "Hold a plank position for 30 seconds",
            "Do 10 push-ups",
            "Balance a book on your head for 1 minute",
            "Recite a tongue twister five times fast"
        ]
        const computer =  Math.floor(Math.random() * 3);
        
        //random number for computer
        if (computer === 0){
            computer_choice.src = "paper.png"
        } else if (computer === 1){
            computer_choice.src = "rock.png"     
        } else if (computer === 2){
            computer_choice.src = "scissor.png"
        }


        //Paper Rock Scissor
        if (start === "P"){
            player_choice.src = "paper.png"
        } else if (start === "R"){
            player_choice.src = "rock.png"     
        } else if (start === "S"){
            player_choice.src = "scissor.png"
        }

        if (computer_choice.src === player_choice.src) {
            result.innerHTML = "Tie!";

        } else if (
            (computer === 1 && start === "P") || // if true execute
            (computer === 0 && start === "S") ||
            (computer === 2 && start === "R") 
        ) {
            result.innerHTML = "You won!";
            comptscore--; //deduct

        } else{
            result.innerHTML = "computer won!"
            comptscore++; //add
        }

        if (comptscore == 5){
            result.innerHTML = "Face your consequences";
            var consequence = conseq[Math.floor(Math.random() * conseq.length)]
            conseqDiv.innerHTML = consequence
            reset() //  to reset the score
        }

        scores.innerHTML = comptscore; //output of score

    function reset(){
        comptscore = 0
        }  
    } 
