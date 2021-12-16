<template>
  <div class="container">
    <logo-icon class="logo-icon" />
    <p class="app-title">Time Machine Diary</p>
    <app-version-panel class="version-panel" />

    <transition>
      <div class="option-list">
        <ripple-effect-block-button>
          <div class="row grid-3-columns">
            <span class="name">암호 잠금</span>
            <span class="value">{{ usePasswordDisplayValue }}</span>
            <arrow-right-icon />
          </div>
        </ripple-effect-block-button>

        <div class="row-padding" />

        <ripple-effect-block-button>
          <div class="row grid-3-columns">
            <span class="name">초기화면</span>
            <span class="value">{{ viewModeDisplayValue }}</span>
            <arrow-right-icon />
          </div>
        </ripple-effect-block-button>

        <div class="boundary" />

        <div class="row grid-3-columns">
          <span class="name">알람</span>
          <span class="value">{{ alarmDisplayValue }}</span>
          <toggle-checkbox />
        </div>

        <div class="row-padding" />

        <ripple-effect-block-button>
          <div class="row grid-3-columns">
            <span class="name">테마</span>
            <span class="value">{{ themeDisplayValue }}</span>
            <arrow-right-icon />
          </div>
        </ripple-effect-block-button>

        <div class="row-padding" />

        <ripple-effect-block-button>
          <div class="row">
            <span class="name">불러오기</span>
          </div>
        </ripple-effect-block-button>

        <div class="boundary" />

        <ripple-effect-block-button>
          <div class="row">
            <span class="name">내보내기</span>
          </div>
        </ripple-effect-block-button>

        <div class="row-padding" />

        <ripple-effect-block-button>
          <div class="row">
            <span class="name">초기화</span>
          </div>
        </ripple-effect-block-button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LogoIcon from '../components/icons/LogoIcon.vue'
import AppVersionPanel from '../components/AppVersionPanel.vue'
import ArrowRightIcon from '../components/icons/ArrowRightIcon.vue'
import { THEME_NAME, VIEW_MODES } from '../constants'
import ToggleCheckbox from '../components/ToggleCheckbox.vue'
import RippleEffectBlockButton from '../components/RippleEffectBlockButton.vue'

export default Vue.extend({
  name: 'setting-view',
  computed: {
    usePasswordDisplayValue(): string {
      return this.$store.state.usePassword ? '켜짐' : '꺼짐'
    },
    viewModeDisplayValue(): string {
      return this.$store.state.viewMode === VIEW_MODES.CALENDAR
        ? '캘린더'
        : '리스트'
    },
    alarmDisplayValue(): string {
      const alarm: string | undefined = this.$store.state.alarm
      if (!alarm) return ''

      const [hour, minute]: number[] = alarm
        .split(':')
        .map((time: string) => Number(time))

      return `${hour >= 13 ? '오후' : '오전'} ${
        hour >= 13 ? hour - 12 : hour
      }:${minute}`
    },

    themeDisplayValue(): string {
      const theme: string = this.$store.state.theme
      return THEME_NAME[theme]
    },
  },
  components: {
    LogoIcon,
    AppVersionPanel,
    ArrowRightIcon,
    ToggleCheckbox,
    RippleEffectBlockButton,
  },
})
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--theme-primary-color);
}
.logo-icon {
  margin: 30px auto;
  width: 10vw;
}
.app-title {
  color: var(--theme-white);
  font-weight: bold;
  text-align: center;
}
.version-panel {
  padding-bottom: 20px;
}
.row {
  height: 30px;
  display: grid;
  background-color: var(--theme-white);
  padding: 10px;
  gap: 10px;
  color: var(--font-color-default);
}
.row > * {
  margin: auto 0px;
}
.grid-3-columns {
  grid-template-columns: 1fr auto auto;
}
.row-padding {
  height: 30px;
}
.boundary {
  border-bottom: 1px solid var(--theme-gray);
}
</style>
