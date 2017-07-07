import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

class RecipesCarousel extends Component {
  renderImages() {
    return (
      this.props.all_recipes.map((recipe) => {
        return (
          <div key={ recipe._id }>
            <img src={ recipe.img } alt={ recipe.title } />
            <p className="legend">{ recipe.title }</p>
          </div>
        );
      })
    );
  }

  render() {
    const settings = {
      showArrows: true,
      showThumbs: false
    };

    return (
      <section className="page-section">
        <div className="container h-100">
          <div className="row h-100">
            <Carousel { ...settings }>
              { this.renderImages() }
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { all_recipes: state.recipes.all_recipes }
}

export default connect(mapStateToProps)(RecipesCarousel);