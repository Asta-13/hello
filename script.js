const kanjiList = [
  { kanji: "一", meaning: "1" },
  { kanji: "会", meaning: "会う、会社" },
  { kanji: "日", meaning: "日本、今日" },
  // 他の漢字も同様に追加
  // ...
  { kanji: "犬", meaning: "犬、ペット" }, // 例示のための一つ
  // ...
  { kanji: "食", meaning: "食べる、食事" }, // 例示のための一つ
  // ...
  // 111個の漢字を追加
];

const cardContainer = document.querySelector('.card-container');

function createCard(kanji, meaning) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="front" onclick="flipCard(this)">${kanji}</div>
    <div class="back" onclick="flipCard(this)">${meaning}</div>
  `;
  return card;
}

function renderCards() {
  kanjiList.forEach(item => {
    const card = createCard(item.kanji, item.meaning);
    cardContainer.appendChild(card);
  });
}

renderCards();

function flipCard(card) {
  card.classList.toggle('flipped');
}
