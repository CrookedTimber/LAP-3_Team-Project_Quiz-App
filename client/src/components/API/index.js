import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { matchActions } from "../../reducers";


function API(category = 9, amount = 10, difficulty = 'medium'){
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            async function getData(){
                const url = `https://opentdb.com/api.php?${amount}&${category}&${difficulty}&type=multiple`;
            
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