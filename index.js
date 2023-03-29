let rating = 0

const submit = () => {
  if (!rating) {
    alert('No rating selected')
  } else {
    document.querySelector('.rating').classList.add('hidden')
    document.querySelector('.thank-you').classList.remove('hidden')
    document.querySelector(
      '.selected-msg'
    ).innerHTML = `You selected ${rating} out of 5`
  }
}

const select = (e) => {
  rating = e.target.getAttribute('value')

  if (
    Object.values(numberButtons).some((el) => el.classList.contains('active'))
  ) {
    document.querySelector('.active').classList.remove('active')
  }
  e.target.classList.add('active')
}

const numberButtons = document.querySelectorAll('.numbers button')

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => select(e))
})

document.querySelector('.submit').addEventListener('click', () => submit())
