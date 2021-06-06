<template>
  <div :class="$style.hirakana">
    <Header />
    <div :class="$style.hirakanaInner">
      <h2 :class="$style.title">{{ $t('views.hirakana.title') }}</h2>
      <div :class="$style.container">
        <Textarea :rows="8" :class="$style.textarea" v-model="text"></Textarea>
        <Textarea
          :rows="8"
          :class="$style.textarea"
          :readonly="true"
          v-model="convertedText"
        ></Textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import hirakanaUtils from '@/utils/hirakana';
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

  get convertedText(): string {
    return hirakanaUtils.haldWidthToFullWidth(this.text);
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
    justify-content: space-between;
  }

  .textarea {
    width: 400px;
  }
}
</style>
