/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { Form, SubmitButton, List, AlertButton } from './styles';

export default class Main extends Component {

  state = {
    repositories: [
      {
        name: 'teste1',
      },
      {
        name: 'teste1',
      }
    ],
    loading: false,
  };

  render() {
    const { repositories, loading } = this.state;

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
          Create Alert
        </AlertButton>
      </Container>
    );
  }
}
