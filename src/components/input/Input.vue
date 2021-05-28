<template>
  <div
    :class="{ [$style.input]: true, [$style.disabled]: disabledState }"
    @mouseenter="inputHover = true"
    @mouseleave="inputHover = false"
  >
    <input
      ref="input"
      :type="inputType"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :class="{
        [$style.inner]: true,
        [$style.inputText]: true,
        [$style.hover]: inputHover,
        [$style.error]: inValidState
      }"
      :readonly="readonly"
      v-model="currentValue"
      @input="emitInput"
      @blur="emitBlur"
      @keyup.esc="emitEsc"
      @keyup.enter="emitEnter"
      :disabled="disabledState"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ default: '' }) readonly value!: string;
  @Prop({ default: 'text', type: String }) readonly type!: string;
  @Prop({ default: 'text', type: String }) readonly inputmode!: string;
  @Prop({ default: 'no', type: String }) readonly autocomplete!: string;
  @Prop({ default: 2 }) readonly rows!: number;
  @Prop({ default: false, type: Boolean }) readonly readonly!: boolean;
  @Prop({ default: false, type: Boolean }) readonly disabled!: boolean;
  @Prop({ default: false, type: Boolean }) readonly required!: boolean;
  @Prop({ default: false, type: Boolean }) readonly invalid!: boolean;
  @Prop({ default: false }) readonly placeholder!: string;

  currentValue = this.value;
  inputHover = false;

  passwordInputType = 'password';

  @Watch('value')
  onValueChanged(): void {
    this.currentValue = this.value;
    this.$emit('on-change', this.currentValue);
  }

  get inputType(): string {
    return this.type;
  }

  get inValidState(): boolean {
    return this.invalid;
  }

  get disabledState(): boolean {
    return this.disabled;
  }

  focus(): void {
    (this.$refs['input'] as HTMLInputElement).focus();
  }

  emitClear(): void {
    this.emitInput();
    this.$emit('on-clear', this.currentValue);
  }

  emitInput(): void {
    this.$emit('input', this.currentValue);
    this.$emit('on-input', this.currentValue);
  }

  emitEsc(): void {
    this.$emit('on-esc');
  }
  emitEnter(): void {
    this.$emit('on-enter');
  }
  emitBlur(): void {
    this.$emit('on-blur');
  }
}
</script>
<style lang="postcss" module>
input[type='number'] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;

  &Text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .inner {
    width: 100%;
    border-radius: 4px;
    padding: 5px 8px;
    line-height: 20px;
    border: 1px solid var(--color-border);
    color: var(--color-main);
    text-align: right;

    &:read-only {
      user-select: none;
      cursor: pointer;
    }

    &:hover,
    &.hover,
    &:focus {
      border: 1px solid var(--color-primary);
      outline: none;
    }

    &.error {
      border: 1px solid var(--color-danger);
    }

    &:disabled {
      cursor: not-allowed;
      color: var(--color-disabled);
      background-color: var(--color-hover);

      &:hover,
      &.hover,
      &:focus {
        border: 1px solid var(--color-border);
      }
    }
  }
}
</style>
