
//? Pc ye rastgele sayi tutturdur 1-2- arasi
let rastgeleSayi = Math.ceil(Math.random()*20)
console.log(rastgeleSayi)

let mesaj = document.querySelector(".msg")

//? skoru index html den cekebilirdik. ama cok kullanacagimiz icin bu daha cok tercih edilen yol.
let skor = 10 ;

let enYuksekSkor = 0 ;

//? Her check butonuna basildiginda yapilacaklar

document.querySelector(".check").addEventListener("click", ()=> {

    const tahmin = document.querySelector(".guess").value

    ///? tahmin girmeden butona basildiysa
    if (!tahmin) {
        mesaj.textContent = "1-20 arasi bir sayi giriniz"
    //? Tahmin dogruysa
    } else if(tahmin == rastgeleSayi){
      mesaj.textContent = "Tebrikler bildiniz 👨🏾‍🤝‍👨🏻"
      document.querySelector("body").style.backgroundColor = "green"
      document.querySelector(".number").textContent = rastgeleSayi 

      //?top skor kontrolu 
        if (skor > enYuksekSkor){
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = enYuksekSkor

        }


    //? tahmin yanlis ise

    }else{
        //? skor 1'den buyuk oldugu surece tahmin hakkim var
        if (skor > 1) {
            skor -- ;
            document.querySelector(".score").textContent = skor;

            //? Sayi tahminden buyu veya kucuk ise artir azalt yazdirmak
            tahmin < rastgeleSayi 
            ?(mesaj.textContent = "arttir↑") : (mesaj.textContent = "azalt↓")
            
            
        } else {
            mesaj.textContent = "oyunu kaybettiniz😥"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"
        }

    } 
    
});

//? "again" butonuna basinca ayarlar baslangic ayarina gelsin ve arka plan #2d3436 olsun

document.querySelector(".again").onclick = ()  => {
    document.querySelector("body").style.backgroundColor = "#2d3436"
    rastgeleSayi = Math.ceil(Math.random()*20);
    skor = 10 ;
    document.querySelector(".score").textContent = skor;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    mesaj.textContent = "Oyun yeni oyuncu icin basliyor";


}

//? Enter ile basma

document.addEventListener("keydown", function(event){
    if (event.key === "enter"){}
        document.querySelector(".check").click()
}
)