API = {
    getBooks: () => {
        return $.ajax({
            url: "/search",
            method: "GET"
        })
    },
    saveBook: (title, author, description, image, link) => {
        return $.ajax({
            url: "/api/books",
            method: "POST",
            data: {
                title: title,
                author: author,
                description: description,
                image: image,
                link: link
              }
        })
    },
    getSavedBooks: () => {
        return $.ajax({
            url: "/api/books",
            method: "GET"
        })
    },
    deleteBook: id => {
        return $.ajax({
            url: "/api/books/" + id,
            method: "DELETE"
        })
    },
    updateBook: id => {
        return $.ajax({
            url:"/api/books/" + id,
            method: "PUT"
        })
    }
}

export default API;