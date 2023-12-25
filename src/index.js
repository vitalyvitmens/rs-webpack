import data from './data'

const root = document.querySelector('#app')

function renderItem(item) {
  const li = document.createElement('li')
  li.textContent = item.title
  root.append(li)
}

data.forEach(renderItem)
