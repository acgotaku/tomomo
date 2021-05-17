<template>
  <div :class="$style.home">
    <h1 :class="$style.title">{{ $t('common.title') }}</h1>
    <h2 :class="$style.caption">{{ $t('views.home.caption') }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="postcss" module>
.home {
  margin: 0 auto;
  max-width: 860px;

  .title {
    margin-top: 16px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  .caption {
    margin: 24px;
    text-align: center;
  }
}
</style>
