// 1.1

let getData = async () => {
    try {
        let answer = await fetch("https://api.agify.io?name=michael")
        let data = await answer.json()
        console.log(data)
    }
    catch (error){
        alert ("An error has occurred")
    }
}

getData()

//1.2

window.onload = () => {
    let body$$ = document.querySelector("body")
    let button$$ = document.querySelector("button")
    let input$$ = document.querySelector ("input")
    button$$.addEventListener("click", ()=>{
        let getData = async () => {
        try {
            let answer = await fetch("https://api.agify.io?name=michael")
            let data = await answer.json()
            console.log(data)
        }

        catch (error){
                alert ("An error has occurred")
        }
    }
    getData()

    })








}







    // let search = (text, input$$) => {
    //     const promise = new Promise((resolve, reject)=>{
    //         if (text === "michael")
    //         getDataFromApi (function (){
    //             let getData = async () => {
    //             try {
    //             let answer = await fetch("https://api.agify.io?name=michael")
    //             let data = await answer.json()
    //              console.log(data)
    //          }
    //         catch (error){
    //         alert ("An error has occurred")
    //          }
    //         }
    //     })
    // }
















//         // let activeTheInput = (text, input$$) =>{
//         // const promise = new Promise ((resolve, reject) => {
//         //     if (text != "michael"){
//         //         reject ("Michael is not here")
//         //     }
//         //     if (text === "michael") {
