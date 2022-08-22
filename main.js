let btn = document.querySelector(".btn");
function getData(){
    url = "https://api.adviceslip.com/advice";
    fetch(url).then((response)=>{
        return response.json();
    }).then(data => {
        console.log(data);
        const id = data.slip["id"]
        let advice = data.slip["advice"]
        document.querySelector(".id").innerText = "Advice #" + id ;
        document.querySelector(".advice").innerText = " ❝ " + advice + " ❞ " ;
        console.log(advice);

    })
}
window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".card");
    });
//On load
window.addEventListener('load', () => {
    getData()
})

btn.addEventListener('click', () => {
    getData()
})




