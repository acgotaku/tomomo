<template>
  <header :class="$style.header">
    <h1 :class="$style.title">
      <router-link
        :class="$style.link"
        :to="{
          name: 'home'
        }"
      >
        {{ $t('common.title') }}
      </router-link>
    </h1>
    <Lang />
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Lang from '@/components/views/Lang.vue';

@Component({
  components: {
    Lang
  }
})
export default class Header extends Vue {}
</script>
<style lang="postcss" module>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 64px;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);

  .title {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  .link {
    display: inline-block;
  }
}
</style>
