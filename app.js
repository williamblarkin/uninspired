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