import { screen } from '@testing-library/react';
import axios from 'axios';

describe('Search', () => {

    let response;

    beforeEach(async () => {
        response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple');
    })

    test('should return an array of 10 items', async() => {
        expect(response.data.results.length).toBe(10);
    });


});