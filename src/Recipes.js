import { Link } from "react-router-dom";
import './App.css';

function Recipes ({label, image, cuisineType, source, link, id}) {

    const labelResult = label.substring(0, 48);

    return (
        <div className="recipe">
            <div className="recipe_img">
                <Link className="link" to={'/CurrentRecipe/' +id}>
                    <img src={image} alt={label} title={label}/>
                </Link> 
            </div>
            <div className="recipe_content">
                <Link to={'/ProductPage/' +id}>
                    <p className="recipe_label">{labelResult}</p>
                </Link>
                <p className="cuisine_type">{cuisineType}</p>
                <div className="source_container">
                    <p>Source: </p>
                    <button className="source_btn">
                        <a href={link}>{source}</a>
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Recipes;