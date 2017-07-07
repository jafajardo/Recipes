import React from 'react';
import RecipesList from './recipes_list';
import RecipesCarousel from './recipes_carousel';
import RecipesSearch from './recipes_search';
import RecipesHeader from './recipes_header';
import RecipesSuggest from './recipes-suggest';

function RecipesIndex(props) {
  return (
    <div>
      <RecipesHeader />
      <RecipesSearch />
      {/*<RecipesCarousel />*/}
      <RecipesSuggest />
      <RecipesList />
    </div>
  );
}

export default RecipesIndex;