import axios from 'axios';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH_KEYWORD';
export const UPDATE_SELECTED_CATEGORIES = 'UPDATE_SELECTED_CATEGORIES';
export const REMOVE_SELECTED_CATEGORY = 'REMOVE_SELECTED_CATEGORY';

//const DB_URL = 'https://us-central1-ageless-domain-161206.cloudfunctions.net/getRecipes';
const DB_URL = 'http://localhost:3090';

export function fetchRecipes() {
  return (dispatch) => {
    axios.get(`${DB_URL}/getRecipes`)
      .then(({ data: { recipes } }) => {
        dispatch({ type: FETCH_RECIPES, payload: recipes });
      })
  }
}

export function updateSearchKeyword(value) {
  return (dispatch) => {
    dispatch({ type: UPDATE_SEARCH_KEYWORD, payload: value });
  }
}

export function updateSelectedCategories(value) {
  return (dispatch) => {
    dispatch({ type: UPDATE_SELECTED_CATEGORIES, payload: value });
  }
}

export function removeSelectedCategory(value) {
  return dispatch => {
    dispatch({ type: REMOVE_SELECTED_CATEGORY, payload: value });
  }
}