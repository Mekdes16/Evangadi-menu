import React, { Component } from 'react';
import SingleFood from './SingleFood'
import menus from '../commonResource/data';
class Foods extends Component {
  render() {
    return (
      <>
        <div class="foods-container">
          {menus.map(function (menu) {
            return (
              <SingleFood
                key={menu.id}
                img={menu.img}
                title={menu.title}
                price={menu.price}
                description={menu.desc}
              />
            );
          })}
        </div>

        {/* <SingleFood
          img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          title="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
          price="5.99"
          desc="Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice."
        /> */}
      </>
    );
  }
}

export default Foods;