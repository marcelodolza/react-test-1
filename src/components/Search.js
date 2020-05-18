import React, { useEffect, useRef } from 'react';

const Search = props => {
    const InputSearch = useRef(null);

    useEffect(() => {
        InputSearch.current.focus();
    }, []);

    return(<input type="search" {...props} ref={InputSearch} className="InputSearch" />)
}

export default Search