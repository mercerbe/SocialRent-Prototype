$(document).ready(function() {
  let emailInput = $('#emailInput')
  let passwordInput = $('#passwordInput')
  let btnLogin = $('#btnLogin')

  let cbxRememberMe = $('#cbxRememberMe')
  let remember = $('#cbxRememberMe').prop('checked')

  let today = new Date()
  let tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 7)

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
        let role = info.match(/(user|advertiser)/)
        if (remember) {
          document.cookie = "id=" + userID[0] + ";expires=" + tomorrow + ";"
          document.cookie = "role=" + role[0] + ";expires=" + tomorrow + ";"
        } else {
          document.cookie = "id=" + userID[0] + ";"
          document.cookie = "role=" + role[0] + ";"
        }
        document.location.href = info
      }
    })

  })

})
