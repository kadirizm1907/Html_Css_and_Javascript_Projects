

let rastgeleSayi = Math.ceil(Math.random() * 10) 
document.getElementById("gonder").onclick = function(){
    letyazilanSayi = document.getElementById("bizyazdik")
    if (bizimSayi == rastgeleSayi){
        alert("tebrikler")
    }
        else if(bizimSayi > rastgeleSayi){
            alert("kucuk deger yaz")
        }
        else{
            alert("buyuk deger yaz")
        }
    }
