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


  //grab data from form
  let adTitle = $("#adTitle")
  let adBody = $("#adBody")
  let numUsers = $("#numUsers")


  //buttons
  let createAdBtn = $("#createAdBtn")
  let deleteAdBtn = $('.deleteAdBtn')
  let btnLogout = $('#btnLogout')

  btnLogout.on('click', (event) => {
    event.preventDefault()
    document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "role=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
    window.location.href = '/index'
  })

  //click event for creating an ad
  createAdBtn.on('click', (event) => {
    event.preventDefault();

    //check all fields on form
    var check_adForm = function() {
      var flag = true;
      $.each($("section .required"), function(index, field) {
        if ($(this).val() == "") {
          alert('Please enter a value for ' + $(this).attr('name'));
          flag = false;
          return false;
        }
      });

      return flag;
    }


    //call check form

    if (check_adForm()) {
      console.log("ad form fully filled out...");
    }

    //get id from url
    let pathArray = window.location.pathname.split('/')
    let advertId = pathArray[2]
    console.log(advertId);

    //ad data  to post
    let newAdData = {
      title: adTitle.val(),
      category: adCategory.options[adCategory.selectedIndex].value,
      body: adBody.val(),
      taken: false,
      public: true,
      AdvertiserId: advertId
    }



    //create multiple ads ajax post
    let numCreated = numUsers.val();
    console.log(numCreated);

    $(function() {
      for (let i = 0; i < numCreated; i++) {
        $.post('/api/ads', newAdData).done(() => {
          console.log(newAdData);
        })
      }

      alert("Successfully created your new ad!")
    }).then(() => {
      location.reload();
    })

  })//end of click


  //Delete single ad jQuery portion
  deleteAdBtn.on('click', (event) => {
    $.ajax({
      url: '/api/ads/' + deleteAdBtn.data('id'),
      type: 'DELETE',
      success: function(result) {
        alert('This has been deleted!')
      }
    }).then(() => {
      location.reload();
    })
  })



});
