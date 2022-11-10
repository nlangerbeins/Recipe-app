function Recipes ({label, image, cuisineType, source, link}) {

    const labelResult = label.substring(0, 44);

    const sourceBtn = () => {
        const url = {link};
        window.open(url, '_blank');
    }


    return (
        <div className="recipe">
            <div className="recipe_img">
                <img src={image}/>
            </div>
            <div className="recipe_content">
                <p className="recipe_label">{labelResult}</p>
                <p className="cuisine_type">{cuisineType}</p>
                <div className="source_container">
                    <p>Source: </p>
                    <button className="source_btn" onClick={sourceBtn}>{source}</button>
                </div>
            </div> 
        </div>
    )
}

export default Recipes;