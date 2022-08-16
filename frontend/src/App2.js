import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import routes from "./routes";

const VALUE_FETCHING = "loading..."

const App = () => {
  const [currentValue, setCurrentValue] = useState(VALUE_FETCHING)
  const catchFetchErrors = (err) => err.then(err => {
    console.log(err)
    alert(err)
  })
  useEffect(() => {
    setCurrentValue(VALUE_FETCHING)
    fetch("/api/v1/counter/get")
      .then(resp => resp.ok ? resp.json() : Promise.reject(resp.text()))
      .then(resp => {
        setCurrentValue(resp.value)
      })
      .catch(catchFetchErrors)
  }, [])
  const handleIncreaseCounter = () => {
    setCurrentValue(VALUE_FETCHING)
    fetch("/api/v1/counter/increase", {
      method: "POST"
    })
      .then(resp => resp.ok ? resp.json() : Promise.reject(resp.text()))
      .then(resp => {
        setCurrentValue(resp.value)
      })
      .catch(catchFetchErrors)
  }
    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Container className="pt-3">
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/authentication/sign-in/basic" />} />
      </Routes>
    </Container>
  );
}

export default App;
