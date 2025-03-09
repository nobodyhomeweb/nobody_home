// similiarity_script.js

let currentPageIndex = 0; // Index of the leftmost page currently visible
let totalPages = 0;

function createBook() {
  const bookContainer = document.getElementById('book-container');
  
  // Clear any existing content
  bookContainer.innerHTML = "";
  
  // 'pages' is a global variable set by the embedded script in the HTML.
  // Each item is an object: { type: 'image', imageUrl: '...' } or { type: 'text', text: '...' }.
  pages.forEach(pageData => {
    const pageDiv = createPageElement(pageData);
    bookContainer.appendChild(pageDiv);
  });
  
  totalPages = pages.length;
  // Set container width to totalPages * 50vw
  bookContainer.style.width = (totalPages * 50) + "vw";
}

function createPageElement(pageData) {
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('page');
  
  if (pageData.type === 'image') {
    const img = document.createElement('img');
    img.src = pageData.imageUrl || "";
    pageDiv.appendChild(img);
  } else {
    const textDiv = document.createElement('div');
    textDiv.classList.add('text-content');
    textDiv.textContent = pageData.text;
    pageDiv.appendChild(textDiv);
  }
  
  return pageDiv;
}

function nextPage() {
  // Ensure we leave at least two pages visible.
  if (currentPageIndex < totalPages - 2) {
    currentPageIndex++;
    slideBook();
  }
}

function prevPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    slideBook();
  }
}

function slideBook() {
  const bookContainer = document.getElementById('book-container');
  // Each page occupies 50vw, so shift by 50vw for each page index
  const offset = -currentPageIndex * 50;
  bookContainer.style.transform = `translateX(${offset}vw)`;
}

document.addEventListener('DOMContentLoaded', createBook);
