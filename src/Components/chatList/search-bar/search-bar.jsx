import mg from './images/mG.svg'
import fs from "./images/fS.svg";
import './search-bar.css'


const SearchBar = () => {
    return (
      <>
        <div className="searchbar">
          <div className="mg-search">
            <img className='mg' src={mg} alt="mg" />
            <p className="search">Search</p>
          </div>

          <div className='fs'>
            <img src={fs} alt="fc" />
          </div>
        </div>
      </>
    );
}

export default SearchBar