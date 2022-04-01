import { createApp, reactive, defineComponent, h, ref, watchEffect } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('./assets/logo.png')

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'zs'
    })

    const nameRef = ref('zs')
    const ref2 = ref(123)
    // const computedNameRef = computed(() => {
    //   return nameRef.value + '2'
    // })

    // watchEffect(() => {
    //   console.log(nameRef.value)
    // })
    setInterval(() => {
      // state.name += '1'
      nameRef.value += '1'
    }, 1000)

    setInterval(() => {
      // state.name += '1'
      ref2.value += 10
    }, 1000)
    return () => {
      const number = nameRef.value

      return (
        <div id="app">
          <img src={img} alt="Vue log" />
          <p>{state.name + number}</p>
          <HelloWorld age={123} />
        </div>
      )
      // return h('div', { id: 'app' }, [
      //   h('img', {
      //     alt: 'Vue log',
      //     src: img
      //   }),
      //   h(HelloWorld, {
      //     mag: 'sss',
      //     age: 12
      //   })
      // ])
    }
  }
})
