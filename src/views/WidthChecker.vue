<template>
  <div :class="$style.widthChecker">
    <Header />
    <div :class="$style.widthCheckerInner">
      <h2 :class="$style.title">{{ $t('views.widthChecker.title') }}</h2>
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
          </div>
          <div :class="$style.resultText">
            <span
              v-for="(text, index) in convertedText"
              :key="index"
              v-html="formatText(text.content)"
              :class="{
                [$style.highlight]: text.width === width
              }"
            >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { checkWidth, WidthSlice } from '@/utils/width';
import { OptionItem } from '@/components/select';
import Lang from '@/components/views/Lang.vue';
import Header from '@/layout/Header.vue';

@Component({
  components: {
    Lang,
    Header
  }
})
export default class WidthChecker extends Vue {
  text = '';

  width = 'full';

  style = 'katakana';

  get convertedText(): Array<WidthSlice> {
    return checkWidth(this.text);
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

  formatText(text: string): string {
    return text
      .split('')
      .map(char => {
        if (char === '\n') {
          return '<br />';
        } else {
          return char;
        }
      })
      .join('');
  }
}
</script>

<style lang="postcss" module>
@import '@/styles/variables.css';

.widthChecker {
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

  .origin {
    width: 100%;
  }

  .result {
    width: 100%;

    &Text {
      width: 400px;
      height: 172px;
      border-radius: 4px;
      padding: 5px 8px;
      line-height: 20px;
      border: 1px solid var(--color-border);
      color: var(--color-main);

      &:hover,
      &:focus {
        border: 1px solid var(--color-primary);
      }
    }

    .highlight {
      background-color: var(--color-highlight);
    }
  }

  .textarea {
    width: 400px;
    max-width: 100%;
  }

  .option {
    margin: 16px 0;
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
