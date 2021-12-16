<template>
  <label>
    <input type="checkbox" />
    <span class="slider"></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'toggle-checkbox',
})
</script>

<style scoped>
label {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
}
input {
  opacity: 0;
  width: 0px;
  height: 0px;
}
input + span {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 1px solid var(--theme-dark-gray);
  border-radius: 20px;
  transition: background-color 0.2s;
}
input:checked + span {
  background-color: var(--theme-light-primary-color);
}
input + span:before {
  position: absolute;
  content: '';
  width: 23px;
  height: 23px;
  border: 1px solid var(--theme-dark-gray);
  border-radius: 50%;
  box-sizing: border-box;
  transition: transform 0.2s;
  background-color: var(--theme-white);
}
input:checked + span:before {
  transform: translateX(25px);
}
</style>
