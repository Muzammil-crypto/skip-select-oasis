
import { Provider } from 'react-redux';
import { store } from '../store';
import ChooseSkip from '../screens/ChooseSkip';

const Index = () => {
  return (
    <Provider store={store}>
      <ChooseSkip />
    </Provider>
  );
};

export default Index;
