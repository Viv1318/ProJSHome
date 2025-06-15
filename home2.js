// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  constructor(books) {
    let uniqueBooks = new Set(books);
    if (uniqueBooks.size !== books.length) {
      throw new Error("Массив книг содержит дубликаты!");
    }

    this.#books = Array.from(uniqueBooks);
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже есть в библиотеке");
    }
    this.#books.push(title);
    return this.#books;
  }

  removeBook(titleToRemove) {
    if (!this.#books.includes(titleToRemove)) {
      throw new Error("Книги с таким названием нет в библиотеке");
    }

    const index = this.#books.indexOf(titleToRemove); 
    if (index !== -1) {
      this.#books.splice(index, 1); 
    }
  }
  
  hasBook(title) {
    if (this.#books.includes(title)) {
      console.log(`Книга "${title}" есть в библиотеке`);
    } else {
      console.log(`Книги "${title}" нет в библиотеке`);
    }
  }
 
  get allBooks() {
    return this.#books;
  }
}
//Проверка

// const books0 = [  "Игра престолов", "Гарри Поттер", "Гарри Поттер", "Властелин колец"]; // Дубликат
// const library0 = new Library(books0); //Ошибка: Массив книг содержит дубликаты!

const books1 = ["Игра престолов", "Гарри Поттер", "Властелин колец"];
const library1 = new Library(books1);
console.log(library1.allBooks); // ['Игра престолов', 'Гарри Поттер', 'Властелин колец']

library1.addBook("Преступление и наказание");
console.log(library1.allBooks); // ['Игра престолов', 'Гарри Поттер', 'Властелин колец', 'Преступление и наказание']

// library1.addBook("Преступление и наказание");
// console.log(library1.allBooks); // Ошибка: Книга с таким названием уже есть в библиотеке

library1.removeBook("Гарри Поттер");
console.log(library1.allBooks); // ['Игра престолов', 'Властелин колец', 'Преступление и наказание']

// library1.removeBook("Гарри Поттер");
// console.log(library1.allBooks); // Ошибка: Книги с таким названием нет в библиотеке

library1.hasBook("Преступление и наказание");


// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

    
    const addButton = document.querySelector('.button');
    addButton.addEventListener('click', () => {
        const commentInput = document.getElementById("commentInput");
      const enteredValue = commentInput.value;
      try {
        if (enteredValue.length <= 50 || enteredValue.length >= 500) {
          throw new Error("Неподходящая длина отзыва.");
        } 
        
        const outputContainer = document.getElementById('output-container');
        const comment = document.createElement('p'); 
        comment.classList.add('comment');  
       
        comment.textContent = enteredValue; 
        outputContainer.appendChild(comment); 
        commentInput.value = ''; 
  
      } catch (error) {
        console.error("Ошибка:", error.message);
      }
    });
