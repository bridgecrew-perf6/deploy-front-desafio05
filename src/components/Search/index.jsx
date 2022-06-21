import Magnifier from "../../assets/magnifier.svg";

function Search() {
    return (
        <div className="search-name">
            <div className="search-centralize">
                <img className="magnifier"src={Magnifier} alt="Resultado não encontrado"/>
            </div>
        </div>
    )
}

export default Search;