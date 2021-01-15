const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.getElementById('list')

let i = 1;
addButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li')
    const img = document.createElement('img')
    const spanItem = document.createElement('span')
    img.src = 'http://placehold.it/64x64'
    img.alt = `アイテム${i}`
    spanItem.textContent = `アイテム${i}`
    // newItem.textContent = 'アイテム' + `${i}`;
    list.appendChild(newItem)
    newItem.appendChild(img)
    newItem.appendChild(spanItem)
    i++;
})


removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastChild)
})

