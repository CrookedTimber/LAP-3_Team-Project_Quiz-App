import { screen, render } from '@testing-library/react';
import PlayerList from './index';
import { useSelector, useDispatch } from 'react-redux';
import { matchActions, userActions } from '../../reducers';

describe('player list component', () => {
    let dispatch = useDispatch();
    let testPlayers = ["ben", "edgar", "abigail", "sam"];
    
    beforeEach(() => {
        dispatch(matchActions.updatePlayers(testPlayers));
        render(
            <PlayerList/>
        )
    })

    afterEach(() => {
        dispatch(matchActions.updatePlayers([]));
    })

    test('', async() => {
        expect().toBe();
    });


});