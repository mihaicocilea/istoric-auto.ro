function calculate() {
    var distance = document.getElementById("distance").value;
    var litres = document.getElementById("litres").value;
    if(distance === "" || litres === "" || distance === "0" || litres === "0") return;
    var result = litres / distance * 100;
    document.getElementById("result").innerHTML = "Consumul de carburant este " + result.toFixed(2) + " litri la 100 de kilometri.";
  }