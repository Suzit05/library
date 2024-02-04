
const book1 = document.querySelector(".book1")
const book2 = document.querySelector(".book2")
const book3 = document.querySelector(".book3")
const book4 = document.querySelector(".book4")

const btn = document.querySelector(".btn")
const formContainer = document.querySelector(".formContainer")
const submitBtn = document.querySelector(".submitBtn")
const deleteBtn = document.querySelector(".deleteBtn")
const title = document.querySelector(".title").value
const author = document.querySelector(".author").value
const pages = document.querySelector(".pages").value
const myLibrary = [];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;


}

function addBookToLibrary() {

    const book1 = new Book('rich dad poor dad', 'Robert kiyosaki', "494");
    const book2 = new Book('art of seduction ', 'Robert Greene', "354");
    const book3 = new Book('breakout', 'sunil gurjar', "987");

    myLibrary.push(book1)
    myLibrary.push(book2)
    myLibrary.push(book3)
    myLibrary.push(book4)

    console.table(myLibrary)

}




addBookToLibrary()

btn.addEventListener('click', () => {
    if (formContainer.style.display === 'none') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
    console.log('btn clicked')
})

function submitForm() {
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const formdata = {
            title: title,
            author: author,
            pages: pages
        };

        saveFormData(formdata);
        console.log(formdata)
        function saveFormData(formdata) {
            const storedFormData = JSON.parse(localStorage.getItem('formdata')) || [];

            storedFormData.push(formdata);

            localStorage.setItem('formData', JSON.stringify(storedFormData));
        }
        console.log(title)
        book4.innerHTML = `'${title}','${author}',"${pages}"`;
    })
}

submitForm();


function deleteForm() {
    deleteBtn.addEventListener("click", () => {
        console.log("delete")

    })
}

deleteForm();
















