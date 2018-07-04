$(document).ready(function() {
  let email = $('#email_input')
  let password = $('#password')
  let passwordTwo = $('#password2')
  let role = $('#role').find(':selected')
  let company = $('#company_name')
  let description = $('#description')
  let twitter = $('#twitter_handle')
  let instagram = $('#insta_handle')
  let terms = $('#terms')
  let remember = $('#remember')

  let signupBtn = $('#signup-btn')

  signupBtn.on('click', (event) => {

    event.preventDefault()
    var check_form = function() {
      var flag = true;
      $.each($('form .required'), function(index, field) {
        // console.log($(this).val());
        // console.log(field);
        // console.log(field.innerHTML);
        if ($(this).val() == "") {
          alert('Please enter a value for ' + $(this).attr('name'));
          flag = false;
          return false;

        }

      });
      if ($("#roleSelect").val() == "Advertiser") {
        if ($('#company_name').val() == "") {
          alert('Please enter a value for ' + $('#company_name').attr('name'));
          flag = false;
          return false;
        }
        if ($('#description').val() == "") {
          alert('Please enter a value for ' + $('#description').attr('name'));
          flag = false;
          return false;
        }

      } else {
        if ($('#insta_handle').val() == "") {
          alert('Please enter a value for ' + $('#insta_handle').attr('name'));
          flag = false;
          return false;
        }
        if ($('#twitter_handle').val() == "") {
          alert('Please enter a value for ' + $('#twitter_handle').attr('name'));
          flag = false;
          return false;


        }
      }
      return flag;



    }

    //}
    if (check_form()) {
      alert("Successfully signed up!");
    }
    let signupData = {
      email: email.val(),
      password: password.val(),
      role: roleSelect.options[roleSelect.selectedIndex].value,
      company_name: company.val(),
      description: description.val(),
      twitter: twitter.val(),
      instagram: instagram.val()

    }
    console.log(signupData);
    $.get('/api/users', signupData).then(
        //push to database
    )
  })
})
