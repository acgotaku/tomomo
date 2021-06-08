<template>
  <svg role="img" :class="$style.icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
  @Prop() readonly name!: string;

  get iconName(): string {
    return `#icon-${this.name}`;
  }
}
</script>
<style lang="postcss" module>
.icon {
  fill: currentColor;
  width: 24px;
  height: 24px;
}
</style>
