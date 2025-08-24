// Set the <html> element `lang` property
const html = document.querySelector("html");
html.lang = "en";

// Set `dir="ltr"` for the <html> element
html.dir = "ltr";

// Set <meta name="viewport" content="width=device-width, initial-scale=1" />
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.querySelector("head").appendChild(metaViewport);

// Set `title` for the <html> element based on a webpage's content
const title = document.querySelector("h1");
document.title = title.textContent.replace(" 🥁", "").trim();

// Insert <meta name="author" content="Vladislav Kazantsev">
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

// Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

// Insert <link rel="stylesheet" type="text/css" href="styles/style-min.css">
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);
linkStyle.onload = function () {
  document.body.style.display = "block";
};

// Insert <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Arvo">
const linkFont = document.createElement("link");
linkFont.rel = "stylesheet";
linkFont.type = "text/css";
linkFont.href = "https://fonts.googleapis.com/css?family=Arvo";
document.querySelector("head").appendChild(linkFont);

// Insert <link rel="icon" href="pics/logos/logo.svg">
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/images/logo.svg";
document.querySelector("head").appendChild(linkImage);

// Set `type="text/javascript"` for all <script> elements for better compatibility
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

// Insert <meta http-equiv="Pragma" content="no-cache">
// var metaPragma = document.createElement("meta");
// metaPragma.httpEquiv = "Pragma";
// metaPragma.content = "no-cache";
// document.querySelector("head").appendChild(metaPragma);
