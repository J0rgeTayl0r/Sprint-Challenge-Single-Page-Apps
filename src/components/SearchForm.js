import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function SearchForm(props) {
 const {characters, page, setPage} = props;
 const [searchTerms, setSearchTerm]= useState("");
 const [searchResult, setSearchResults] = useState([]);
 const handleChange = event =>{
   setSearchTerm(event.target.value)
 }
 useEffect(()=>{
   axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerms}&page=${page}`)
   .then(response=>{
   setSearchResults(response.data.results)
   if(page< 1){
     setPage(response.data.info.page-1);
    }else if(page > response.data.info.pages-1){
      setPage(1);
    }
 })
}, [characters, setPage, page , searchTerms]);


  return (
    <section className="search-form">
    Search Characters By Name: 

     <input
        type="text"
        placeholder="Enter Name"
        value={searchTerms}
        onChange={handleChange}
      />
      <div className="characters">
      {searchResult.map(character => {
        return <CharacterCard key={character.id} character={character}/>
      })}
      </div>
    </section>
  );
}
