import React from 'react';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

const MainQuestion = ({ ques }) => {

    const { loading } = useSelector((state) => state.alerts);
    const navigate = useNavigate();
    const { name, description, topic, difficulty, image, solution } = ques || {};
    const handleCLick = () => {
        if (!solution) return
        window.open(solution, '_blank');
    }

    return (
        <div className='flex flex-col'>
            {loading && (
                <div className="spinner-parent">
                    <SyncLoader color='#36d7b7' />
                </div>
            )}
            <div className='flex justify-between items-center px-2 my-1'>
                <img
                    onClick={() => navigate('/challenges/hooks')}
                    className='h-[40px] w-[40px] cursor-pointer'
                    src='https://img.icons8.com/ios/50/000000/circled-left-2.png'
                    alt='back'
                />
                <div>
                    <Timer />
                </div>
            </div>
            <div className='flex h-[calc(100vh-3.12rem)]'>
                <div className='w-[30%] flex flex-col justify-center items-center backgound-color space-y-6 max-md:space-y-4 max-sm:w-[100%]'>
                    <div className='text-black text-3xl w-[90%]'>
                        {name}
                    </div>
                    <div className='w-[90%] flex items-center space-x-5 text-gray-600'>
                        <div>Topic: </div>
                        <div className='border-width rounded-lg py-1 px-2 text-sm flex justify-center'>
                            {topic}
                        </div>
                    </div>
                    <div className='flex w-[90%] space-x-2'>
                        <div className='text-gray-600'>Difficulty:</div>
                        <div className='text-green-300'>{difficulty}</div>
                    </div>
                    <div className="border border-white w-[90%]"></div>
                    <div className='w-[90%] h-[15%] bg-slate-300 rounded-lg space-y-2 pt-2 pl-3'>
                        <div>Description: </div>
                        <div>{description}</div>
                    </div>
                    <div className='w-[90%] space-y-1'>
                        <div>Solution</div>
                        <button onClick={() => handleCLick()} className='bg-slate-400 p-3 text-black rounded-md'>{!solution ? 'Will add soon' : 'Click here for Solution'}</button>
                    </div>
                    <div className='w-[90%]'>
                        Sample output (Click on image to expand)
                    </div>
                    <img
                        className='w-[97%] h-[250px] rounded-md'
                        src={image}
                        alt='gif'
                    />
                </div>
                <div className='w-[70%] h-full sm:flex hidden'>
                    <iframe
                        src='https://codesandbox.io/s/festive-turing-84svy2?file=/src/App.js'
                        title='codesandbox'
                        className='w-[100%] h-[100%]'
                    />
                </div>
            </div>
        </div>
    )
}

export default MainQuestion