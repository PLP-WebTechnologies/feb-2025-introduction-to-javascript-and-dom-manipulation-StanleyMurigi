function changeText() {
  const heading = document.getElementById('main-heading');
  heading.textContent = "You've changed the heading! 🎉";
}

function changeStyle() {
  const infoText = document.getElementById('info-text');
  infoText.style.color = 'tomato';
  infoText.style.fontWeight = 'bold';
  infoText.style.fontSize = '1.2rem';
}

function toggleElement() {
  const area = document.getElementById('dynamic-area');
  const existing = document.getElementById('new-element');

  if (existing) {
    existing.remove();
  } else {
    const newEl = document.createElement('p');
    newEl.id = 'new-element';
    newEl.textContent = 'This element was dynamically added!';
    newEl.style.background = '#e0ffe0';
    newEl.style.padding = '10px';
    newEl.style.border = '1px solid green';
    area.appendChild(newEl);
  }
}
