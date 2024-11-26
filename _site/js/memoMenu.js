document.getElementById('memo-toggle').onclick = function(event) {
  event.stopPropagation(); // 他の場所をクリック時に閉じるための対策
  var menu = document.getElementById('memo-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
};

// 画面の他の場所をクリックしたらメニューを閉じる
document.addEventListener('click', function(event) {
  var menu = document.getElementById('memo-menu');
  if (!menu.contains(event.target) && event.target.id !== 'memo-toggle') {
    menu.style.display = 'none';
  }
});
