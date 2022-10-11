import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import VueNear from "vue-near";
import Countdown from 'vue3-flip-countdown'

import './assets/main.css'

const app = createApp(App)
app.use(createVuestic())


app.use(VueNear, {
    // Needs the environment for the correct RPC to use
    env: process.env.NODE_ENV || 'development',
    config: {
      appTite: 'Raffland',
      contractName: 'vanadiuz.testnet',
    },
  })

app.use(Countdown)

//sleep for 1 sec
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(100).then(() => {app.mount('#app')})
// //sleep 1 sec


// app.mount('#app')
