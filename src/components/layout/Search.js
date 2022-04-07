import ImageSearch from '../../assets/icon-search.svg';
import './styles/Search.css';

export default function Search({placeholder_category, name_category, event_submit, event_change, search_value}) {

    return(

        <form onSubmit={event_submit} className='form__container'>

            <img src={ImageSearch} alt='icon search' className='search__icon' />

            <input type='search' name={name_category} className='search__input' placeholder={placeholder_category} onChange={event_change} value={search_value} />

        </form>

    )

}