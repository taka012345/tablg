document.addEventListener("DOMContentLoaded", function() {
    const memoToggle = document.getElementById("memo-toggle");
    const memoMenu = document.getElementById("memo-menu");
  
    memoToggle.addEventListener("click", function(event) {
      event.preventDefault();
      memoMenu.style.display = memoMenu.style.display === 'none' ? 'block' : 'none';
      event.stopPropagation();
    });
  
    document.addEventListener("click", function(event) {
      if (!memoMenu.contains(event.target) && !memoToggle.contains(event.target)) {
        memoMenu.style.display = 'none';
      }
    });
  });
  