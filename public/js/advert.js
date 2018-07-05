$(document).ready(function() {
  let adTitleField = $('#adTitle')
  let adCategoryField = $('#adCategory')
  let adBodyField = $('#adBody')
  let userCountField = $('#userCount')
  let btnSubmit = $('#btnSubmit')

  btnSubmit.on('click', event => {
    event.preventDefault()

    let adData = {
      title: adTitleField.val().trim(),
      category: adCategoryField.val().trim(),
      body: adBodyField.val().trim(),
      userCount: userCountField.val().trim(),
      creatorID: 
    }

  })
})
