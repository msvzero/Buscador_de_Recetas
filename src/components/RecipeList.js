import React,  { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';


class RecipeList extends Component {
    render() {
        return(
            <div>
                <h4><Link to='/favorites'>Favorite</Link></h4>
                {
                  this.props.recipes.map((recipe, index) => {
                      return(
                          <RecipeItem key={index} recipe={recipe} favoriteButton={true} />
                      )
                  })
                }
            </div>
        )
    }
}

export default connect((state) => {
    return {
        recipes: state.recipes
    }}, null)(RecipeList);