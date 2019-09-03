document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form')
  const submitButton = document.querySelector('.form__button')

  function logout() {
    location.reload()
  }

  function formError(error) {
    form.classList.add('form_invalid')
  }

  function formSuccess(name, photo) {
    form.classList.remove('form_invalid')
    form.classList.add('form_success')
    document.querySelector('.form__title').textContent = name
    document.querySelector('.avatar').src = photo
    submitButton.textContent = 'Logout'
  }

  function login(email, password) {
    fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function(res) {
        return res.json()
      })
      .then(function(result) {
        if (result.error) {
          formError(result.error)
        } else {
          formSuccess(result.name, result.photoUrl)
        }
      })
  }

  form.addEventListener('submit', function(event) {
    const target = event.target

    event.preventDefault()
    if (submitButton.textContent == 'Logout') logout()

    const email = target.querySelector(".form__input[name='email']").value
    const password = target.querySelector(".form__input[name='password']").value

    login(email, password)
  })
})
