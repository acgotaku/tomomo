<template>
  <select v-model="currentValue" :class="$style.select">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Select extends Vue {
  @Prop({ default: '' }) readonly value!: string;

  get currentValue(): string {
    return this.value;
  }
  set currentValue(value: string) {
    this.$emit('input', value);
  }
}
</script>
<style lang="postcss" module>
.select {
  position: relative;
  width: 100%;
  border-radius: 4px;
  padding: 5px 8px;
  line-height: 20px;
  border: 1px solid var(--color-border);
  color: var(--color-main);
  background: right 4px center / 16px no-repeat url(~@/assets/down.svg);
}
</style>
