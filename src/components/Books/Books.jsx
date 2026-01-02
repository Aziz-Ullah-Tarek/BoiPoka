import React from 'react';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Books = ({ booksData }) => {
  return (
    <div className='my-5'>
      <h2 className='text-3xl font-bold text-center my-8'>
        Available Books: {booksData.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center">
        {booksData.map((singleBook) => (
         <Link to={`/bookdetails/${singleBook.bookId}`} key={singleBook.bookId} className="card w-80 bg-base-100 shadow-xl">
           <div key={singleBook.bookId} className="card bg-base-100 w-96 border-2 border-gray-500 shadow-sm">
            <figure className="px-4 pt-4 bg-gray-100">
              <img
                src={singleBook.image}
                alt={singleBook.bookName}
                className="rounded-xl max-h-[300px] "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2  className="card-title"><MdOutlineDriveFileRenameOutline /> {singleBook.bookName}</h2>
              <p>Author: {singleBook.author}</p>

              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div></Link>
        ))}
      </div>

    </div>
  );
};

export default Books;
