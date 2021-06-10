<template>
  <div :class="$style.home">
    <Header />
    <div :class="$style.container">
      <div :class="$style.nav">
        <router-link
          :class="$style.link"
          :to="{
            name: 'calendar'
          }"
        >
          <img
            width="128"
            height="128"
            src="@/assets/images/calendar.png"
            :class="$style.icon"
          />
          <span :class="$style.linkText">
            {{ $t('views.calendar.title') }}</span
          >
        </router-link>
        <router-link
          :class="$style.link"
          :to="{
            name: 'hirakana'
          }"
        >
          <img
            width="128"
            height="128"
            src="@/assets/images/hirakana.png"
            :class="$style.icon"
          />
          <span :class="$style.linkText">
            {{ $t('views.hirakana.title') }}</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/layout/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>

<style lang="postcss" module>
.home {
  display: block;

  .container {
    position: relative;
    margin: 0 auto;
    max-width: 960px;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;

    &:hover {
      background-color: var(--color-hover);
    }

    &Text {
      margin-top: 16px;
    }
  }
}
</style>
