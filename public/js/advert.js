$(document).ready(function() {
//grab data from form
let adTitle = $("#adTitle")
let adCategory = $("adCategory").find(":selected")
let adBody = $("#adBody")
let numUsers = $("#numUsers")

  createAdBtn.on('click', (event) => {
    event.preventDefault();

    var check_adForm = function() {
      //check all fields
      var flag = true;
      $.each($("section .required"), function(index, field){
        if($(this).val() == ""){
          alert('Please enter a value for ' + $(this).attr('name'));
          flag = false;
          return false;
        }
      });

    }
  })
})
