import React, { Component } from 'react'
import ResultCards from '../components/ResultCards/Index'
import Search from '../components/Search/Index'
import API from '../utils/API'

class Home extends Component {
    state = {
        bookSearch: "",
        books: []
    }

    componentDidMount() {
        this.getBooks("Harry potter")
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }

    getBooks = query => {
        API.getGoogleBooks(query).then(res => this.setState({ books: res.data.items }))
    }

    saveBook = (save) => {
        API.saveBook(save)
            .then(saved => console.log(saved))
            .catch(err => console.log(err))
    }

    handleSave = event => {
        event.preventDefault()
        const chosenBook = this.state.books.filter(book => book.id === event.target.id);
        console.log(chosenBook)
        const savedBook = {
            title: chosenBook.title,
            author: chosenBook.authors,
            image:  chosenBook.thumbnail,
            link:   chosenBook.link,
            description: chosenBook.description
        }    
        this.saveBook(savedBook)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getBooks(this.state.bookSearch)
        this.setState({ bookSearch: "" })
    }

    render() {
        return (
            <>
                <Search value={this.state.bookSearch} name="bookSearch" inputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
                {this.state.books.map(results =>
                    <ResultCards
                        key={results.id}
                        id={results.id}
                        title={results.volumeInfo.title}
                        image={results.volumeInfo.imageLinks.thumbnail}
                        description={results.volumeInfo.description}
                        author={results.volumeInfo.authors}
                        link={results.volumeInfo.infoLink}
                        saveBook={this.handleSave}
                    />)
                }
            </>
        )
    }
}

export default Home