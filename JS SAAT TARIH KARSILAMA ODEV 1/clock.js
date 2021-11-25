let userName = prompt ("Kullanıcı Adınızı Giriniz:")
document.getElementById("myName").innerHTML = userName;


function tarihSaat() {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}


const day = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDay").innerHTML = days[day.getDay()];


setInterval(tarihSaat, 1000); 