import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(faGithubSquare, faDev)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
