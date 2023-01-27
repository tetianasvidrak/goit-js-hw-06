const inputRef = document.getElementById('font-size-control')
const spanRef = document.getElementById('text')


const onInputUpdateHandler = (event) => {
    spanRef.style.fontSize = `${event.target.value}px`
}

inputRef.addEventListener('input', onInputUpdateHandler)