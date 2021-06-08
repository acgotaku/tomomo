<template>
  <div :class="$style.lang">
    <button @click.stop="toggle" :class="$style.button">
      <Icon name="language" :class="$style.icon" />
    </button>
    <ul :class="$style.list" v-show="showLang">
      <li :class="$style.item">
        <button :class="$style.selectLang" @click="toLang('en')">
          English
        </button>
      </li>
      <li :class="$style.item">
        <button :class="$style.selectLang" @click="toLang('ja')">日本語</button>
      </li>
      <li :class="$style.item">
        <button :class="$style.selectLang" @click="toLang('zh-CN')">
          简体中文
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Lang extends Vue {
  showLang = false;

  mounted(): void {
    window.addEventListener('click', this.close);
  }

  beforeDestroy(): void {
    window.removeEventListener('click', this.close);
  }

  toggle(): void {
    this.showLang = !this.showLang;
  }

  close(): void {
    this.showLang = false;
  }

  toLang(lang: string): void {
    this.$i18n.locale = lang;
    localStorage.setItem('language', lang);
  }
}
</script>
<style lang="postcss" module>
.lang {
  position: absolute;
  top: 20px;
  right: 16px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  z-index: 100;
}

.button {
  display: flex;
}
.icon {
  color: var(--color-main);
}

.list {
  width: 128px;
  border-radius: 4px;
  list-style: none;
  box-shadow: 0 2px 4px 0 var(--color-border);
  background-color: var(--color-bg);
}

.item {
  height: 40px;
}

.selectLang {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;

  &:hover,
  &:focus {
    outline: none;
    background-color: var(--color-hover);
  }
}
</style>
