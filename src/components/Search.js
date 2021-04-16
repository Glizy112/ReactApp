import React, {useState} from 'react';

const Search = ( {searchText} ) => {
    const [text,setText]= useState('');

    const onSubmit =(e)=> {
        e.preventDefault();
        searchText(text);
    }
    return (
            <div className="w-screen pt-12 ml-16">
                <form onSubmit={onSubmit}>
                    <input onChange={e=> setText(e.target.value)} className="h-12 w-7/12 p-4 bg-white bg-opacity-75 inline-block shadow placeholder-gray-800 placeholder-opacity-80 focus:outline-white dark" placeholder='Search photos'/>
                    <button type="submit" className="inline-block text-gray-900 ml-4 focus:outline-white">
                        Search
                    </button>
                </form>
            </div>
    )
}

export default Search
