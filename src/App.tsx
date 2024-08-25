import { StrictMode } from 'react';
import { createStore } from 'tinybase';
import { Provider, useCreateStore } from 'tinybase/ui-react';
import {
  SortedTableInHtmlTable,
  ValuesInHtmlTable,
} from 'tinybase/ui-react-dom';
import { Inspector } from 'tinybase/ui-react-inspector';
import { Buttons } from './Buttons';

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
    <StrictMode>
      <Provider store={store}>
        <header>
          <h1>
            <img src='/favicon.svg' />
            TinyBase & React
          </h1>
        </header>
        <Buttons />
        <div>
          <h2>Values</h2>
          <ValuesInHtmlTable />
        </div>
        <div>
          <h2>Pets Table</h2>
          <SortedTableInHtmlTable
            tableId='pets'
            cellId='name'
            limit={5}
            sortOnClick={true}
            className='sortedTable'
            paginator={true}
          />
        </div>
        <Inspector />
      </Provider>
    </StrictMode>
  );
};
