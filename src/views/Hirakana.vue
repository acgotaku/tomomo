<template>
  <div :class="$style.hirakana">
    <Header />
    <div :class="$style.hirakanaInner">
      <h2 :class="$style.title">{{ $t('views.hirakana.title') }}</h2>
      <div :class="$style.container">
        <div :class="$style.origin">
          <Textarea
            :rows="8"
            :class="$style.textarea"
            v-model="text"
          ></Textarea>
        </div>
        <div :class="$style.result">
          <Select :class="$style.select" v-model="width">
            <option
              v-for="width in widthOptions"
              :key="width.value"
              :value="width.value"
            >
              {{ width.label }}
            </option>
          </Select>
          <Select :class="$style.select" v-model="style">
            <option
              v-for="style in styleOptions"
              :key="style.value"
              :value="style.value"
            >
              {{ style.label }}
            </option>
          </Select>
          <Textarea
            :rows="8"
            :class="$style.textarea"
            :readonly="true"
            v-model="convertedText"
          ></Textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import hirakanaUtils from '@/utils/hirakana';
import { OptionItem } from '@/components/select';
import Lang from '@/components/views/Lang.vue';
import Header from '@/layout/Header.vue';

@Component({
  components: {
    Lang,
    Header
  }
})
export default class Hirakana extends Vue {
  text = '';

  width = 'full';

  style = 'katakana';

  get convertedText(): string {
    const defaultText = hirakanaUtils.toFullWidth(this.text);
    const newText =
      this.style === 'katakana'
        ? hirakanaUtils.hiraToKana(defaultText)
        : hirakanaUtils.kanaToHira(defaultText);
    const widthText =
      this.width === 'full'
        ? hirakanaUtils.toFullWidth(newText)
        : hirakanaUtils.toHalfWidth(newText);

    return widthText;
  }

  get widthOptions(): Array<OptionItem> {
    return [
      {
        value: 'full',
        label: this.$i18n.t('views.hirakana.width.full') as string
      },
      {
        value: 'half',
        label: this.$i18n.t('views.hirakana.width.half') as string
      }
    ];
  }

  get styleOptions(): Array<OptionItem> {
    return [
      {
        value: 'hiragana',
        label: this.$i18n.t('views.hirakana.style.hiragana') as string
      },
      {
        value: 'katakana',
        label: this.$i18n.t('views.hirakana.style.katakana') as string
      }
    ];
  }
}
</script>

<style lang="postcss" module>
@import '@/styles/variables.css';

.hirakana {
  display: block;

  &Inner {
    position: relative;
    margin: 0 auto;
    max-width: 960px;
  }

  .title {
    margin: 24px;
    text-align: center;
  }

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .textarea {
    width: 400px;
  }

  .select {
    width: 96px;
    margin: 0 16px 16px 0;
  }
}
</style>
