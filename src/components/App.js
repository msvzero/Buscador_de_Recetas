import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import '../styles/index.css';

class App extends Component {
    render(){
        return(
            <div className="App">
                <h3>Recipe Finder</h3>
                <SearchRecipes />
                <RecipeList />
            </div>
        )
    }
}

export default App