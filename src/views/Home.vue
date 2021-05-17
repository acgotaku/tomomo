<template>
  <div :class="$style.home">
    <h1 :class="$style.title">{{ $t('common.title') }}</h1>
    <h2 :class="$style.caption">{{ $t('views.home.caption') }}</h2>
    <div :class="$style.convert">
      <div :class="$style.japan">
        <h3 :class="$style.japanTitle">{{ $t('views.home.japan') }}</h3>
        <div :class="$style.japanDate">
          <TInput :class="$style.input" />
          <span :class="$style.date">{{ $t('common.year') }}</span>
          <TInput :class="$style.input" />
          <span :class="$style.date">{{ $t('common.month') }}</span>
          <TInput :class="$style.input" />
          <span :class="$style.date">{{ $t('common.day') }}</span>
        </div>
      </div>
      <div :class="$style.west">
        <h3 :class="$style.westTitle">{{ $t('views.home.west') }}</h3>
        <div :class="$style.westDate">
          <TInput :class="$style.input" />
          <span :class="$style.date">{{ $t('common.year') }}</span>
          <TInput :class="$style.input" />
          <span :class="$style.date">{{ $t('common.month') }}</span>
          <TInput :class="$style.input" />
          <span :class="$style.date">{{ $t('common.day') }}</span>
        </div>
      </div>
    </div>
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
    padding-top: 16px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  .caption {
    margin: 24px;
    text-align: center;
  }

  .convert {
    display: flex;
    justify-content: space-between;
  }

  .japan {
    display: block;

    &Title {
      margin: 16px;
      text-align: center;
    }

    &Date {
      display: flex;
      align-items: center;
    }

    .input {
      width: 96px;
    }

    .date {
      display: inline-block;
      margin: 0 8px;
    }
  }

  .west {
    display: block;

    &Title {
      margin: 16px;
      text-align: center;
    }

    &Date {
      display: flex;
      align-items: center;
    }

    .input {
      width: 96px;
    }

    .date {
      display: inline-block;
      margin: 0 8px;
    }
  }
}
</style>
