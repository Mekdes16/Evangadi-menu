import React, { Component } from 'react'
class FoodItem extends Component {
  render() {
    const { img, title, price, description } = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={img} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">
          {/* {description} */}
          {String(description).substring(0,250) + ' . . .'}
        </div>
        <div className= "read-more-holder">
          <button className= "readMore-btn">Read More</button>
        </div>
      </div>
    );
  }
}

export default FoodItem;