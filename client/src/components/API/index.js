import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { matchActions } from "../../reducers";


function API(){
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            async function getData(){
                const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;
            
                const response = await axios.get(url);
                //populate questions array
                dispatch(matchActions.updateQuestionsArray(response.data.results));
            };
            getData()

        } catch (err) {
            console.warn(err);
        }
    }, []);

    const data = useSelector((state) => state.match.questionsArray);
}

export default API;