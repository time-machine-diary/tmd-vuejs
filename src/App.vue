<template>
  <div id="app">
    <header>
      <header-banner />
    </header>
    <main>
      <transition :name="currentRoutePath === '/' ? 'reverse-slide' : 'slide'">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderBanner from './components/HeaderBanner.vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      menus: [{ name: '설정', route: '/settings' }],
    }
  },
  computed: {
    currentRoutePath(): string {
      return this.$route.path
    },
  },
  components: { HeaderBanner },
})
</script>

<style scoped>
@import './assets/styles/shared-styles.css';
@import './assets/styles/layout.css';
@import './assets/styles/transition.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  position: relative;
}
</style>
