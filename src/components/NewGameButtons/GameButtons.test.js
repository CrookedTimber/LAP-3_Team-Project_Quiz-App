import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import NewGameButtons from './index';
import {BrowserRouter as Router} from 'react-router-dom';

describe('New Game Buttons component', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Router>
                    <NewGameButtons/>
                </Router>
            </Provider>
        );
    });

    test('Create host game button', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(3);
    });
    
    test('Create host game button', () => {
        const hostBtn = screen.getByText('Host a Game');
        expect(hostBtn).toBeInTheDocument();
    });

    test('Create join game button', () => {
        const joinBtn = screen.getByText('Join a Game');
        expect(joinBtn).toBeInTheDocument();
    });

    test('Create Change Username button', () => {
        const nameBtn = screen.getByText('Change Username');
        expect(nameBtn).toBeInTheDocument();
    });

});