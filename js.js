function changeButtonBackground(button, image, link) {
  button.style.backgroundImage = `url('${image}')`;
  button.style.backgroundSize = 'cover';
  button.style.backgroundPosition = 'center';
  button.style.color = 'white';
  setTimeout(() => {
    window.open(link, '_blank'); 
  }, 1500);
}

document.getElementById('facebookBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'fb.jpg', this.href);
});

document.getElementById('twitterBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'twitter.jpg', this.href);
});

document.getElementById('instagramBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'insta.jpg', this.href);
});

document.getElementById('discordBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'dc.jpg', this.href);
});

document.getElementById('tiktokBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'tiktok.jpg', this.href);
});

document.getElementById('telegramBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'tg.jpg', this.href);
});