let btn = document.getElementById('btn');

btn.addEventListener('click', people);
function people() {
let changeImg = document.getElementById('change-img');
let name = document.getElementById('name');
let res = [['t', 'トニー・スターク','アイアンマン3',' 「 私の自宅やスーツを奪えても、これだけは奪えない。私が、アイアンマンだ 」 '], ['f', 'ホークアイ','アベンジャーズ／エイジ・オブ・ウルトロン',' 「 怖いならここにいろ。外に出るなら戦え。一歩外に出たら君はアベンジャーズだ! 」 '], ['k', 'キャプテン・アメリカ','ウィンターソルジャー／キャプテン・アメリカ',' 「 ひとりでも立ち向かうが…ひとりでは無いと信じる。 」 '], ['s', 'マイティ・ソー','インフィニティー・ウォー',' 「 サノスを連れてこい！ 」 '],['d','ドクター・ストレンジ','ドクターストレンジ',' 「 負けたとしても、やり直す。何度も何度も永遠に 」 '],['b','ブラックパンサー','ブラックパンサー',' 「 隠れるのは正義に背を向けるのと同じ...もう逃げない! 」 '],['p','スパイダーマン','スパイダーマンホームカミング',' 「 いくぞピーター！スパイダーマンだろう！？立て！スパイダーマン！ 」 ']]; //結果の配列

let randomNum = Math.random();
let num = Math.floor(randomNum * res.length);


changeImg.src = 'assets/img/' + res[num][0] + '.jpg';
name.textContent = res[num][1];
let moviename = document.getElementById('moviename');
moviename.textContent = ' 映画 : ' + res[num][2];
let wise = document.getElementById('wise');
wise.textContent = res[num][3];
}