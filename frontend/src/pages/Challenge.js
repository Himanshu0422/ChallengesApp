import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import MainQuestion from '../components/MainQuestion';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';

const Challenge = () => {

    const URL = process.env.REACT_APP_BACKEND_API;
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const data = {
        questionId: questionId
    }
    const [ques, setQues] = useState();
    const questionData = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get(`${URL}/v1/questionbyid`, {
                params: data
            });
            setQues(response.data.data[0]);
            dispatch(hideLoading());
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        questionData();
    }, [])

    return (
        <>
            <MainQuestion ques={ques} />
        </>
    )
}

export default Challenge