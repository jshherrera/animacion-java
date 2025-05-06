function getRandomColor() {
    const colors = ['red', 'deeppink', 'purple', 'hotpink', 'orangered', 'fuchsia', 'crimson','green'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  document.body.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.clientX - 50 + 'px';
    heart.style.top = e.clientY - 45 + 'px';
    heart.style.background = getRandomColor();
  
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 2000);
  });