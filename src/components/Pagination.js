import styles from "../styles/components/Pagination.module.css";

import {
    HiOutlineChevronDoubleRight,
    HiOutlineChevronDoubleLeft
} from "react-icons/hi";

const Pagination = ({ currentPage, totalPages, setActualPage }) => {

    const MAX_ITEMS = 5;
    const MAX_LEFT = (MAX_ITEMS - 1) / 2;
    const FIRST_PAGE = Math.max(currentPage - MAX_LEFT, 1);

    const numeralPage = (page) => {

        setActualPage((currentPage - currentPage) + page);

    };

    const nextPage = () => {

        setActualPage(currentPage + 1);

    };

    const prevPage = () => {

        setActualPage(currentPage - 1);

    };

    return (

        <>

            {totalPages > 1 &&

                <div className={styles.pagination__c}>

                    <ul className={styles.pagination__numeral}>

                        {
                            currentPage > 1 &&

                            <li title="Anterior">
                                <button
                                    className={`${styles.button__pagination} ${styles.button__arrow}`}
                                    onClick={prevPage}>

                                    <HiOutlineChevronDoubleLeft />

                                </button>
                            </li>
                        }

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

                        {
                            totalPages !== currentPage &&

                            <li title="Próxima">
                                <button
                                    className={`${styles.button__pagination} ${styles.button__arrow}`}
                                    onClick={nextPage}>

                                    <HiOutlineChevronDoubleRight />

                                </button>
                            </li>
                        }

                    </ul>

                </div>

            }

        </>

    );
};

export default Pagination;