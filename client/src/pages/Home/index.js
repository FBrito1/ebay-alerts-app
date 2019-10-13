/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { FaSpinner, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { Form, SubmitButton, AlertButton } from './styles';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <h1>
        <FaShoppingCart />
        Ebay Alerts
      </h1>

      <Form onSubmit={() => {}}>
        <input
          value=''
          type="text"
          placeholder="Type your email address to see your alerts"
          onChange={() => {}}
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaArrowRight color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <AlertButton>
        Create New Alert
      </AlertButton>
    </Container>
  );
};
