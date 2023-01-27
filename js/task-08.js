const formRef = document.querySelector('.login-form')

const onSubmitFormHandler = (event) => {
    event.preventDefault()
    const [email, password] = event.currentTarget.elements
    if (!email.value || !password.value) {
        alert('All fields should be filled!')
    } else {
        console.log({ email: email.value, password: password.value })
        formRef.reset()
    }
}

formRef.addEventListener('submit', onSubmitFormHandler)
