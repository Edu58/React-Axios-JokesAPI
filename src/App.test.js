import { render, screen } from '@testing-library/react';
import React from 'react';
import reactDom from 'react-dom';
import App from './App';

test('has data', () => {
  const { getJoke } = App
  expect((getJoke)).toBeCalled
});

test('if joke is from object', () => {
  const { joke } = App
  expect(joke).toMatchObject
})