import { Search, SearchRounded } from "@material-ui/icons";

const SearchInput = ({ ...rest }) => {
    return (
        <div className="flex items-center bg-dark-bg rounded-lg pl-4 color-secondary">
            <SearchRounded  color="inherit" />
            <input className="border-none bg-transparent p-4 w-full h-full outline-none" {...rest} />
        </div>
    )
}

export default SearchInput;