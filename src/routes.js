import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RecipesIndex from './components/recipes_index';
import RecipesShow from './components/recipes_show'
import RecipesShowSearch from './components/recipes_show_search';
import RecipesShowSuggest from './components/recipes-show-suggest';

export default (
  <Route path='/' component={ App } >
    <IndexRoute component={ RecipesIndex } />
    <Route path='/recipes/:_id' component={ RecipesShow } />
    <Route path='/search' component={ RecipesShowSearch } />
    <Route path='/suggest' component={ RecipesShowSuggest } />
  </Route>
);