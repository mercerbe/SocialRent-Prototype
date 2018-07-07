$(document).ready(function() {
  let emailInput = $('#emailInput')
  let passwordInput = $('#passwordInput')
  let btnLogin = $('#btnLogin')

  let cbxRememberMe = $('#cbxRememberMe')
  let remember = $('#cbxRememberMe').prop('checked')

  let today = new Date()
  let tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  cbxRememberMe.on('change', function(event) {
    remember = $('#cbxRememberMe').prop('checked')
  })

  btnLogin.on('click', function(event) {

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
        sessionStorage.setItem('id', userID[0])
        if (remember) {
          document.cookie = "id=" + userID[0] + "; expires=" + tomorrow + ";"
        } else {
          document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
        }
        document.location.href = info
      }
    })

  })

})
