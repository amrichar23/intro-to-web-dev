async function loadContent() {
  const pageId = 'The_Black_Keys';
  const response = await fetch(
    'https://en.wikipedia.org/w/api.php?' +
    'action=parse&formatversion=2&format=json&origin=*&page='
    + pageId);
  const json = await response.json();
  const article = json.parse;


  const linksElement = document.getElementById('links');
  for (const link of article.links) {
    const linkElement = document.createElement('a');
    linkElement.href = 'https://en.wikipedia.org/wiki/' + link.title;
    linkElement.innerText = link.title;

    const liElement = document.createElement('li');
    liElement.appendChild(linkElement);
    linksElement.appendChild(liElement);
  }


    loadLanguages(article.langlinks);
    loadIwLinks(article.iwlinks);
    loadImages(article.images);

}

async function loadLanguages(langLinks){

  const linksElement = document.getElementById('languages');

    for (const lang of langLinks) {
      const linkElement = document.createElement('a');
      linkElement.innerText = lang.langname;

      const liElement = document.createElement('li');
      liElement.appendChild(linkElement);
      linksElement.appendChild(liElement);
  }
}

async function loadIwLinks(iwlinks) {

  const linksElement = document.getElementById('iwlinks');

  for (const link of iwlinks) {
      const linkElement = document.createElement('a');
      linkElement.href = 'https://en.wikipedia.org/wiki/' + link.title;
      linkElement.innerText = link.title;

      const liElement = document.createElement('li');
      liElement.appendChild(linkElement);
      linksElement.appendChild(liElement);
    }
}

async function loadImages(images) {
  const imagesContainer = document.getElementById('images');
  for (const image of images) {

    const response = await fetch(
      'https://en.wikipedia.org/w/api.php'
      + '?action=query&prop=imageinfo&iiprop=url&format=json&formatversion=2&origin=*'
      + '&titles=Image:' + image );
      const json = await response.json();

      const imageUrl = json.query.pages[0].imageinfo[0].url;

      
      if (imageUrl.endsWith('.ogg')
          || imageUrl.endsWith('.tiff')
          || imageUrl.endsWith('.webm')
          || imageUrl.endsWith('.ogv')) {
        continue;
      }

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imagesContainer.appendChild(imageElement);
  }
}
