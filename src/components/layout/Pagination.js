import './styles/Pagination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ totalPages, currentPage, setActualPage }) => {

    const prevPage = () => {

        if(currentPage > 1) {

            setActualPage(currentPage - 1);

        }

    }

    const nextPage = () => {

        if(currentPage < totalPages) {

            setActualPage(currentPage + 1);

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