import { useResource } from "../../hooks/useResource.js";
import BeerCard from "../BeerCard/BeerCard";

import './BeerList.css';

const BeerList = () => {
    const beers = useResource('https://api.punkapi.com/v2/beers');
    return (
        <div className="cards-container">
            {beers?.map((beer) =>
                <BeerCard key={beer.id} beer={beer} />)
            }
        </div>
    )

}

export default BeerList;
