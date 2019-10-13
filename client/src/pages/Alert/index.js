/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaTrash, FaShoppingCart, FaPencilAlt, FaSave } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { AlertList } from './styles';

export default class Alert extends Component {

  state = {
    disabled: true,
  };

  render() {
    const { disabled } = this.state;

    return (
      <Container>
        <h1>
          <FaShoppingCart />
          Ebay Alerts
        </h1>

        <h2>
          email@email.com
        </h2>

        <AlertList>
          <p> Your Alerts</p>
          <li key={String(1)}>
            <input
            disabled={disabled}
            value='xiomi'
            type="text"
            placeholder="Type tour seach phrase ex: iphone"
            onChange={() => {}}
            />
            <button type="button">
              <FaTrash color="#141933" size={14} />
            </button>
            <button>
              {disabled ? (
              <FaPencilAlt color="#141933" size={14} />
              ) : (
              <FaSave color="#141933" size={14} />
              )}
            </button>
          </li>
          <li key={String(1)}>
            <input
            disabled={disabled}
            value='samsung'
            type="text"
            placeholder="Type tour seach phrase ex: iphone"
            onChange={() => {}}
            />
            <button type="button">
              <FaTrash color="#141933" size={14} />
            </button>
            <button>
              {disabled ? (
              <FaPencilAlt color="#141933" size={14} />
              ) : (
              <FaSave color="#141933" size={14} />
              )}
            </button>
          </li>
          <li key={String(1)}>
            <input
            disabled={disabled}
            value='iphone'
            type="text"
            placeholder="Type tour seach phrase ex: iphone"
            onChange={() => {}}
            />
            <button type="button">
              <FaTrash color="#141933" size={14} />
            </button>
            <button>
              {disabled ? (
              <FaPencilAlt color="#141933" size={14} />
              ) : (
              <FaSave color="#141933" size={14} />
              )}
            </button>
          </li>
        </AlertList>
      </Container>
    );
  }
}
