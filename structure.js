take_turns = 0

let take_result = document.querySelector("#hey h1")
console.log(take_result.innerHTML)

let score= 0 

function pluss() {

    score++;
    take_result.innerHTML = `${score} / 100`
    console.log("hey")



}

function minuss() {

    score--;
    take_result.innerHTML = `${score} / 100`

}
function burger_menu_clicked() {

    let take_burger_opt = document.getElementById("menu_burger_opt")

    if (take_turns === 0) {


        take_burger_opt.style.marginLeft = "30%"
        console.log("hey")
        take_turns = 1


    } else {

        take_burger_opt.style.marginLeft = "100%"
        take_turns = 0

    }



}



