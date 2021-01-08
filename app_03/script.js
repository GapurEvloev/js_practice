function sum2() {
    document.querySelector("#out-2").innerHTML = Math.round((Math.random() * 10) + (Math.random() * 10));
    alert("Привет");
    this.innerHTML = "Не нажимать";
}
document.querySelector("#btn-2").onclick = sum2;