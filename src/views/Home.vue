<template>
  <div :class="$style.home">
    <h1 :class="$style.title">{{ $t('common.title') }}</h1>
    <h2 :class="$style.caption">{{ $t('views.home.caption') }}</h2>
    <div :class="$style.convert">
      <div :class="$style.japan">
        <h3 :class="$style.japanTitle">{{ $t('views.home.japan') }}</h3>
        <div :class="$style.japanDate">
          <Select :class="$style.select" v-model="currentEra">
            <option
              v-for="era in eraOptions"
              :key="era.value"
              :value="era.value"
            >
              {{ era.label }}
            </option>
          </Select>
          <TInput
            :class="$style.input"
            v-model.number="japanYear"
            :invalid="!validJapanYear"
            inputmode="numeric"
            type="number"
            @on-input="updateWestYear"
          />
          <span :class="$style.date">{{ $t('common.year') }}</span>
          <TInput
            :class="$style.input"
            v-model.number="japanMonth"
            :invalid="!validMonth"
            inputmode="numeric"
            type="number"
          />
          <span :class="$style.date">{{ $t('common.month') }}</span>
          <TInput
            :class="$style.input"
            v-model.number="japanDay"
            :invalid="!validDay"
            inputmode="numeric"
            type="number"
          />
          <span :class="$style.date">{{ $t('common.day') }}</span>
        </div>
      </div>
      <div :class="$style.west">
        <h3 :class="$style.westTitle">{{ $t('views.home.west') }}</h3>
        <div :class="$style.westDate">
          <TInput
            :class="$style.input"
            v-model.number="westYear"
            :invalid="!validWestYear"
            inputmode="numeric"
            type="number"
            @on-input="updateJapanYear"
          />
          <span :class="$style.date">{{ $t('common.year') }}</span>
          <TInput
            :class="$style.input"
            v-model.number="westMonth"
            :invalid="!validMonth"
            inputmode="numeric"
            type="number"
          />
          <span :class="$style.date">{{ $t('common.month') }}</span>
          <TInput
            :class="$style.input"
            v-model.number="westDay"
            :invalid="!validDay"
            inputmode="numeric"
            type="number"
          />
          <span :class="$style.date">{{ $t('common.day') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import dateUtils from '@/utils/date';

interface OptionItem {
  value: string;
  label: string;
}

@Component
export default class Home extends Vue {
  currentEra = 'reiwa';

  japanYear = 1;
  westYear = 2020;
  month = 12;
  day = 12;

  created(): void {
    const now = new Date();
    this.westYear = now.getFullYear();
    this.month = now.getMonth() + 1;
    this.day = now.getDate();
  }

  get eraOptions(): Array<OptionItem> {
    return [
      {
        value: 'reiwa',
        label: this.$i18n.t('views.home.era.reiwa') as string
      },
      {
        value: 'heisei',
        label: this.$i18n.t('views.home.era.heisei') as string
      },
      {
        value: 'showa',
        label: this.$i18n.t('views.home.era.showa') as string
      },
      {
        value: 'taisho',
        label: this.$i18n.t('views.home.era.taisho') as string
      },
      {
        value: 'meiji',
        label: this.$i18n.t('views.home.era.meiji') as string
      }
    ];
  }

  get validJapanYear(): boolean {
    if (this.japanYear >= 1) {
      return true;
    } else {
      return false;
    }
  }

  get validWestYear(): boolean {
    if (this.westYear >= 1868) {
      return true;
    } else {
      return false;
    }
  }

  get japanMonth(): number {
    return this.month;
  }
  set japanMonth(month: number) {
    this.month = month;
    this.updateWestYear();
  }

  get westMonth(): number {
    return this.month;
  }
  set westMonth(month: number) {
    this.month = month;
    this.updateJapanYear();
  }

  get validMonth(): boolean {
    if (this.month >= 1 && this.month <= 12 && Number.isInteger(this.month)) {
      return true;
    } else {
      return false;
    }
  }

  get japanDay(): number {
    return this.day;
  }
  set japanDay(day: number) {
    this.day = day;
    this.updateWestYear();
  }

  get westDay(): number {
    return this.day;
  }
  set westDay(day: number) {
    this.day = day;
    this.updateJapanYear();
  }

  get validDay(): boolean {
    if (this.day > 31 || !Number.isInteger(this.day)) {
      return false;
    }
    const maxDay = dateUtils.getDayCountOfMonth(this.westYear, this.month - 1);
    if (this.day <= maxDay && this.day >= 1) {
      return true;
    } else {
      return false;
    }
  }

  @Watch('currentEra')
  onCurrentEraChanged(): void {
    this.updateWestYear();
  }

  updateWestYear(): void {
    if (this.validJapanYear) {
      const year = this.calcWestYear(this.currentEra, this.japanYear);
      this.westYear = year;
    }
  }

  calcWestYear(era: string, japanYear: number): number {
    let year = 2020;
    switch (era) {
      case 'reiwa': {
        year = japanYear + 2018;
        break;
      }
      case 'heisei': {
        year = japanYear + 1988;
        break;
      }
      case 'showa': {
        year = japanYear + 1925;
        break;
      }
      case 'taisho': {
        year = japanYear + 1911;
        break;
      }
      case 'meiji': {
        year = japanYear + 1867;
        break;
      }
    }
    return year;
  }

  updateJapanYear(): void {
    if (this.validWestYear && this.validMonth && this.validDay) {
      const { era, japanYear } = this.calcJapanYear(
        this.westYear,
        this.month,
        this.day
      );
      this.currentEra = era;
      this.japanYear = japanYear;
    }
  }

  calcJapanYear(
    westYear: number,
    month: number,
    day: number
  ): {
    era: string;
    japanYear: number;
  } {
    let era = 'reiwa';
    let japanYear = 1;
    const currentDay = new Date(westYear, month - 1, day);
    const reiwaDay = new Date(2019, 4, 1);
    const heiseiDay = new Date(1989, 0, 8);
    const showaDay = new Date(1926, 11, 25);
    const taishoDay = new Date(1912, 6, 30);
    const meijiDay = new Date(1868, 8, 8);

    if (currentDay >= reiwaDay) {
      era = 'reiwa';
      japanYear = westYear - 2018;
    } else if (currentDay >= heiseiDay) {
      era = 'heisei';
      japanYear = westYear - 1988;
    } else if (currentDay >= showaDay) {
      era = 'showa';
      japanYear = westYear - 1925;
    } else if (currentDay >= taishoDay) {
      era = 'taisho';
      japanYear = westYear - 1911;
    } else if (currentDay >= meijiDay) {
      era = 'meiji';
      japanYear = westYear - 1867;
    }

    return {
      era,
      japanYear
    };
  }
}
</script>

<style lang="postcss" module>
.home {
  margin: 0 auto;
  max-width: 960px;

  .title {
    padding-top: 16px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  .caption {
    margin: 24px;
    text-align: center;
  }

  .convert {
    display: flex;
    justify-content: space-between;
  }

  .japan {
    display: block;

    &Title {
      margin: 16px;
      text-align: center;
    }

    &Date {
      display: flex;
      align-items: center;
    }

    .select {
      width: 80px;
      margin-right: 32px;
    }
    .input {
      width: 80px;
    }

    .date {
      display: inline-block;
      margin: 0 8px;
    }
  }

  .west {
    display: block;

    &Title {
      margin: 16px;
      text-align: center;
    }

    &Date {
      display: flex;
      align-items: center;
    }

    .input {
      width: 80px;
    }

    .date {
      display: inline-block;
      margin: 0 8px;
    }
  }
}
</style>
