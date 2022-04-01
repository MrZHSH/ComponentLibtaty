<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <span>{{ nameRef }} : {{ computedNameRef }} - {{ ref2 }}</span>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.name, '------------>')
  },
  setup() {
    // const state = reactive({
    //   name: 'zs'
    // })

    const nameRef = ref('zs')
    const ref2 = ref(123)
    const computedNameRef = computed(() => {
      return nameRef.value + '2'
    })

    watchEffect(() => {
      console.log(nameRef.value)
    })
    setInterval(() => {
      // state.name += '1'
      nameRef.value += '1'
    }, 5000)

    setInterval(() => {
      // state.name += '1'
      ref2.value += 10
    }, 1000)
    return {
      name: nameRef,
      computedNameRef,
      ref2
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
