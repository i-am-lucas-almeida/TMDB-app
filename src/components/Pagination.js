import styles from "../styles/components/Pagination.module.css";

const Pagination = ({ currentPage, totalPages, setActualPage }) => {

    const MAX_ITEMS = 9;
    const MAX_LEFT = (MAX_ITEMS - 1) / 2;
    const FIRST_PAGE = Math.max(currentPage - MAX_LEFT, 1);

    const numeralPage = (page) => {

        setActualPage((currentPage - currentPage) + page);

    };

    return (

        <>

            <div className={styles.pagination__c}>

                <ul className={styles.pagination__numeral}>

                    {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })

                        .map((_, index) => index + FIRST_PAGE)
                        .map((page, index) => (

                            <li key={index}>

                                <button onClick={() => numeralPage(page)} className={`${styles.button__pagination} ${page === currentPage && styles.button__pagination_active}`}>
                                    {page}
                                </button>

                            </li>

                        ))

                    }

                </ul>

            </div>

        </>

    );
};

export default Pagination;