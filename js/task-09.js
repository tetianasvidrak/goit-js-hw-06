const bodyRef = document.querySelector('body')
const btnRef = document.querySelector('.change-color')
const spanRef = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnClickHandler = () => {
  const hexColor = getRandomHexColor()
  spanRef.textContent = hexColor
  bodyRef.style.backgroundColor = hexColor
}

btnRef.addEventListener('click', onBtnClickHandler)
