import React, {useState} from "react";
import './BookContainer.css'
import BookItem from "../BookItem/BookItem";


const BookContainer = (props) => {

  function useLocalstorage(localItem) {
    const [loc, setState] = useState(JSON.parse(localStorage.getItem(localItem)));

    function setLoc(newItem) {
      localStorage.setItem(localItem, JSON.stringify(newItem));
      setState(newItem);
    }
    return [loc, setLoc];
  }

  const [books, setBooks] = useLocalstorage('myList');

  const handleAddButton = (event) => {
    props.books.forEach(item => {
      let arr =[...books];
      if (event.target.id === item.id) {
        let filtered = arr.filter(i => i.id !== item.id);
        filtered.push(item);
        setBooks(filtered);
      }
    })
  };

  const handleRemoveButton = (event) => {
    let current = event.target.id;
    let localItems = JSON.parse(localStorage.getItem('myList'));
    let filtered = localItems.filter(item => {
      return current !== item.id;
    });
    setBooks(filtered);
  };

  return (
      <div className="content">
        <div className="book-container">
          {
            props.books.map((book) => {
              return <BookItem
                  key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                  description={cutter(book.volumeInfo.description)}
                  publishedDate={formatDate(book.volumeInfo.publishedDate)}
                  authors={separateAuthors(book.volumeInfo.authors)}
                  handleAddButton={handleAddButton}
                  state={true}
              />
            })
          }
        </div>
        <div className="book-container">
          {
            books.map((book) => {
              return <BookItem
                  key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                  description={cutter(book.volumeInfo.description)}
                  publishedDate={formatDate(book.volumeInfo.publishedDate)}
                  authors={separateAuthors(book.volumeInfo.authors)}
                  handleRemoveButton={handleRemoveButton}
                  state={false}
              />
            })
          }
        </div>
      </div>
  );
};

const cutter = (str) => {
  if(str) {
    return str.length > 200 ?  str.slice(0, 200) + '...' : str;
  }
};

const separateAuthors = (arr) => {
  if(arr) {
    return arr.length > 1 ? arr.toString() : arr;
  } else {
    return 'Any authors, sorry';
  }
};

const formatDate = (date) => {
  if (date === undefined) {
    return 'Any date, sorry';
  }

  let newData = new Date(date);
  return newData.getDate() + '.' + (newData.getMonth() + 1) + '.' + newData.getFullYear();
};


export default BookContainer;