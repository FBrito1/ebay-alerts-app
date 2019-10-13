/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { FaSpinner, FaSave, FaShoppingCart } from 'react-icons/fa';

import history from '../../services/history';
import Container from '../../components/Container';
import { Form, SubmitButton, Select } from './styles';

export default function NewAlert() {
  const [loading, setLoading] = useState(false);

  return(
    <Container>
      <h1>
        <a onClick={() => history.push('/')}>
          <FaShoppingCart />
          Ebay Alerts
        </a>
      </h1>

      <Form onSubmit={() => {}}>
        <input
          value=''
          type="text"
          placeholder="Type your email ex: email@email.com"
          onChange={() => {}}
        />

        <input
          value=''
          type="text"
          placeholder="Type tour seach phrase ex: iphone"
          onChange={() => {}}
        />

        <Select>
          <option value="2">2</option>
          <option value="10">10</option>
          <option value="30">30</option>
        </Select>

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaSave color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}

