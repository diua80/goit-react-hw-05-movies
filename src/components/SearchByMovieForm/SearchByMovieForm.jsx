import css from './SearchByMovieForm';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SearchByMovieForm = ({setSearchParams, searchQuery}) => {
    const inputRef = useRef(null);
    const onSubmitInput = e => {
        e.preventDefault();
        const value = e.target.search.value;
        setSearchParams(
            { query: value, }
        );
        inputRef.current.value = '';
        if (searchQuery === value) {
      return toast.warn("Warning Notification !", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    }

    return(
        <>
            <form className={css.movie_form} onSubmit={onSubmitInput}>
                <div>
                    <input
                        type="text"
                        name="search"
                        required
                        ref={inputRef}
                    />
                    <button className={css.movie_btn} type="submit">search</button>
                </div>
            </form>
            <ToastContainer
                theme="colored"
            />
        </>
    )
}
export default SearchByMovieForm;