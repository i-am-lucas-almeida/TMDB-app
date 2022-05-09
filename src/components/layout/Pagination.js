import './styles/Pagination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ setPage, totalPages, currentPage, page}) => {

    const nextPage = () => {

        if (currentPage < totalPages) {

            setPage(page + 1);

        }

    }

    const prevPage = () => {

        if (currentPage > 1) {

            setPage(page - 1);

        }

    }

    return (

        <>

            <div className="pagination__c">

                <button onClick={prevPage} className='btn-prev'>
                    <FaArrowLeft />
                </button>

                <p className='pagination__info'>{`Página ${currentPage} de ${totalPages}`}</p>

                <button onClick={nextPage} className='btn-next'>
                    <FaArrowRight />
                </button>

            </div>

        </>

    );
}

export default Pagination;