const SearchBar = ({ setFilter }) => {
    return (
        <div className=" my-2 flex justify-center ">
            <input
                type="text"
                className=" w-3/4  appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Filter"
                onChange={(event) => {
                    setFilter(event.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar
