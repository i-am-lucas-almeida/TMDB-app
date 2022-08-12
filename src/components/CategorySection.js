import styles from "../styles/components/CategorySection.module.css";

import { Link } from "react-router-dom";

import { useFetch } from "../hook/useFetch";
import { getCategory } from "../lib/apiLinks";

import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

import ContainerMedia from "./ContainerMedia";
import MediaCard from "./MediaCard";
import MediaTag from "./MediaTag";

const CategorySection = ({ title, type, category }) => {

    const URL = getCategory(1, `${type}/${category}`);

    const { data, error, loading } = useFetch(URL);

    return (

        <div className={styles.category__container}>

            <div className={styles.category__header}>

                <div className={styles.category__header_title}>

                    <h1 className={styles.category__title}>

                        <Link to={`category/${type}/${category}`}>
                            {title}
                        </Link>

                    </h1>

                    <MediaTag
                        type={type}
                    />

                </div>

                <button className={styles.category__button}>

                    <Link to={`category/${type}/${category}`}>
                        Ver mais
                    </Link>

                </button>

            </div>

            {error && <ErrorMessage />}

            {loading && <Loader />}

            {!loading &&

                <ContainerMedia>

                    {data.results && data.results.slice(0, 8).map((item) =>

                        <MediaCard
                            key={item.id}
                            {...item}
                            type={type}
                        />

                    )}

                </ContainerMedia>

            }

        </div>

    );

};

export default CategorySection;