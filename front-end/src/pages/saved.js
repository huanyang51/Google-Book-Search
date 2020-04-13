import React, { Component } from "react";
import { List } from "../components/List/index";
import Card from "../components/Card/index";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    this.getBooks();
  }
  getBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch(() => {
        this.setState({
          books: [],
          message: "You did not have any book saved",
        });
      });
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then(() => this.getBooks());
  };

  render() {
    return (
      <div className="container">
        <h5>Saved Books</h5>
        {this.state.books.length ? (
          <List>
            {this.state.books.map((book) => (
              <Card
                key={book._id}
                title={book.title}
                subtitle={book.subtitle}
                link={book.link}
                authors={book.authors}
                image={book.image}
                description={book.description}
                Button={() => (
                  <button
                    onClick={() => this.handleBookDelete(book._id)}
                    className="btn btn-outline-secondary heading-subtitle ml-2"
                  >
                    Delete
                  </button>
                )}
              />
            ))}
          </List>
        ) : (
          <div className="mockup-content">
            <h2 className="brand-title text-center">
              No saved books in your Library
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default Saved;
