const table = document.querySelector("table");
const rows = [
  "Q7228 - Mustafa Tasdogen, Konya, <strong>Full-Stack</strong>",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
]
  .map((row) => row.replace(" - ", ", ").split(", "))
  .forEach((row) => {
    const [studentNo, fullName, location, path] = row;
    const [name, lastName] = fullName.split(" ");

    table.innerHTML += `<tr>
      <td>${studentNo}</td>
      <td>${name}</td>
      <td>${lastName}</td>
      <td>${location}</td>
      <td>${path}</td>
    </tr>`;
  });
  
  
//?
//?
//?
//?
//! For of
// const table = document.querySelector("table");
// const rows = [
//   "Q7228 - Mustafa Tasdogen, Konya, <strong>Full-Stack</strong>",
//   "C2345 - Jane Doe, London, Data-Science",
//   "C2346 - Mary Ann, Paris, AWS-Devops",
//   "C2347 - Adam Smith, Texas, AWS-Devops",
//   "C2444 - Michael Great, Arizona, Full-Stack",
//   "C2555 - William Cash, Manchester, Data-Science",
//   "C2455 - Patrick Jane, Madrid, Full-Stack",
// ].map((row) => row.replace(" - ", ", ").split(", "));

// for (const row of rows) {
//   const [studentNo, fullName, location, path] = row;
//   const [name, lastName] = fullName.split(" ");

//   table.innerHTML += `<tr>
//     <td>${studentNo}</td>
//     <td>${name}</td>
//     <td>${lastName}</td>
//     <td>${location}</td>
//     <td>${path}</td>
//   </tr>`;
// }
