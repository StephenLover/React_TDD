import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';

export default class RestaurantListPage extends Component {
  render() {
    return (
      <div>
        <button data-test="addRestaurantButton">
          Add Restaurant
        </button>
        <NewRestaurantForm />
      </div>
    );
  }
}
