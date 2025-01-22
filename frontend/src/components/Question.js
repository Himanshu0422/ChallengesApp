import React from 'react';
import { useNavigate } from 'react-router-dom';

const Question = ({ ques, i }) => {

    const navigate = useNavigate();
    const { _id, name, difficulty } = ques;
    return (
        <div
            className='w-[30%] max-lg:w-[45%] max-md:w-[45%] max-sm:w-[90%] h-[35%] cursor-pointer rounded-xl button-background mx-2 hover:transform hover:scale-y-110 hover:origin-top hover:transition-transform'
            onClick={() => navigate(`/challenge/${_id}`)}
        >
            <div className='flex flex-col justify-evenly h-full'>
                <div className='flex justify-between px-5 gap-4'>
                    <img
                        src='https://reactchallenges.live/20adfb35ae6a6e5817bf.png'
                        alt='react'
                        height={50}
                        width={50}
                        className='object-contain'
                    />
                    <div className='text-2xl pr-4 text-gray-200 flex text-end'>{i + 1}. {name}</div>
                </div>
                <div className='flex justify-between px-10 text-md'>
                    <div className='border-width rounded-lg p-1'>
                        <span className='text-green-300 md:mr-3'>©</span>
                        UseState
                    </div>
                    <div className='flex text-sm p-1'>
                        <div>Difficulty:</div>
                        <div className='text-green-300'>{difficulty}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question