// variable
const responses = document.querySelectorAll('.response')

const seeScore = document.getElementById('calculScore')

const lenght = responses.length

let lenghtChoice = 0

let score = 0




    responses.forEach(function (element, index){



        element.addEventListener('click', handleResponse)
        element.addEventListener('click', handleDisable)
        function handleDisable(){
            if(element.classList.contains('r_1')) {
                responses[index + 1].disabled = true
                responses[index].disabled = true

            } else if (element.classList.contains('r_2')){
                responses[index - 1].disabled = true
                responses[index].disabled = true

            }
        }



        element.addEventListener('click', scoreCalcul)

})






function  handleResponse(element){
    console.log(element.target.value)

        if(element.target.value === 'false'){
            element.target.classList.add('response--false')
            lenghtChoice++
        }
        else if (element.target.value === 'true'){
            element.target.classList.add('response--true')
            lenghtChoice++
        }
        else {
            console.log('error no correct value')
        }
        if (lenghtChoice === lenght / 2){
            seeScore.classList.add('calculScore--active')
        }



}



function  scoreCalcul(element){
    console.log(element.target.value)
    if(element.target.value === 'true'){
        score++
        console.log(score)
    }
    const scoreSum = document.getElementById('score')
    seeScore.addEventListener('click', showScore)
    function showScore(){
        scoreSum.textContent = score
    }
}

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', resetQuizz)
function resetQuizz(){
    window.location.reload();
}