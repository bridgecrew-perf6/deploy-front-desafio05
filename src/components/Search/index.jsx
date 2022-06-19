import PersonSearch from "../../assets/person-search.svg";
import Magnifier from "../../assets/magnifier.svg";

function Search() {
    return (
        <div className="search-name">
            <div className="search-centralize">
                <img className="person" src={PersonSearch} alt="" />
                <img className="magnifier"src={Magnifier} />
                <h4>Nenhum resultado foi encontrado!</h4>
                <p>Verifique se escrita está correta</p>
            </div>
        </div>
    )
}

export default Search;