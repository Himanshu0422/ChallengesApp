import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const QuestionTable = () => {
    const URL = process.env.REACT_APP_BACKEND_API;
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alerts);
    return (
        <div>QuestionTable</div>
    )
}

export default QuestionTable