const kanjiList = [
    // 漢字リストをここに追加
    月
];

const kanjiContainer = document.getElementById('kanji-container');
let currentKanjiIndex = 0;

function displayKanji(index) {
    kanjiContainer.textContent = kanjiList[index];
}

displayKanji(currentKanjiIndex);

kanjiContainer.addEventListener('click', () => {
    currentKanjiIndex = (currentKanjiIndex + 1) % kanjiList.length;
    displayKanji(currentKanjiIndex);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




