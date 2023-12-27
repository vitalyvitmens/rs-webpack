// import data from './data'
// import './index.scss'

// const root = document.querySelector('#app')

// interface Item {
//   id: number
//   title: string
// }

// function renderItem(item: Item, index: number) {
//   const li = document.createElement('li')
//   li.textContent = item.title
//   if (index % 2 === 0) {
//     li.style.background = 'lightgray'
//     li.style.color = 'red'
//   } else {
//     li.style.background = 'lightblue'
//   }
//   root.append(li)
// }

// data.forEach(renderItem)

import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.scss'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
