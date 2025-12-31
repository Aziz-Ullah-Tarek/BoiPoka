import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import Books from '../components/Books/Books';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const booksData =useLoaderData();
   
    return (
        <div>
            <Banner />
            <Suspense fallback={<p>Loading...</p>}>
               <Books booksData={booksData}></Books>
            </Suspense>
        </div>
    );
};

export default Home;