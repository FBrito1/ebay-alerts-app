/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';
import Container from '../../components/Container';
import { AlertList } from './styles';

export default function Alert() {
  const [alerts, setAlerts] = useState([]);
  const userEmail = useSelector(state => state.alert.userEmail);


  async function loadAlerts() {
    const response = await api.get('/alerts', {
      headers: {
        email: userEmail,
      }
    });

    setAlerts(response.data);
  };

  useEffect(() => {
    loadAlerts();
  }, [alerts]);

  async function handleRemove(id) {
    try {
      await api.delete(`/alerts/${id}`, {
        headers: {
          email: userEmail,
        }
      });
      toast.success('Alert Deleted');
      loadAlerts();
    } catch(e) {
      toast.error(`Error: ${e.response.data.error}`);
    };
  };

  return (
    <Container>
      <h1>
        <a onClick={() => history.push('/')}>
          <FaShoppingCart />
          Ebay Alerts
        </a>
      </h1>

      {
        userEmail && alerts.length > 0 ?
        (
        <>
          <h2>
            {userEmail}
          </h2>

          <AlertList>
            <p> Your Alerts</p>
            { alerts.map(alert => (
                <li key={alert._id}>
                <input
                disabled={true}
                value={alert.search_phrase}
                type="text"
                />
                <button onClick={() => handleRemove(alert._id)} type="button">
                  <FaTrash color="#141933" size={14} />
                </button>
              </li>
            )) }
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
