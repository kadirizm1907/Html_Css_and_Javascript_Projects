
///? Dizideki sicakliklari fahrenayttan celcius a cevir.
const weather = [
    {countryname: 'Turkey', heat: 100 },
    {counryname: 'Nedherland', heat: 70},
    {countryname: 'Sibirya', heat: -1},
    {countryname: 'EAU', heat: 200},
    {countryname: 'Brazil', heat: 50}
  ];
  
    const celciused = weather.map((country) => {
        country.heat = ((country.heat-32)*5/9).toFixed(1) +  "C";
        return country;
    });
    console.log(celciused)
///? Dizideki sicakliklari belli orandan itibaren yazdir
    const weather1 = [
        {countryname: 'Turkey', heat: 100 },
        {counryname: 'Nedherland', heat: 70},
        {countryname: 'Sibirya', heat: -1},
        {countryname: 'EAU', heat: 200},
        {countryname: 'Brazil', heat: 50}
      ];
  const coldCountries = weather1.filter((heater) =>{
    return heater.heat < 60;
  })
  console.log(coldCountries);
///? Diziyi tek tek isimlendirip yazdir
  const weather3 = [
    {countryname: 'Turkey', heat: 100 },
    {counrtyname: 'Nedherland', heat: 70},
    {countryname: 'Sibirya', heat: -1},
    {countryname: 'EAU', heat: 200},
    {countryname: 'Brazil', heat: 50}
  ];
  weather3
  .filter(heater3 => heater3.heat < 60)
  .sort((h1, h2) => h1.heat - h2.heat)
  .map((heater3) => `${heater3.countryname}: ${heater3.heat}`)
  .forEach((h) => console.log(h));

//? reduce metho. dizideki tum elemanlarla islem yapar ve tek bir cikti verir.

const weather4 = [
    {countryname: 'Turkey', heat: 100 },
    {counrtyname: 'Nedherland', heat: 70},
    {countryname: 'Sibirya', heat: -1},
    {countryname: 'EAU', heat: 200},
    {countryname: 'Brazil', heat: 50}
  ];
  const sumWeahter = weather4.reduce((accumulater, averageHeat) => {
    return accumulater + averageHeat.heat;
  }, 0);
  console.log(sumWeahter);
  const average =sumWeahter / weather4.length;
  console.log(average, 'Celcius' );




  const numbers = [ 1, 2, 3, 45, 65 ];
  const sum = numbers.reduce((accumulater, index) => {
    return accumulater + index;
  }, 0);
  console.log(sum);
  const average1 =sum / numbers.length;
  console.log(average1);


  let numbers3 = [1, 2, 3, 4, 5];
  const kare = numbers3.map(n =>{
    return n**2
  })
  console.log(kare);