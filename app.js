let arr = ["stone", "scissor", "paper"]
let playerPoint = 0
let computerPoint = 0
let Win = new Audio()
Win.src = "./win.mp3"

let Loose = new Audio()
Loose.src = "./wrong.wav"

document.querySelector(".arm2").style.display = "none"
document.querySelector(".arm").style.display = "none"

document.querySelector('.start').addEventListener("click", ()=> {
    document.querySelector("h1").style.display = "none"
    document.querySelector(".arm2").style.display = "block"
    document.querySelector(".arm").style.display = "block"
    document.querySelector(".iphone-screen").scrollTo(0,720);
})

document.querySelector(".exit").addEventListener("click", () => {
    document.querySelector("h1").style.display = "block"
    document.querySelector(".arm2").style.display = "none"
    document.querySelector(".arm").style.display = "none"
    document.querySelector(".iphone-screen").scrollTo(0,0);
})

document.querySelector(".stone").addEventListener("click", () => {
    document.querySelector(".handCom").src = "./stone.png"
    choose(Math.floor(Math.random() * 4))
})

document.querySelector(".paper").addEventListener("click", () => {
    document.querySelector(".handCom").src = "./paper.png"
    choose(Math.floor(Math.random() * 4))
})

document.querySelector(".scissor").addEventListener("click", () => {
    document.querySelector(".handCom").src = "./scissor.png"
    choose(Math.floor(Math.random() * 4))
})

function choose(input){
    switch(arr[input]){
        case "stone":
            document.querySelector(".hand").src = "./stone.png"
            console.log("stone")
            checkWin()
            break
        case "paper":
            document.querySelector(".hand").src = "./paper.png"
            console.log("paper")
            checkWin()
            break
        case "scissor":
            document.querySelector(".hand").src = "./scissor.png"
            console.log("scissor")
            checkWin()
            break
    }
}

function checkWin(){
    let playerChoise = document.querySelector(".handCom").src
    let computerChoise = document.querySelector(".hand").src

    if(playerChoise == computerChoise){
        console.log("Tie")
        document.querySelector(".play").style.background = "yellow"
        document.querySelector('.reveal').innerText = "Tie"
    } else if((playerChoise == window.location.href.slice(0, -10) + "stone.png" && computerChoise == window.location.href.slice(0, -10) + "scissor.png") || (playerChoise == window.location.href.slice(0, -10) +"paper.png" && computerChoise == window.location.href.slice(0, -10) +"stone.png")|| (playerChoise == window.location.href.slice(0, -10) +"scissor.png" && computerChoise == window.location.href.slice(0, -10) +"paper.png")){
        playerPoint++
        console.log("point to player")
        console.log("player: " + playerPoint)
        Win.play()
        document.querySelector(".play").style.background = "green"
        document.querySelector('.reveal').innerText = "Player Wins"
        document.querySelector(".playerPoint").innerText = playerPoint
    } else if((computerChoise == window.location.href.slice(0, -10) +"stone.png" && playerChoise == window.location.href.slice(0, -10) +"scissor.png") || (computerChoise == window.location.href.slice(0, -10) +"paper.png" && playerChoise == window.location.href.slice(0, -10) +"stone.png")|| (computerChoise == window.location.href.slice(0, -10) +"scissor.png" && playerChoise == window.location.href.slice(0, -10) +"paper.png")){
        computerPoint+=1
        console.log(computerPoint)
        console.log("point to player")
        document.querySelector(".play").style.background = "red"
        document.querySelector('.reveal').innerText = "Computer Wins"
        Loose.play()
        document.querySelector(".computerPoint").innerText = computerPoint
    }

    setTimeout(() => {
        document.querySelector(".play").style.background = "transparent"
    }, 800)
}

