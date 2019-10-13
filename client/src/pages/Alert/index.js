/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaTrash, FaShoppingCart, FaPencilAlt, FaSave } from 'react-icons/fa';

import history from '../../services/history';
import Container from '../../components/Container';
import { AlertList } from './styles';

export default function Alert() {
  const [disabled, setDisabled] = useState(true);
  const userEmail = useSelector(state => state.alert.userEmail);

  return (
    <Container>
      <h1>
        <a onClick={() => history.push('/')}>
          <FaShoppingCart />
          Ebay Alerts
        </a>
      </h1>

      {
        userEmail ?
        (
        <>
          <h2>
            {userEmail}
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
            <li key={String(2)}>
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
            <li key={String(3)}>
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
        </>
        ) : (
          <>
          <br />
           <h1>You dont have alerts</h1>
          </>
        )
      }
    </Container>
  );
};
