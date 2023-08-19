import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../components/Profile';

const mockStore = configureStore([]);
const initialState = {
  missions: {
    missions: [
      {
        mission_id: '1',
        mission_name: 'Mock Mission 1',
        description: 'The best mission of space',
        reserved: true,
      },
    ],
  },
  rockets: {
    rockets: [
      {
        id: '1',
        name: 'Falcon 2',
        description: 'It is a good flight to the space',
        reserved: false,
      },
    ],
  },
};
const store = mockStore(initialState);
test('The profile component renders i a good way', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
