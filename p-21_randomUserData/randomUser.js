

fetch("https://api.github.com/users")

const show = (users) => {
    const userSection = document.getElementById("users")
  
    users.forEach((user) => {
      userSection.innerHTML += `
          <h1>${user.login}</h1>
          <img src="${user.avatar_url}" width="200px" alt="" />
          <p><a href="${user.html_url}" target="_blank">URL</a></p> 
      `
    })
  }