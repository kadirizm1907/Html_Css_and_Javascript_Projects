

const numbers = [ 1, 2, 3, 45, 65 ];
  const sum = numbers.reduce((accumulater, index) => {
    return accumulater + index;
  }, 0);
  console.log(sum);
  const average =sum / numbers.length;
  console.log(average);






const salary = [10000, 15000, 9000, 20000]
const sumOfsalary = salary.reduce((sum,sal) => sum + sal, 0)
console.log("total:", sumOfsalary)

let result 
const sumOfsalary1 = salary.reduce((sum,sal, i) =>{ 
  console.log(`${i} ${sum + sal}`)
 return sum + sal
} )
console.log("total:", sumOfsalary1)


const multply = salary.reduce((acc, val) => acc * val, 1)
console.log(multply)



//? maaslari 10000 ile 15 000 arasinda olanlarin maaslarini bulup yuzde 20 i zam yapip maaslarin toplamini al .. filter-map-reduce


const zamliMaasToplami = salary.filter((s) => s>= 9000 && s < 15000).map((s) => s * 1.2).reduce((sum,salaries) => sum + salaries)
console.log("Zamli maas toplami =", zamliMaasToplami)





//? objects


const mySentence = `There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, by injected humour, or randomised words
which don't look even slightly believable. If you are going to use a passage of
Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
predefined chunks as necessary, making this the first true generator on the
Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
model sentence structures, to generate Lorem Ipsum which looks reasonable. The
generated Lorem Ipsum is therefore always free from repetition, injected humour, or
non-characteristic words etc.`;


//*** yontem-1 */
// const words = mySentence.split(" ");
// const splitWords = words.map((word) =>  
//  word[0].toUpperCase() + word.slice(1) 
// ).join(" ")


//*** yontem-2 */


const words = mySentence.split(" ");
const splitWords = words.map((word) =>  
 word[0].toUpperCase() + word.substring(1) 
).join(" ")
console.log(splitWords)

//*** yontem-3 */
// const words = mySentence
//   .split(" ")
//   .map((word) => (["of", "as", "in", "are", "the", "is","or"].includes(word.toLowerCase()) ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)))
//   .join(" ");
// console.log(words);




