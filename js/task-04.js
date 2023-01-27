let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanRef = document.getElementById('value');

const onUpdateCurrentValueSpan = () => {
    spanRef.textContent = counterValue
}

const onDecrementHandler = () => {
    counterValue -= 1
    onUpdateCurrentValueSpan()
};

const onIncrementHandler = () => {
    counterValue += 1
    onUpdateCurrentValueSpan()
};

decrementBtn.addEventListener('click', onDecrementHandler);
incrementBtn.addEventListener('click', onIncrementHandler);


