import React, {useState, useEffect} from 'react';
import PhotoCard from './components/PhotoCard';
import Search from './components/Search';

function Home() {
  const[images,setImages]= useState([]);
  const[isLoading,setIsLoading]= useState(true);
  const[keyword,setKeyword]= useState('');

  useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${keyword}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [keyword]);

  return(
    <div className="Homepage container mx-auto">
        
        <Search searchText={(text) => setKeyword(text)}/>
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32 animate-pulse">Loading...</h1> : <div className="max-w-full grid grid-cols-3 gap-0 pt-24 ml-16">
          {images.map(image=> (
            <PhotoCard key={image.id} image={image}/>
          ))}
        </div>}
    </div>
  );
}

export default Home;