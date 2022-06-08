let Vize = prompt("Vize Notunuzu Giriniz:");

let Final = prompt("Final Notunuzu Giriniz:");

let Ortalama = (Vize * 0.3) + (Final * 0.7);

let SMİLE = ` <img src="https://media4.giphy.com/media/cWiAnQrGB5bXZlvMKS/giphy.gif" 
alt="" weight="300", height=300>`;

let HAPPY = `<img src="https://telltaletv.com/wp-content/uploads/2018/06/theoffice2.gif" 
alt="" weight="300", height=300>`;

let SAD = `<img src="https://c.tenor.com/dwU-KsYp7tEAAAAd/unhappy-bad-mood.gif"
alt="" weight="300", height=300>`;





// --------------------------------------------

// Tarih ve Zaman bilgisini içeren fonksiyon--
setInterval(DateTimer, 1000);

function DateTimer() {
  const date = new Date();
document.getElementById("timer").innerHTML = ` ${date.toLocaleTimeString()}       ${date.toDateString()} `
};

// -------------------------------------------------





