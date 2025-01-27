const responses = document.querySelectorAll('.response')
// console.log(response.value)
responses.forEach(function (element){
    element.addEventListener('click', test)
})

function  test(element){
    console.log(element.target.value)
    if(element.target.value === 'false'){
        element.target.classList.add('response--false')
    } else if (element.target.value === 'true'){
        element.target.classList.add('response--true')
    } else {
        console.log('error no correct value')
    }
}