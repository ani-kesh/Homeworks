const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-book");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

class Book {
  constructor(page = 1, numFound = 0,length = 100) {
    this.page = page;
    this.numFound = numFound;
    this.length = length
  }
  getBook() {
    const bookName = searchInput.value;
    const bookNameForSRCH = bookName.replace(/\s+/gi, "+");
    const url = `http://openlibrary.org/search.json?q=${bookNameForSRCH}&page=${this.page}`;

    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        this.numFound = result.numFound;
        this.drawGrid(result);
      });
  }
  drawGrid(items) {
    const bookGridContainer = document.querySelector("#book-information");
    bookGridContainer.innerText = "";
    if (items.hasOwnProperty("docs")) {
      const titles = ["Title", "Author Name", "First Publish Year", "Subject"];

      const gridContainer = document.createElement("div");
      gridContainer.classList.add("book-grid-container");
      titles.forEach((el) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("book-grid-item");
        gridItem.textContent = el;
        gridContainer.append(gridItem);
      });

      items.docs.reduce((acc, el) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("book-grid-item");
        if (acc === 0) gridItem.textContent = el.title;
        else if (acc === 1) gridItem.textContent = el.author_name;
        else if (acc === 2) gridItem.textContent = el.first_publish_year;
        else if (acc === 3) {
          acc = -1;
          if (el.hasOwnProperty("subject")) {
            let subjects = el.subject
              .filter((elem, index) => index < 5)
              .toString();
            gridItem.textContent = subjects;
          }
        }
        gridContainer.append(gridItem);
        return ++acc;
      }, 0);
      bookGridContainer.append(gridContainer);
      this.paginationText();
      this.paginationVisibility();
    }
  }
  nextPage() {
    if(Math.ceil(this.numFound / this.length) > this.page)
    this.page++;
    this.getBook();
  }
  prevPage() {
    this.page === 1 ? 1 : this.page--;
    this.getBook();
  }
  paginationText() {
    const pagination = document.getElementById("page-number");
    pagination.innerText = this.page;
  }
  paginationVisibility() {
    const pagination = document.getElementById("pagination");
    pagination.style.display = "inline-block";
  }
}

const bookInfo = new Book();

searchButton.addEventListener("click", () => {
  bookInfo.getBook();
});

prev.addEventListener("click", () => {
  bookInfo.prevPage();
});

next.addEventListener("click", () => {
  bookInfo.nextPage();
});
