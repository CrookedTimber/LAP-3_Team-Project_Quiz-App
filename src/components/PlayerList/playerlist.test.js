import { screen, render } from '@testing-library/react';
import PlayerList from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';

let testPlayers = ["ben", "edgar", "abigail", "sam"];

describe('player list component', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <PlayerList testPayload={testPlayers}/>
            </Provider>
        )
    })

    test('generates list items', () => {
        const listItems = screen.getByRole('player-list-item');
        expect(listItems).toBeInTheDocument();
    });

});