document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "Code Breaker", author: "Walter Isaacson" },
        { title: "Welcome Home", author: "Najwa Zebian" },
        { title: "Atlas of the Heart", author: "Brene Brown" },
        { title: "A Mind at Play", author: "Rob Goodman, Jimmy Soni" },
        { title: "The Murder Bot Series", author: "Martha Wells" },
        { title: "Man's Search for Meaning", author: "Victor E Frankl" },
        { title: "The Bastard Brigade", author: "Sam Kean" },
        { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot" },
        { title: "Steve Jobs", author: "Walter Isaacson" },
        { title: "The Nightingale", author: "Kristin Hannah" },
        { title: "Educated", author: "Tara Westover" },
        { title: "The Stranger", author: "Albert Camus" },
        { title: "The Alchemist", author: "Paulo Coelho" },
        { title: "The Giver", author: "Lois Lowry" },
        { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin" },
        { title: "American Kingpin", author: "Nick Bilton" },
        { title: "The Boy Who Harnassed the Wind", author: "William Kamkwamba" },
        { title: "Range", author: "David Epstein" },
        { title: "Just Mercy", author: "Bryan Stevenson" },
        { title: "A Place Called Home", author: "David Ambroz" },
        { title: "Marked for Life", author: "Isaac Wright, Jr." },
        { title: "Acceptance", author: "Emi Nietfeld" },
        { title: "Einstein", author: "Walter Isaacson" },
        { title: "The Other Einstein", author: "Marie Benedict" },
        { title: "Ada Lovelace, The Making of a Computer Scientist", author: "Christopher Hollings, Ursula Martin" }
        // ... add other books as needed
      ];


    const bookListElement = document.getElementById('bookList');

    books.forEach((book, index) => {
      const hyphenTitle = book.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="book">
          <span class="book-title">${book.title}</span><br>
          <span class="author-name">${book.author}</span>
        </div>
        <div class="rating" data-book="${hyphenTitle}">
          ${[1, 2, 3, 4, 5].map(value => `<span class="star" data-value="${value}">&#9733;</span>`).join('')}
        </div>
        <span class="rating-output" id="rating-output-${index}"></span>
      `;
      bookListElement.appendChild(listItem);

      // Now add the event listeners to these stars
      listItem.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
          this.parentNode.querySelectorAll('.star').forEach(s => {
            s.style.color = s.dataset.value <= this.dataset.value ? 'gold' : 'grey';
          });
          document.getElementById(`rating-output-${index}`).textContent = `You rated this ${this.dataset.value} out of 5.`;
        });
      });
    });
  });
