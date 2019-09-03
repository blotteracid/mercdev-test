document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form')
  const submitButton = document.querySelector('.form__button')

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    if (submitButton.textContent == 'Logout') location.reload()

    fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.querySelector(".form__input[name='email']").value,
        password: document.querySelector(".form__input[name='password']").value,
      }),
    })
      .then(function(res) {
        return res.json()
      })
      .then(function(result) {
        console.log(result)
        if (result.error) {
          form.classList.add('form_invalid')
        } else {
          form.classList.remove('form_invalid')
          form.classList.add('form_success')
          document.querySelector('.form__title').textContent = result.name
          document.querySelector('.avatar').src = result.photoUrl
          submitButton.textContent = 'Logout'
        }
      })
  })
})
