const responses = document.querySelectorAll('.response')
const boxResponses = document.querySelectorAll('.box_choice')
const seeScore = document.getElementById('calculScore')
const lenght = responses.length
console.log(lenght)


// console.log(response.value)



    responses.forEach(function (element, index){



        element.addEventListener('click', handleResponse)
        element.addEventListener('click', () => {
            if(element.classList.contains('r_1')) {
                responses[index + 1].disabled = true
            } else if (element.classList.contains('r_2')){
                responses[index - 1].disabled = true
            }
        })



        element.addEventListener('click', scoreCalcul)

})



let l = 0

let i = 0


function  handleResponse(element){
    console.log(element.target.value)

        if(element.target.value === 'false'){
            element.target.classList.add('response--false')
        l++
        }
        else if (element.target.value === 'true'){
            element.target.classList.add('response--true')
            l++
        }
        else {
            console.log('error no correct value')
        }
        if (l === lenght / 2){
            seeScore.classList.add('calculScore--active')
        }



}





function  scoreCalcul(element){
    console.log(element.target.value)
    if(element.target.value === 'true'){
        i++
        console.log(i)
    }
    const score = document.getElementById('score')
    seeScore.addEventListener('click', showScore)
    function showScore(){
        score.textContent = i
    }
}
