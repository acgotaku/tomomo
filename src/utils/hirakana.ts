const fullWidthKanaArray = [
  '。',
  '「',
  '」',
  '、',
  '・',
  'ヲ',
  'ァ',
  'ィ',
  'ゥ',
  'ェ',
  'ォ',
  'ャ',
  'ュ',
  'ョ',
  'ッ',
  'ー',
  'ア',
  'イ',
  'ウ',
  'エ',
  'オ',
  'カ',
  'キ',
  'ク',
  'ケ',
  'コ',
  'サ',
  'シ',
  'ス',
  'セ',
  'ソ',
  'タ',
  'チ',
  'ツ',
  'テ',
  'ト',
  'ナ',
  'ニ',
  'ヌ',
  'ネ',
  'ノ',
  'ハ',
  'ヒ',
  'フ',
  'ヘ',
  'ホ',
  'マ',
  'ミ',
  'ム',
  'メ',
  'モ',
  'ヤ',
  'ユ',
  'ヨ',
  'ラ',
  'リ',
  'ル',
  'レ',
  'ロ',
  'ワ',
  'ン',
  '゛',
  '゜',
  'ヺ',
  'ヴ',
  'ガ',
  'ギ',
  'グ',
  'ゲ',
  'ゴ',
  'ザ',
  'ジ',
  'ズ',
  'ゼ',
  'ゾ',
  'ダ',
  'ヂ',
  'ヅ',
  'デ',
  'ド',
  'バ',
  'パ',
  'ビ',
  'ピ',
  'ブ',
  'プ',
  'ベ',
  'ペ',
  'ボ',
  'ポ',
  'ヷ'
];

const halfWidthKanaArray = [
  '｡',
  '｢',
  '｣',
  '､',
  '･',
  'ｦ',
  'ｧ',
  'ｨ',
  'ｩ',
  'ｪ',
  'ｫ',
  'ｬ',
  'ｭ',
  'ｮ',
  'ｯ',
  'ｰ',
  'ｱ',
  'ｲ',
  'ｳ',
  'ｴ',
  'ｵ',
  'ｶ',
  'ｷ',
  'ｸ',
  'ｹ',
  'ｺ',
  'ｻ',
  'ｼ',
  'ｽ',
  'ｾ',
  'ｿ',
  'ﾀ',
  'ﾁ',
  'ﾂ',
  'ﾃ',
  'ﾄ',
  'ﾅ',
  'ﾆ',
  'ﾇ',
  'ﾈ',
  'ﾉ',
  'ﾊ',
  'ﾋ',
  'ﾌ',
  'ﾍ',
  'ﾎ',
  'ﾏ',
  'ﾐ',
  'ﾑ',
  'ﾒ',
  'ﾓ',
  'ﾔ',
  'ﾕ',
  'ﾖ',
  'ﾗ',
  'ﾘ',
  'ﾙ',
  'ﾚ',
  'ﾛ',
  'ﾜ',
  'ﾝ',
  'ﾞ',
  'ﾟ',
  'ｦﾞ',
  'ｳﾞ',
  'ｶﾞ',
  'ｷﾞ',
  'ｸﾞ',
  'ｹﾞ',
  'ｺﾞ',
  'ｻﾞ',
  'ｼﾞ',
  'ｽﾞ',
  'ｾﾞ',
  'ｿﾞ',
  'ﾀﾞ',
  'ﾁﾞ',
  'ﾂﾞ',
  'ﾃﾞ',
  'ﾄﾞ',
  'ﾊﾞ',
  'ﾊﾟ',
  'ﾋﾞ',
  'ﾋﾟ',
  'ﾌﾞ',
  'ﾌﾟ',
  'ﾍﾞ',
  'ﾍﾟ',
  'ﾎﾞ',
  'ﾎﾟ',
  'ﾜﾞ'
];

function fullWidthToHalfWidth(str: string): string {
  str = fullWidthASCIITohalfWidthASCII(str);
  str = fullWidthKanaToHalfWidthKana(str);
  return str;
}

function haldWidthToFullWidth(str: string): string {
  str = halfWidthASCIIToFullWidthASCII(str);
  str = halfWidthKanaToFullWidthKana(str);
  return str;
}

function fullWidthASCIITohalfWidthASCII(ascii: string): string {
  return ascii.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, s =>
    String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  );
}

function halfWidthASCIIToFullWidthASCII(ascii: string): string {
  return ascii.replace(/[A-Za-z0-9!-~]/g, s =>
    String.fromCharCode(s.charCodeAt(0) + 0xfee0)
  );
}

function fullWidthKanaToHalfWidthKana(kana: string): string {
  fullWidthKanaArray.forEach((regex, index) => {
    kana = kana.replace(new RegExp(regex, 'g'), halfWidthKanaArray[index]);
  });
  return kana;
}

function halfWidthKanaToFullWidthKana(kana: string): string {
  halfWidthKanaArray.forEach((regex, index) => {
    kana = kana.replace(new RegExp(regex, 'g'), fullWidthKanaArray[index]);
  });
  return kana;
}

export default {
  fullWidthToHalfWidth,
  haldWidthToFullWidth
};
