<template>
  <label>
    <button @click="activateRippleEffect" ref="button">
      <slot />

      <span
        class="ripple"
        ref="ripple"
        @animationend="deactivateRippleEffect"
      />
    </button>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ripple-effect-block-button',
  methods: {
    activateRippleEffect(event: MouseEvent): void {
      if (!this.$refs.button) throw new Error('No button found')
      if (!this.$refs.ripple) throw new Error('No target found')

      const button: HTMLButtonElement = this.$refs.button as HTMLButtonElement
      const rippleEffectTarget: HTMLSpanElement = this.$refs
        .ripple as HTMLSpanElement

      rippleEffectTarget.style.setProperty(
        '--ripple-effect-scale',
        String(button.clientWidth * 2)
      )

      rippleEffectTarget.style.top = `${event.offsetY}px`
      rippleEffectTarget.style.left = `${event.offsetX}px`

      rippleEffectTarget.classList.add('animate')

      Vue.component('', {
        render: function (createElement) {
          // create kebab-case id

          return createElement('span.ripple')
        },
      })
    },
    deactivateRippleEffect(): void {
      if (!this.$refs.ripple) {
        throw new Error('Failed to find ripple effect target')
      }

      const rippleEffectTarget: HTMLSpanElement = this.$refs
        .ripple as HTMLSpanElement
      rippleEffectTarget.classList.remove('animate')
    },
  },
})
</script>

<style scoped>
button {
  outline: none;
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  padding: 0px;
  text-align: left;
  position: relative;
  overflow: hidden;
}

@keyframes rippleEffect {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(var(--ripple-effect-scale));
  }
}
.ripple {
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 1px;
  height: 1px;
}
.ripple.animate {
  opacity: 1;
  animation: rippleEffect 0.3s;
}
</style>
