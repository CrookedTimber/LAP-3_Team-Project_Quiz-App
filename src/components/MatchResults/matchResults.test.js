import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter as Router} from 'react-router-dom';
import MatchResults from './index';

describe('matchResults component', () => {

    const mockFunction = jest.fn();

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Router>
                    <MatchResults/>
                </Router>
            </Provider>
        );
    });

    test('Score title', () => {
        const title = screen.getByText('Scores');
        expect(title).toBeInTheDocument();
    });
  
    test('list item', () => {
        const listitem = screen.getByRole('list');
        expect(listitem).toBeInTheDocument();
    });
   
    test('button', async() => {
        const btn = screen.getByRole('button');
        btn
        
        expect(btn).toBeInTheDocument();
        
        render(<button onClick={mockFunction}>test</button>)
        
        const testBtn = screen.getByText('test');
        btn
        await userEvent.click(testBtn);

        expect(mockFunction).toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

});