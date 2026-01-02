import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const bookDetails = data.find((book) => book.bookId === bookId);

  return (
    <div className="max-w-5xl mx-auto my-10 p-5">
      <h1 className="text-4xl font-bold text-center mb-10">📚 Book Details</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl border">
        {/* Left: Image */}
        <figure className="lg:w-1/2 p-6 flex justify-center bg-base-200">
          <img src={bookDetails.image} alt={bookDetails.bookName} className="rounded-xl max-h-[420px] object-contain" />
        </figure>

        {/* Right: Content */}
        <div className="card-body lg:w-1/2 space-y-2">
          <h2 className="card-title text-3xl font-semibold">{bookDetails.bookName}</h2>

          <p><span className="font-semibold">Author:</span> {bookDetails.author}</p>
          <p><span className="font-semibold">Publisher:</span> {bookDetails.publisher}</p>
          <p><span className="font-semibold">Year:</span> {bookDetails.year}</p>
          <p><span className="font-semibold">Category:</span> {bookDetails.category}</p>
          <p><span className="font-semibold">Rating:</span> ⭐ {bookDetails.rating}</p>
          <p><span className="font-semibold">Description:</span> {bookDetails.description}</p>

          <div className="card-actions mt-4 flex flex-col md:flex-row gap-3">
            <button className="btn btn-outline btn-primary w-full">Add to Wishlist</button>
            <button className="btn btn-primary w-full">Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
