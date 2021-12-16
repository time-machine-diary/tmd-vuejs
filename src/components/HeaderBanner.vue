<template>
  <div class="container">
    <button
      class="back-button"
      v-if="currentRoutePath !== '/'"
      @click="onBackButtonClickHandler"
    >
      <back-icon />
    </button>

    <button
      class="search-button"
      v-if="currentRoutePath === '/'"
      @click="toggleSearchInput"
    >
      <search-icon />
    </button>

    <input type="search" class="search-input" v-if="searching" autofocus />
    <date-banner
      class="date-banner"
      v-if="currentRoutePath === '/' && !searching"
    />

    <button
      class="menu-button"
      v-if="!searching && currentRoutePath === '/'"
      @click="onMenuButtonClickHandler"
    >
      <menu-icon />
    </button>

    <button
      class="close-search-button"
      v-if="searching"
      @click="toggleSearchInput"
    >
      <close-icon />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuIcon from './icons/MenuIcon.vue'
import BackIcon from './icons/BackIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import DateBanner from './DateBanner.vue'
import CloseIcon from './icons/CloseIcon.vue'
import { router } from '../main'

export default Vue.extend({
  name: 'header-banner',
  data() {
    return {
      searching: false,
    }
  },
  methods: {
    onBackButtonClickHandler() {
      router.back()
    },
    onMenuButtonClickHandler() {
      router.push('/settings')
    },
    toggleSearchInput() {
      this.searching = !this.searching
    },
  },
  computed: {
    currentRoutePath(): string {
      return this.$route.path
    },
  },
  components: { MenuIcon, BackIcon, SearchIcon, DateBanner, CloseIcon },
})
</script>

<style scoped>
.container {
  flex: 1;
  margin: auto 0px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-areas: 'left-button center right-button';
}
.date-banner {
  grid-area: center;
  margin: auto 0px;
}
.search-input {
  grid-area: center;
  border: none;
  border-radius: 50px;
  padding: 5px 10px;
  margin: auto 0px;
  outline: none;
}
button {
  display: grid;
}
button.search-icon {
  grid-area: left-button;
}
button.back-button {
  grid-area: left-button;
}
button.menu-button {
  grid-area: right-button;
}
button > svg {
  margin: auto;
}
</style>
