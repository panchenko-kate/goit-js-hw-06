const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputEvent);

function onInputEvent(event) {
    console.log(event.currentTarget.value);
    spanEl.style.fontSize = event.currentTarget.value + "px";
};