const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchNum(data.numFound))
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    console.log(docs.length)
    if (docs.length === 0) {

        searchResult.textContent = ` => no result found`;
    }
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `

        <div  class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="image not found">
                <div class="card-body">
                    <h3 class="card-title"> book name :${doc.title}</h3>
                     <h5>author:${doc.author_name}</h5>
                     <P>first:${doc.first_publish_year}</p>
                    <p class="card-text"> </p>
                    <a href="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="btn btn-primary">see the book</a>
                </div>
            </div>

        </div>
            `;
        searchResult.appendChild(div)

    })

}

const displaySearchNum = num => {
    console.log("matching book are:", num)
    const searchNumber = document.getElementById('search-number');
    searchNumber.textContent = `search result are: ${num}`
}