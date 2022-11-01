import React, { useState } from "react";
import { STUDENTS } from "./studentsList";

import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import checkValidity from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";

const title = "Tizeti";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);

  const searchName = (searchValue) => {
    setSearchInput(searchValue);
  };

  const onAdd = (checkValidity) => {
    const getStudentByName = STUDENTS.find(
      (student) => student.name.toLowerCase() === searchInput.toLowerCase()
    );
    if (!getStudentByName) {
      setError(`Sorry, ${searchInput} is not a verified student!`);
      return setHasError(true);
    }
    const isValid = checkValidity(date, getStudentByName.validityDate);
    if (!isValid) {
      setError(`Sorry, ${searchInput}'s validity has Expired!`);
      return setHasError(true);
    }
    setFilteredResults((prev) => [...prev, getStudentByName]);
  };
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search onAdd={onAdd} search={searchName} date={setDate} />
        {hasError && <Error error={error}/>}
        <ResidentsList filteredResults={filteredResults} />
      </div>
    </div>
  );
}

export default App;
