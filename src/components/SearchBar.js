import React, { useState } from "react";

const SearchBar = ({setQuery}) => {
  const [keyword, setKeyword] = useState("");
  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };
  const submitHandler = (e) => {
      e.preventDefault();
      setQuery(keyword);
      setKeyword('');
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="type bookname, author, subject..."
          value={keyword}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default SearchBar;
