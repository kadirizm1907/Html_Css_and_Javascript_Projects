

let rastgeleSayi = Math.ceil(Math.random() * 10) 
document.getElementById("gonder").onclick = function(){
    let yazilanSayi = document.getElementById("bizyazdik")
    if (yazilanSayi == rastgeleSayi){
        alert("tebrikler")
    }
        else if(yazilanSayi > rastgeleSayi){
            alert("kucuk deger yaz")
        }
        else{
            alert("buyuk deger yaz")
        }
    }
