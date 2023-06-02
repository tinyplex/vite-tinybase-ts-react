import { createStore } from 'tinybase';
import {
  Provider,
  useCreateStore,
  useTables,
  useValues,
} from 'tinybase/ui-react';
import { Buttons } from './Buttons';
import { Details } from './Details';

export const App = () => {
  const store = useCreateStore(() => {
    // Create the TinyBase Store and initialize the Store's data
    return createStore()
      .setValue('counter', 0)
      .setRow('pets', '0', { name: 'fido', species: 'dog' })
      .setTable('species', {
        dog: { price: 5 },
        cat: { price: 4 },
        fish: { price: 2 },
        worm: { price: 1 },
        parrot: { price: 3 },
      });
  });

  return (
    <Provider store={store}>
      <Buttons />
      <Details label='Values' hook={useValues} />
      <Details label='Tables' hook={useTables} />
    </Provider>
  );
};
