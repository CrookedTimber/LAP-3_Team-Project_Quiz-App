import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';
import { socket } from './Socket';
import "@testing-library/jest-dom/extend-expect";

describe('test for connection to socket', () => {

    beforeEach(() => {
        
    });

    test('socket connected', ()=> {
        expect(socket.id).toBe(!null);
    });

});