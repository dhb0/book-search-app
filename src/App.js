import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CardDisplayArea from "./components/CardDisplayArea"
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(()=>{
      if(query!==''){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response=>setBooks(response.data.items.map(item=>item.volumeInfo)))
      }
  },[query])

  return (
    <div>
      <h1 className="main-header">Book Finder App</h1>
      <SearchBar setQuery={setQuery} />
      <CardDisplayArea books={books} />
    </div>
  );
};

export default App;
