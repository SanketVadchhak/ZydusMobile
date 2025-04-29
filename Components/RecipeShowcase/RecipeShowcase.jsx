import React from "react";
import "../../Styles/RecipeShowcase.css";
import Pasta from "../../assets/sauce-Pasta.WEBP";
import Chawal from "../../assets/rajma-chawal.WEBP";
import Dosa from "../../assets/masala-dosa.WEBP";
import Book from "../../assets/recipe-book.WEBP";

const RecipeShowcase = () => {
  const recipes = [
    {
      id: 1,
      title: "Kidney friendly white sauce pasta",
      description:
        "A creamy and delicious white sauce pasta made with kidney-safe ingredients. Low in sodium, rich in flavor!",
      thumbnail: Pasta,
    },
    {
      id: 2,
      title: "Kidney friendly rajma chawal",
      description:
        "A nutritious twist on the classic rajma chawal, packed with plant-based protein and lower potassium alternatives.",
      thumbnail: Chawal,
    },
    {
      id: 3,
      title: "Kidney friendly masala dosa",
      description:
        "A crispy, golden masala dosa with a filling that's easy on the kidneys and full of authentic flavors.",
      thumbnail: Dosa,
    },
  ];

  return (
    <section className="recipe-showcase">
      <section className="recipe-showcase-top">
        <h1>
          Flavours That Care – <span>Vikas Khanna</span>'s CKD Recipes
        </h1>
        <p className="subtitle">
          Celebrity Chef Vikas Khanna brings you kidney-friendly recipes that
          are both delicious and healthy. Watch exclusive videos and explore his
          special cookbook!
        </p>
      </section>

      <section className="recipe-showcase-middel">
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card-image">
                <img src={recipe.thumbnail} alt={recipe.title} />
              </div>
              <div className="card-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="cook-book">
        <div className="cookbook-card">
          <div className="cookbook-image">
            <img src={Book} alt="Kidney Friendly Cookbook" />
          </div>
          <h2 className="cookbook-title">My kidney friendly cook book</h2>
          <p className="cookbook-description">
            "Great food is not just about taste—it’s about nourishing your body
            and soul. These kidney-friendly recipes make healthy eating
            effortless and delicious."
          </p>
          <button className="download-button">Download Now →</button>
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;
