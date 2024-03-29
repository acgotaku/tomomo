<template>
  <component
    :is="isLink ? 'router-link' : 'button'"
    :to="isLink ? to : false"
    v-on="$listeners"
    :type="buttonType"
    :disabled="disabled"
    :class="{
      [$style.button]: true,
      [$style[mode]]: !disabled
    }"
  >
    <span :class="$style.text">
      <slot></slot>
    </span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RawLocation } from 'vue-router';

type ButtonMode = 'primary' | 'normal' | 'danger';

@Component
export default class Button extends Vue {
  @Prop({ default: 'button' }) readonly type!: string;
  @Prop({ default: 'primary' }) readonly mode!: ButtonMode;
  @Prop({ default: false, type: Boolean }) readonly disabled!: boolean;
  @Prop() readonly to!: RawLocation;

  get isLink(): boolean {
    return !!this.to;
  }

  get buttonType(): string | false {
    if (this.isLink) {
      return false;
    } else {
      return this.type;
    }
  }
}
</script>
<style lang="postcss" module>
@define-mixin button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

@define-mixin main-button {
  @mixin button;
  color: var(--color-bg);
  background-image: linear-gradient(to bottom, #40a9ff, #1890ff 98%);

  &:hover {
    opacity: 0.8;
  }
}

@define-mixin normal-button {
  @mixin button;
  position: relative;
  color: var(--color-secondary);
  border: solid 1px var(--color-border);
  background-color: var(--color-bg);

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-hover);
    }
  }
}

@define-mixin disabled-button {
  @mixin button;
  color: var(--color-disabled);
  border: solid 1px var(--color-border);
  background-color: var(--color-hover);
  cursor: not-allowed;
}

.button {
  min-width: 96px;
  height: 32px;
  padding: 0 16px;

  &.primary {
    @mixin main-button;
  }

  &.normal {
    @mixin normal-button;
  }

  &.danger {
    @mixin button;
    color: var(--color-danger);
    border: 1px solid var(--color-danger);

    &:hover {
      background-color: rgba(245, 34, 45, 0.05);
    }
  }

  &:disabled {
    @mixin disabled-button;
    pointer-events: none;
  }

  .text {
    padding: 0 4px;
  }

  .loading {
    width: 16px;
    height: 16px;
    color: var(--color-main);
  }
}
</style>
