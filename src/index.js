import data from './data'
import './index.css'

const root = document.querySelector('#app')

function renderItem(item) {
  const li = document.createElement('li')
  li.textContent = item.title
  root.append(li)
}

data.forEach(renderItem)
