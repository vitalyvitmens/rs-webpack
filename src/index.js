import data from './data'
import './index.scss'

const root = document.querySelector('#app')

function renderItem(item, index) {
  const li = document.createElement('li')
  li.textContent = item.title
  if (index % 2 === 0) {
    li.style.background = 'lightgray'
    li.style.color = 'red'
  } else {
    li.style.background = 'lightblue'
  }
  root.append(li)
}

data.forEach(renderItem)
