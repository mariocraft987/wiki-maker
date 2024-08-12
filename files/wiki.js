function makeWiki() {
  document.getElementById('output').innerHTML = wikiContent();
}

function wikiContent(title, text, images) {
  let wiki = '<a href="https://mariocraft987.github.io/wiki-maker/"><img src="https://mariocraft987.github.io/wiki-maker/files/title.svg"></a>';
  wiki += '<div style="translate: 8px -8px;"><input placeholder="Search WikiMaker"><button>Search</button></div>';
  return wiki;
}
