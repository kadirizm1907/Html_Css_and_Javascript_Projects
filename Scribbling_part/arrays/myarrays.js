
// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem

let isimler = ["ahmet", "mehmet", 4, true, 6.6, "Canan", "Yeni", "2.yeni"]
console.log(isimler)

console.log("UZUNLUK:", isimler.length) //? 8
console.log(typeof isimler) //? object

console.log(isimler[0]) //? ahmet
console.log(isimler[5]) //? Canan
//* Dizinin son elemanini oku
console.log(isimler[isimler.length - 1]) 


//!  Diziye veri yazma/ yazilan veriyle degistirme
isimler[4] = "9"
console.log(isimler) //? ['ahmet', 'mehmet', 4, true, '9', 'Canan', 'Yeni', '2.yeni'] 6.6 gitti 9 geldi

isimler[2]++
console.log(isimler) //? ['ahmet', 'mehmet', 5, true, '9', 'Canan', 'Yeni', '2.yeni'] 4 bir artip 5 oldu

isimler[7]++
console.log(isimler) //? string ifadeler artirilinca Nan ciktisi verir. True veya Falseolanlarinda degeri bir artar. true=2 olur. falso=1 olur. ['ahmet', 'mehmet', 5, true, '9', 'Canan', 'Yeni', NaN]


const diller = [
    "Java",
    "C++",
    ["ASM", "Binary"], //? nested array
    "Javascript",
    new Date().getFullYear(), //? JS statement'ı
  ]
  console.log(diller)


  diller[2][0] = "0 olan nested index degisti"
  console.log(diller[2]) //?  ['0 indexte olan nested varius(ASM) degisti', 'Binary']

  // ! 2.Yöntem (Object Constructor)
const languages = new Array("C++", "java", "PHP")
console.log(languages)

languages[0] = "Python" //? 0 index 'pyhton' olarak degisti
console.log(languages)

const numbers = new Array(3, 2, 1, 0)
console.log(numbers)

//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi girilirse,
//! construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur.
const numbers1 = new Array(10)
console.log(numbers1)



// ! 3.Yöntem (Array.of())
const numbers2 = Array.of(5)
console.log(numbers2)


const numbers23 = Array.of(5, 4, 3, true)
console.log(numbers23)


//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const meyveler = ["Çilek", "Muz", "Elma"]
console.log(meyveler)  

meyveler[meyveler.length] = "Kiraz" //? Iyi bir yontem degil
console.log(meyveler) //?  ['Çilek', 'Muz', 'Elma', 'Kiraz']

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
meyveler.push("Kavun")
console.log(meyveler) //?  ['Çilek', 'Muz', 'Elma', 'Kiraz', 'Kavun']

const uzunluk = meyveler.push("Karpuz")
console.log(meyveler, uzunluk) //? ['Çilek', 'Muz', 'Elma', 'Kiraz', 'Kavun', 'Karpuz'] 6

//** pop() son elemani siler ve sildigi elemani dondurur.

const removed = meyveler.pop()
console.log(meyveler, removed) //?  ['Çilek', 'Muz', 'Elma', 'Kiraz', 'Kavun'] 'Karpuz' 


//*** shift dizinin 0. indeks elemanini siler ve silenen elemani dondurur.

const removedShift = meyveler.shift()
console.log(removedShift) //? Çilek
console.log(meyveler) //? ['Muz', 'Elma', 'Kiraz', 'Kavun']


//**** unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

const updatedLenght = meyveler.unshift("Kiwi")
console.log(updatedLenght)
console.log(meyveler) //?['Kiwi', 'Muz', 'Elma', 'Kiraz', 'Kavun']



//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
meyveler.splice(1, 0, "Yaban mersini") //* dizinin 1 elemaninin devamina Yaban mersini ekle
console.log(meyveler)


meyveler.splice(3, 1, "Mandalina", "Greyfurt")
console.log(meyveler) //?  dizinin 3. elemaninin yerine Mandaline ve Geyfurt ekle

meyveler.splice(3, 1) //? Dizinin 3. elamanini sil.
console.log(meyveler)

//? sort
//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.


meyveler.sort()
console.log(meyveler)

const numberUnsorted = [2, 3, 22, 33, 55, 1, 11, 111, 12]
console.log(numberUnsorted) //? [2, 3, 22, 33, 55, 1, 11, 111, 12]
numberUnsorted.sort()
console.log(numberUnsorted) //? [1, 11, 111, 12, 2, 22, 3, 33, 55] acii siralamasi


numberUnsorted.sort((a, b) => a - b) //? [1, 2, 3, 11, 12, 22, 33, 55, 111]
console.log(numberUnsorted) //? Callback function - sayilari normal degerlerine gore siralar
numberUnsorted.sort((a, b) => b - a) //?  [111, 55, 33, 22, 12, 11, 3, 2, 1]
console.log(numberUnsorted) //? Callback function



//* fill(1(value),1(start), 1(end)) dizileri dgerlerle doldurma


let veriler = [1, 3, 4, 5]
veriler.fill(0) //? butun degerleri 0 olarak doldurur
console.log(veriler) //? [0, 0, 0, 0] lenght = 4


veriler.fill(2, 1) //? 2 degerini 1.indexten baslayip en sonuna kadar yazar
console.log(veriler) //? [0, 2, 2, 2]

veriler.fill(3, 1, 3)//? 3 degerini 1.indexten baslayip 3.indexe kadar yazar. 3.index dahil degil
console.log(veriler) //? [0, 3, 3, 2]

veriler = [] //? butun verileri bosaltir
console.log(veriler) //?  [] lenght = 0

