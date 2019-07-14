import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-test="newRestaurantName"
        />

        <button
          data-test="saveNewRestaurantButton"
        >
          Save
        </button>
      </div>
    );
  }
}
