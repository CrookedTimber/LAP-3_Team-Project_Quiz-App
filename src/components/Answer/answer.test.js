import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter as Router} from 'react-router-dom';
import Answers from './index';

describe('Answers component', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Router>
                    <Answers/>
                </Router>
            </Provider>
        );
    });

    test('Create answer div', () => {
        const div = screen.getByTestId('answer-component');
        expect(div).toBeInTheDocument();
        
    });
    
    test('div should have class of answer', () => {
        const div = screen.getByTestId('answer-component');
        expect(div).toHaveClass('answer');
    });
    
    test('answer component should have an assigned letter', () => {
        const letter = screen.getAllByRole('heading');
        expect(letter[0]).toHaveClass('answer-letter');
    });
    
});