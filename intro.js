let player = {
    name: "Darshan",
    chips: "500"
}
const subBtn = document.getElementById("btn-next")

subBtn.addEventListener("click", function(){
    player.name = document.getElementById("fname").value
    player.chips = document.getElementById("cash").value
    localStorage.setItem("name", player.name)
    localStorage.setItem("chips", player.chips)
    window.location.href = "index.html"
})