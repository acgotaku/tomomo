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
          <div :class="$style.option">
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
            <Button @click="copy" :disabled="!convertedText">
              {{ $t('common.copy') }}
            </Button>
          </div>
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
import { copyText } from '@/utils/util';
import { OptionItem } from '@/components/select';
import Header from '@/layout/Header.vue';
import message from '@/components/message';

@Component({
  components: {
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
        label: this.$i18n.t('common.width.full') as string
      },
      {
        value: 'half',
        label: this.$i18n.t('common.width.half') as string
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

  copy(): void {
    const result = copyText(this.convertedText);
    if (result) {
      message.success(this.$i18n.t('common.copySuccess') as string);
    } else {
      message.warning(this.$i18n.t('common.copyFailed') as string);
    }
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

  .origin,
  .result {
    width: 100%;
  }

  .textarea {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
  }

  .option {
    width: 400px;
    margin: 16px auto;
  }

  .select {
    width: 112px;
    margin-right: 16px;
  }
}

@media screen and (max-width: $Mobile) {
  .hirakana {
    .title {
      margin: 16px;
    }

    .container {
      padding: 8px;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
