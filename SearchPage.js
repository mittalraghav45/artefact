// import React, { useState } from 'react';

// const SearchPage = () => {
//     const [code, setCode] = useState('');
//     const [storedText, setStoredText] = useState('');

//     const handleCodeChange = (event) => {
//         setCode(event.target.value);
//     };

//     const handleSearch = () => {
//         setStoredText(code); // Store the current value of the search
//         try {
//             eval(code); // Execute the code (be cautious with this)
//         } catch (error) {
//             console.error('Error executing code:', error);
//         }
//     };

//     return (
//         <>
//             <h1>Search Page</h1>
//             <textarea 
//                 placeholder="Type your search here" 
//                 value={code} 
//                 onChange={handleCodeChange} 
//             />
//             <button onClick={handleSearch}>Search</button>

//             <p>Searched for: {storedText}</p> {/* Display the stored search */}
//             <p>Welcome to "Whispers of Pages," a quaint haven for book lovers nestled in the heart of the city. Our bookstore is more than just a place to buy books; it's a sanctuary for the imagination and a hub for community connections. Here, you'll find a carefully curated selection of literature ranging from timeless classics to contemporary masterpieces. Each book on our shelves is chosen with passion and purpose, aiming to inspire, educate, and entertain. Our cozy corners invite you to lose yourself in other worlds, while our knowledgeable staff are always on hand to help you find your next great read. Join us in celebrating the enduring power of stories.</p>
//         </>
//     );
// };

// export default SearchPage;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    let [code, setCode] = useState('');
    const [storedText, setStoredText] = useState('');
 
    const [query, setQuery] = useState('');

    useEffect(() => {
        setQuery(window.location.search.substring(1));
    }, []); 

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const handleSearch = () => {
        setStoredText(code);
        eval(code);
        // Additional search handling logic here
    };

// ------------------
// const SearchPage = () => {
    
// };
// ------------------
if(query){
    code=query;
}
 
    
    return (
        <>
            <h1>Search Page</h1>
            <textarea 
                placeholder="Type your search here" 
                value={code} 
                onChange={handleCodeChange} 
            />
            <button onClick={handleSearch}>Search</button>
            {/* <p>Searched for: {storedText}</p> */}
             <br></br>
             <br></br>
            <p> {query}</p>
        </>
    );
};

export default SearchPage;
