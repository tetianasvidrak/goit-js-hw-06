const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

const onInputHandler = (event) => {
    spanRef.textContent = event.target.value ? event.target.value : 'Anonymous';
}

inputRef.addEventListener('input', onInputHandler)