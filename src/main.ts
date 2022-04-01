import { createApp, defineComponent, h } from 'vue'
// import App from './App'
import App from './App'
// import HelloWorld from '@/components/HelloWorld.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const img = require('./assets/logo.png')
//
// const App = defineComponent({
//   setup() {
//     return () => {
//       return h('div', { id: 'app' }, [
//         h('img', {
//           alt: 'Vue log',
//           src: img
//         }),
//         h(HelloWorld, {
//           mag: 'sss',
//           age: 12
//         })
//       ])
//     }
//   }
// })

createApp(App).mount('#app')
