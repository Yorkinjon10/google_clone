import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import {useResultContext} from '../context/ContextResultProvider'
import { Loading } from './Loading'
export const Results = () => {
  const { getResults, results, isLoading, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    getResults('/search/q=Javascript Mastery&num=40');
  }, []);

  if (isLoading) return <Loading />
  
  console.log(location.pathname);
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {results?.results ? /.map(({link, title})=>{
            
          })} */}
        </div>
      );
    case '/images':
      return 'IMAGES';
    case '/videos':
      return 'VIDEOS';
    case '/news':
      return 'NEWS';
      
    default:
      return "ERROR";
  }

}
