

const Search= ({search, setSearch}) => {
    return <div className='input-container'>
    <input className='search' type="text" 
    value={search} onChange={(e)=>{setSearch(e.target.value)}}>
    </input>
    </div>
}


export default Search;