<template>
  <div :class="$style.qrcode">
    <Header />
    <div :class="$style.qrcodeInner">
      <h2 :class="$style.title">{{ $t('views.qrcode.title') }}</h2>
      <div :class="$style.container">
        <div :class="$style.origin">
          <Textarea :rows="8" :class="$style.textarea" v-model="text">
          </Textarea>
        </div>
        <div :class="$style.result">
          <div :class="$style.image">
            <img :src="qrcodeURL" width="200" height="200" alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import QRCodeLib from 'qrcode';
import Header from '@/layout/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class QRCode extends Vue {
  text = '';

  qrcodeURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

  @Watch('text')
  onTextChanged(): void {
    QRCodeLib.toDataURL(this.text, { width: 200 }).then(dataURL => {
      this.qrcodeURL = dataURL;
    });
  }

  mounted(): void {
    const query = this.$route.query;
    if (query['text']) {
      this.text = query['text'] as string;
    }
  }
}
</script>
<style lang="postcss" module>
.qrcode {
  display: block;

  .title {
    margin: 24px;
    text-align: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .origin,
  .result {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .textarea {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
  }

  .image {
    margin: 0;
  }
}
</style>
