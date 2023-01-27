const inputRef = document.getElementById('validation-input')
const inputDataLength = Number(inputRef.dataset.length)
console.log(inputDataLength)

const onInputBlurHandler = (event) => {
    if (event.target.value.length === inputDataLength) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
}

inputRef.addEventListener('blur', onInputBlurHandler);