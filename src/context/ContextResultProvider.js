import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
// https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100
export const ResultContextProvider = ({children}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // /videos , /images, /search

  const getResults = async (type) => {
    setisLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': "4f8ecfededmsh7ec27f1653939d6p197344jsna370504f98a2"
      }
      // 4f8ecfededmsh7ec27f1653939d6p197344jsna370504f98a2
    }).catch((err)=>{
        console.log(err);
    })
    const data = await response.json();
    console.log(data);
    setResults(data);
    setisLoading(false);
  }
  return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
