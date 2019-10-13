/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { FaSpinner, FaSave, FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

import history from '../../services/history';
import Container from '../../components/Container';
import { Form, SubmitButton, Select } from './styles';
import api from '../../services/api';

export default function NewAlert() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectOption, setSelectOption] = useState(2);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  };

  function handleChangeSearchPhrase(e) {
    setSearchPhrase(e.target.value);
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  };

  function handleSelect(e) {
    setSelectOption(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const postData = {
      searchPhrase,
      userEmail: email,
      notificationSchedule: Number(selectOption),
    }

    try {
      const result = await api.post('/alerts', postData);
      console.log('result', result.data);
      toast.success('Alert Saved');
      history.push('/');
    } catch (e) {
      toast.error(`Error: ${e.response.data.error}`);
    };

    setLoading(false)

  };

  return(
    <Container>
      <h1>
        <a onClick={() => history.push('/')}>
          <FaShoppingCart />
          Ebay Alerts
        </a>
      </h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={email}
          type="text"
          placeholder="Type your email ex: email@email.com"
          onChange={(e) => handleChangeEmail(e)}
        />

        <input
          value={searchPhrase}
          type="text"
          placeholder="Type tour seach phrase ex: iphone"
          onChange={(e) => handleChangeSearchPhrase(e)}
        />

        <Select value={selectOption} onChange={(e) => handleSelect(e)}>
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

