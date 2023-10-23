

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


