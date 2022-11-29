import video from './1video.mp4';
import icon from './search.png';
import Recipes from './Recipes'; 
import { useEffect, useState } from 'react';
import ProductPage from './ProductPage';


function MainPage() {
    const MY_ID = 'ca8e437b';
    const MY_KEY = '0f59ebd8124b03f77848740e3bab07f4';

    const [mySearch, setMySearch] = useState('');
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState('low-carb');

    useEffect(() => {
        const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data = await response.json();
        console.log(data);
        console.log(data.hits);
        setMyRecipes(data.hits);
        }
        getRecipe()
    }, [wordSubmitted])

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch);
    }

    const searchBtn = () => {
    setWordSubmitted(mySearch);
    }


    return (
        <div>
            <div className='wrapper'>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      <div className='container'>
        <h1>Find your recipe</h1>
      </div>
      <div className='container'>
        <form className='form' onSubmit={formSubmit}>
          <div className='form_input'>
            <img className='icon' src={icon} onClick={searchBtn}/>
            <input onChange={myRecipeSearch} value={mySearch} placeholder='Search 2M+ recipes across the web..'/>
          </div>
        </form>
      </div>
      <div className='recipes_container'>
        {myRecipes.map((element, index) => (
          <Recipes
            key={index}
            id={index+ 1}
            label={element.recipe.label}
            image={element.recipe.image}
            cuisineType={element.recipe.cuisineType}
            source={element.recipe.source}
            link={element.recipe.url}
          />
          ))}
      </div>
    </div>
        </div>
    )
}

export default MainPage;