//different ids for users/advertisers
function bouncer() {
  if (!document.cookie) {
    alert("no cookie redirect")
    window.location.href = '/login'
    return
  }

  let url = window.location.toString()
  let ident = url.match(/\/(\w+)s\/(\d+$)/)
  let userRole = ident[1]
  let userID = ident[2]

  let cookieData = document.cookie.match(/id=(\d+); role=(\w+)/)
  let cookieRole = cookieData[2]
  let cookieID = cookieData[1]

  if (userRole !== cookieRole || userID !== cookieID) {
    window.location.href = '/login'
    return
  }
}

bouncer()

$(document).ready(function() {
  let email = $('#email_input')
  let password = $('#password')
  let passwordTwo = $('#password2')
  let role = $('#role')
  let company = $('#company_name')
  let description = $('#description')
  let twitter = $('#twitter_handle')
  let instagram = $('#insta_handle')
  let terms = $('#terms')
  let remember = $('#remember')

  //handlebars
    //email
    //ads taken
    //current ads
    //completed ads
})
