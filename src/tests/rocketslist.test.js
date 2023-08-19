import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';
import { displayRockets } from '../Redux/Rockets/rocketSlice';

jest.mock('../Redux/Rockets/rocketSlice', () => ({
  displayRockets: jest.fn(),
}));

const mockStore = configureStore([]);
const initialState = {
  rockets: {
    loading: false,
    rockets: [
      {
        id: '1',
        name: 'Falcon 1',
        description: 'It is the best film',
        reserved: true,
      },
      {
        id: '2',
        name: 'Mock Mission 2',
        description: 'It is the best film',
        reserved: false,
      },
    ],
  },
};
const store = mockStore(initialState);

test('Rockets component renders correctly', () => {
  displayRockets.mockReturnValueOnce({ type: 'mockAction' });
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
