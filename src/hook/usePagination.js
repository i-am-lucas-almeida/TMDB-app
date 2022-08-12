import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import qs from "query-string";

export default function usePagination() {

    const location = useLocation();
    const navigate = useNavigate();

    function getActualPage() {

        const queryParams = qs.parse(location.search);
        const page = queryParams.page;

        return page ? Number(page) : undefined;

    }

    const [actualPage, setActualPage] = useState(

        getActualPage() || 1

    );

    useEffect(() => {

        const queryParams = qs.parse(location.search);

        navigate({

            search: qs.stringify({
                ...queryParams,
                page: actualPage
            })

        });

    }, [actualPage, navigate, location.search]);

    return { setActualPage, actualPage };

}