import { useState } from "react";
import {data} from './data';
import Buttons from './Buttons';
import Books from './Books';
import imageSix from './find.jpg';


function BookShop(){
    const [books, setBooks] = useState(data)
const chosenBooks = (searchTerm) => {
const newBooks = data.filter(element =>element.searchTerm === searchTerm);
setBooks(newBooks)
}

return (
    <div>
            <div className="container">
            <img src={imageSix} width="350px" alt="find story"/>
            </div>
        <div className='cont'>
        <h2 className='back'>Find Your Perfect Story!  </h2>
            </div>
                <Buttons filteredBooks={chosenBooks} />
                <Books booksToChoose={books}/>
    </div>
);
}
export default BookShop;