import {useState, useEffect} from 'react';
import MediaCardTrending from '../layout/MediaCardTrending';
import '../layout/styles/Trending.css';

export default function Trending() {

    const TRENDINGMEDIA = 'https://api.themoviedb.org/3/trending/all/day?api_key=dea7f3e045b86feae02c7593524b211d';

    const [trending, setTrending] = useState([]);

    useEffect(() => {

        fetch(TRENDINGMEDIA)
            .then((resp) => resp.json())
            .then((data) => {

            setTrending(data.results);

        });

    });

    return(

        <div className="container__items">

            <div className="container__items_wrapper">

                {trending.length > 0 && trending.map((i) => <MediaCardTrending key={i.id} {...i} />)}

            </div>

        </div>

    )

}