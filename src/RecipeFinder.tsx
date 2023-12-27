import { useEffect, useState } from "react";
import axios from "axios";

const RecipeFinder = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  interface Recipe {
    idMeal: number;
    strMealThumb: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strYoutube: string;
    strTags: string;
    strIngredient1: string;
    strMeasurement1: string;
    strInstructions: string;
  }


  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`
      )
      .then((response) => {
        setRecipe(response.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchRecipe]);

  const handleMeal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const getRecipe = (searchValue: string) => {
    setSearchRecipe(searchValue);
    if (searchRecipe !== "") {
      const filteredData =
        recipe &&
        recipe.filter((item: any) => {
          return item.strMeal
            .toLowerCase()
            .includes(searchRecipe.toLowerCase());
        });
      setRecipe(filteredData);
    } else {
      setRecipe([]);
    }
  };
  console.log("recipe", recipe);

  return (
    <div className="meals-container">
      <input
        type="text"
        className="search"
        placeholder="Search recipe..."
        onChange={(e) => getRecipe(e.target.value)}
      />
      <div className="recipes">
        {searchRecipe &&
          recipe &&
          recipe.map((rec: any) => (
            <div key={rec.idMeal} onClick={() => handleMeal(rec)}>
              {!selectedRecipe && (
                <div className="meals">
                  <img src={rec.strMealThumb} alt="Recipe" id="meal-image" />
                  <div className="meal">
                    <p className="meal-name">{rec.strMeal}</p>
                    <p>
                      {rec.strCategory} &nbsp; {rec.strArea}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        {selectedRecipe && (
          <div>
            <p className="meal-name">{selectedRecipe.strMeal}</p>
            <iframe src={selectedRecipe.strYoutube} className="video" title="youtube"></iframe>
            <div>
              <span>{selectedRecipe.strArea}</span>
              <span>{selectedRecipe.strCategory}</span>
              <span>{selectedRecipe.strTags}</span>
            </div>
            <div className="recipe-details">
              <table>
                <tr>
                  <th>Ingredients</th>
                  <th>Measurements</th>
                </tr>
                <tr>
                  <td>{selectedRecipe.strIngredient1}</td>
                  <td>{selectedRecipe.strMeasurement1}</td>
                </tr>
              </table>
              <span>{selectedRecipe.strInstructions}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeFinder;
