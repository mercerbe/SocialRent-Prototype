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

let signupBtn = $('#signup-btn')

console.log("log something")

signupBtn.on('click', (event) => {
  console.log('this is a log');
  event.preventDefault()
  //function check_form() {
    var flag = true;
    $.each($('form .required'), function(index, field) {
      console.log($(this).val());
      console.log(field);
      console.log(field.innerHTML);
        // //if ($(field).val() == "") {
        //   //  alert('Please enter a value for ' + $(this).attr('name'));
        //   //  flag = false;
        //   //  return false;
        //   //  console.log(this);
        // }
    });

    //return flag;
//}
//if (check_form()) {
  //  alert("check_form returned true");
//}
//})
