import {
    marquee
} from './marquee.js'

import tabs from './tabs.js'
// 引入vue
import App from './app.vue'
marquee()
tabs()

import "../styles/marquee.css"
import '../styles/tabs.less'

import imgSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const png = document.createElement('img')
png.src = pngSrc
document.body.appendChild(png)

import './assets/fonts/iconfont.css'