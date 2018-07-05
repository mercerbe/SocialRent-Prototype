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
    $.post('/api/users/', loginData, (info) => {
      if (info="User not found") {
        alert("User not found")
      } else {
        document.location.href = info
      }
    })

  })

})
