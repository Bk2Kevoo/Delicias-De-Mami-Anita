import React from "react";

function Search({onSearch}) {

    const handleSeach = (e) => {
        onSearch(e.target.value);
    }

    return (
        <div>
            <div className="searchbarinput"></div>
            <input type="text"
            placeholder="Seach"
            onChange={handleSeach}
            ></input>
        </div>
    )
}

export default Search;