import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import QuestionPage from '../../components/QuestionPage';
import { useDispatch, useSelector } from 'react-redux';
import { SyncLoader } from 'react-spinners';
import { hideLoading, showLoading } from '../../redux/alertsSlice';

const TopicQues = ({ topic }) => {

    const URL = process.env.REACT_APP_BACKEND_API;
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alerts);
    const data = {
        topic: topic,
    }
    const [ques, setQues] = useState([]);

    const getQues = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get(`${URL}/v1/question`, {
                params: data
            });
            setQues(response.data.data);
            console.log(ques);
            dispatch(hideLoading());
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    useEffect(() => {
        getQues();
    }, [topic]);

    return (
        <div className='flex flex-wrap justify-evenly h-[100%] w-[100%] overflow-auto items-center gap-y-10'>
            {loading && (
                <div className="spinner-parent">
                    <SyncLoader color='#36d7b7' />
                </div>
            )}
            <QuestionPage ques={ques} />
        </div>
    )
}

export default TopicQues;