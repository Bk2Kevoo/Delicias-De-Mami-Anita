function SortByRating({ handleSort, sort }) {
    return (
        <div>
            <input 
                type="checkbox"
                id="sort"
                name="sort"
                onChange={handleSort} // Changed to onChange
                checked={sort} 
            />
            <label htmlFor="sort">Sort By Rating</label> {/* Updated htmlFor to match the id */}
        </div>
    );
}

export default SortByRating;
