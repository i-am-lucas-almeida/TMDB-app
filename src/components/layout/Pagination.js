import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, setActualPage }) => {

    const MAX_ITEMS = 9;
    const MAX_LEFT = (MAX_ITEMS - 1) / 2;
    const FIRST_PAGE = Math.max(currentPage - MAX_LEFT, 1);

    const numeralPage = (page) => {

        setActualPage((currentPage - currentPage) + page);

    }

    return (

        <>

            <div className="pagination__c">

                <ul className='pagination__numeral'>

                    {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })

                        .map((_, index) => index + FIRST_PAGE)
                        .map((page, index) => (

                            <li key={index}>

                                <button onClick={() => numeralPage(page)} className={`button__pagination ${page === currentPage && 'button__pagination--active'}`}>
                                    {page}
                                </button>

                            </li>

                        ))

                    }

                </ul>

            </div>

        </>

    );
}

export default Pagination;