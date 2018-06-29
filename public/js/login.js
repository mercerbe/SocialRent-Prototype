$(document).ready(function() {
  let emailInput = $('#email')
  let passwordInput = $('#password')
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
    console.log(loginData)
    $.get('/api/users/', loginData).then(

    )

  })

})
