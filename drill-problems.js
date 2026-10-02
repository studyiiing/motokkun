/*
  猛特訓アプリ 問題データ（このファイルだけ編集すれば問題を追加できます）

  追加のしかた：
  「▲ ここより上に追加」の行の直上に、下の形のセットを1つ貼ります（前のセットの } のあとにカンマ）。
  { title:"セット名", items:[
      { q:"日本語（意味のかたまり）", a:"English chunk" },
      { q:"つなげる日本語", a:"English chunk chunk" },
      { q:"全文の日本語", a:"Full English sentence.", full:true }   // 最後は full:true
  ]}

  ルール：
  ・a（英語）はユーザーが決めた英文をそのまま使う（書き換えない）
  ・すべての a は、全文の英語の「連続した一部分」にする
  ・最後の1問に full:true を付ける

  下のセットは動作確認用のサンプルです。自分の問題を追加したら、消して構いません。
*/
window.DRILL_SETS = [
  { title:"サンプル：父の通勤", items:[
    { q:"私の父は", a:"My father" },
    { q:"小さな会社で働いている", a:"who works at a small company" },
    { q:"私の父は、小さな会社で働いていて、", a:"My father, who works at a small company," },
    { q:"毎日電車で会社へ行きます", a:"goes to the office by train every day." },
    { q:"小さな会社で働いている私の父は、毎日電車で会社へ行きます。", a:"My father, who works at a small company, goes to the office by train every day.", full:true }
  ]},
  { title:"サンプル：もしもの話", items:[
    { q:"もしもっと時間があれば", a:"If I had more time," },
    { q:"毎朝英語を勉強するのに", a:"I would study English every morning." },
    { q:"もしもっと時間があれば、毎朝英語を勉強するのに。", a:"If I had more time, I would study English every morning.", full:true }
  ]},
  /* 出典：「What if a Hummingbird Wears a Tiny Backpack?」Science Journal for Kids（2026, CC BY）。もとの論文：Sargent et al. (2026) Animal Biotelemetry。
     https://www.sciencejournalforkids.org/wp-content/uploads/2026/08/hummingbird-backpacks_article.pdf
     英文は記事のまま。日本語訳と区切りは独自。 */
  { title:"ハチドリ（出典：Science Journal for Kids）", items:[
  { q: "驚くべき生き物", a: "amazing creatures." },
  { q: "ハチドリは実に驚くべき生物である。", a: "Hummingbirds are amazing creatures.", full: true },
  { q: "彼らは空中で静止できる", a: "They can hover in the air," },
  { q: "(彼らは)後ろ向きに飛べる", a: "They can fly backward," },
  { q: "空中で静止し、後ろ向きに飛ぶことができる", a: "They can hover in the air, fly backward," },
  { q: "(彼らは)花の蜜を吸える", a: "They can drink nectar from flowers" },
  { q: "羽がとても速く動いている間に", a: "while their wings beat very fast." },
  { q: "羽をとても速く動かしながら、花の蜜を吸う", a: "and drink nectar from flowers while their wings beat very fast." },
  { q: "彼らは空中で静止することができ、後方飛行も可能で、さらに非常に高速で羽ばたきながら花の蜜を吸うことができる。", a: "They can hover in the air, fly backward, and drink nectar from flowers while their wings beat very fast.", full: true },
  { q: "(それらは)とても小さくもある", a: "They are also very small." },
  { q: "しかし同時に、ハチドリは極めて小型でもある。", a: "But hummingbirds are also very small.", full: true },
  { q: "ノドグロマンゴーハチドリは", a: "A Black-throated Mango hummingbird" },
  { q: "(それは)わずか約8グラムの重さしかない", a: "It weighs only about 8 grams." },
  { q: "ノドグロマンゴーハチドリの体重は、わずか約8グラムしかない。", a: "A Black-throated Mango hummingbird weighs only about 8 grams.", full: true },
  { q: "砂糖小さじ2杯", a: "two teaspoons of sugar!" },
  { q: "砂糖小さじ2杯より少ない", a: "less than two teaspoons of sugar!" },
  { q: "これは砂糖小さじ2杯分にも満たない重さだ。", a: "That is less than two teaspoons of sugar!", full: true },
  { q: "ハチドリは食べることができる", a: "A hummingbird can eat" },
  { q: "自分の体重の3倍以上", a: "more than three times its own body weight" },
  { q: "ハチドリは自分の体重の3倍以上を食べることができる", a: "A hummingbird can eat more than three times its own body weight" },
  { q: "毎日、蜜を", a: "in nectar each day" },
  { q: "ただ動き続けるためだけに", a: "just to keep moving." },
  { q: "ただ動き続けるためだけに、毎日蜜を", a: "in nectar each day just to keep moving." },
  { q: "ハチドリは、ただ動き続けるためだけに、毎日自分の体重の3倍以上の蜜を食べることができる。", a: "A hummingbird can eat more than three times its own body weight in nectar each day just to keep moving.", full: true },
  { q: "彼らは速く動く", a: "they move fast!" },
  { q: "そして、彼らは動きが速い！", a: "And they move fast!", full: true },
  { q: "私たちは知っている", a: "We know" },
  { q: "彼らは時速31マイルまで出せる", a: "they can reach up to 31 miles per hour" },
  { q: "前に飛ぶとき", a: "in forward flight." },
  { q: "前に飛ぶとき、時速31マイルまで出せる", a: "they can reach up to 31 miles per hour in forward flight." },
  { q: "ハチドリは前に飛ぶとき、時速31マイル（約50キロ）まで出せることがわかっている。", a: "We know they can reach up to 31 miles per hour in forward flight.", full: true }
]},

  // ▲ ここより上に追加
];
