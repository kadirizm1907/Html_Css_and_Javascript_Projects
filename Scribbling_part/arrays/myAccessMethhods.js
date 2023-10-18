//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")


const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"]
console.log(numbers)


//* includes() dizide aranan degere bakar var ise true yokdsa false olur.
//*-----------------------------------------------------------

console.log(numbers.includes("4")) //? true
console.log(numbers.includes(4)) //? false
console.log(numbers.includes("FOUR")) //? false
console.log(numbers.includes("FOUR".toLowerCase())) //? true --buyuk-kucuk harf hassasiyetini ortadan kaldirir
console.log(numbers) //? [3, 5, 2, '4', 'bes', 'four', 3, '4', 'bes', '1', 3, 'bes']



//* indexOf() index yerini bulur
//? lastIndexOf(); index yerini nerrden baslatmak
 //*istersen onu yazarsin
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf("bes")) //? index 4 te
console.log(numbers.lastIndexOf("bes", 7)) //? index 4 te
console.log(numbers.lastIndexOf("bes", 9)) //? index 8 de
console.log(numbers.lastIndexOf("dort")) //? -1 (yani eslesen yok)



//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.

const joinedNumbers = numbers.join(",")
console.log(joinedNumbers, typeof joinedNumbers) //? 3,5,2,4,bes,four,3,4,bes,1,3,bes string


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar. 
//? arasina parameter yazamayiz " , - bosluk gibi "
 
console.log(numbers.toString()) //? 3,5,2,4,bes,four,3,4,bes,1,3,bes



//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------


let cars = ["BMW", "Mercedes", "Fiat", "Togg"]

const slicedCars = cars.slice(1)
console.log(slicedCars) //? ['Mercedes', 'Fiat', 'Togg']

console.log(cars.slice(0, 2)) //? ['BMW', 'Mercedes']



//* concat()
//*-----------------------------------------------------------

const message = ["The weather", "is", "very", "nice"]
const zaman = new Date().toDateString()
console.log(zaman)


const concated = message.concat( "today is ", zaman)
console.log(concated) //?  ['The weather', 'is', 'very', 'nice', 'today is ', 'Wed Oct 18 2023']
console.log(concated.join(" ")) //? The weather is very nice today is  Wed Oct 18 2023