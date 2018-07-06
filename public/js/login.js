$(document).ready(function() {
  let emailInput = $('#emailInput')
  let passwordInput = $('#passwordInput')
  let btnLogin = $('#btnLogin')

  let cbxRememberMe = $('#cbxRememberMe')

  btnLogin.on('click', (event) => {
    event.preventDefault()
    if (!emailInput.val().trim()) {
      return
    }
    let loginData = {
      email: emailInput.val().trim(),
      password: passwordInput.val()
    }
    $.post('/api/login/', loginData, (info) => {
      console.log(info);
      if (info === "User not found") {
        alert("User not found")
      } else {
        let userID = info.match(/\d/)
        localStorage.setItem('id', userID[0])
      document.location.href = info
      }
    })

  })

})
