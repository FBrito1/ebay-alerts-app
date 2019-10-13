/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import history from '../../services/history';

import Container from '../../components/Container';
import { Form, SubmitButton, AlertButton } from './styles';

import * as AlertActions from '../../store/modules/alert/actions';

export default function Home() {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  };

  const dispatch = useDispatch();

  function addEmail(e) {
    e.preventDefault();
    dispatch(AlertActions.addEmail(email));
    history.push('/alerts');
  };

  return (
    <Container>
      <h1>
        <a onClick={() => history.push('/')}>
          <FaShoppingCart />
          Ebay Alerts
        </a>
      </h1>

      <Form onSubmit={(e) => addEmail(e)}>
        <input
          value={email}
          type="text"
          placeholder="Type your email address to see your alerts"
          onChange={(e) => handleChange(e)}
        />

        <SubmitButton >
          <FaArrowRight color="#FFF" size={14} />
        </SubmitButton>
      </Form>

      <AlertButton type="button" onClick={() => history.push('/alerts/new')}>
        Create New Alert
      </AlertButton>
    </Container>
  );
};
