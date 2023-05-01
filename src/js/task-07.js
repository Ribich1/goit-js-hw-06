const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');4

inputEl.addEventListener('input', onFontSizeTextChange);

function onFontSizeTextChange(event) {
      textEl.style.fontSize = `${event.currentTarget.value}px`;
};

