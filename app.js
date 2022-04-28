//https://williamblarkin.github.io/quitter-api/quotes.json//

fetch('https://williamblarkin.github.io/quitter-api/quotes.json')
  .then(res => res.json())
  .then(json => {
    const rand = Math.floor(Math.random() * 23);
    document.getElementById('quoteSection').innerHTML = json[rand].quotes;
    document.getElementById('quoteAuthor').innerHTML = json[rand].author;
    console.log(json[rand].quotes);
    console.log(json[rand].author);
    console.log(rand);
  })

photoArray = [
  "url('photos/1.jpg')",
  "url('photos/2.jpg')",
  "url('photos/3.jpg')",
  "url('photos/4.jpg')",
  "url('photos/5.jpg')",
  "url('photos/6.jpg')",
  "url('photos/7.jpg')"
]

const randPic = Math.floor(Math.random() * 7)
document.body.style.backgroundImage = photoArray[randPic];
