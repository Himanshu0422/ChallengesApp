import axios from "axios";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const ContributedQuestion = () => {

    const URL = process.env.REACT_APP_BACKEND_API;
    const nameRef = useRef();
    const descRef = useRef();
    const topicRef = useRef();
    const diffRef = useRef();
    const imgRef = useRef();
    const solRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            description: descRef.current.value,
            topic: topicRef.current.value,
            difficulty: diffRef.current.value,
            image: imgRef.current.value,
            solution: solRef.current.value,
        }

        try {
            const response = await axios.post(`${URL}/v1/contibuted-question`, data);
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                console.log(response.data);
                toast.error(response.data.message);
            }
            nameRef.current.value = '';
            descRef.current.value = '';
            topicRef.current.value = '';
            diffRef.current.value = 'Easy';
            imgRef.current.value = '';
            solRef.current.value = '';
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    return (
        <div className="max-h-screen">
            <div className='min-h-[calc(100vh-6rem)] flex items-center'>
                <div className='w-[100%]'>
                    <div className='px-6 py-4 max-w-md mx-auto bg-opacity-100 shadow-2xl rounded-lg overflow-hidden'>
                        <h1 className='text-2xl font-semibold mb-4'>Contribute your Question</h1>
                        <form onSubmit={submitHandler}>
                            <div className='mb-4'>
                                <label htmlFor='name' className="block text-dark-700 text-sm font-bold mb-2">
                                    Question Name:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id='name'
                                    type='text'
                                    placeholder='Question Name'
                                    ref={nameRef}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='description' className="block text-dark-700 text-sm font-bold mb-2">
                                    Description:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id='description'
                                    type='text'
                                    placeholder='Description'
                                    ref={descRef}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='topic' className="block text-dark-700 text-sm font-bold mb-2">
                                    Topic:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id='topic'
                                    type='text'
                                    placeholder='Topic'
                                    ref={topicRef}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='difficulty' className="block text-dark-700 text-sm font-bold mb-2">
                                    Difficulty:
                                </label>
                                <select
                                    className="border rounded w-full py-2 px-2 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="difficulty"
                                    name="difficulty"
                                    placeholder
                                    ref={diffRef}
                                >
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Difficult">Difficult</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='image' className="block text-dark-700 text-sm font-bold mb-2">
                                    Image:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id='image'
                                    type='text'
                                    placeholder='Image'
                                    ref={imgRef}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='solution' className="block text-dark-700 text-sm font-bold mb-2">
                                    Solution:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id='solution'
                                    type='text'
                                    placeholder='Solution'
                                    ref={solRef}
                                    required
                                />
                            </div>
                            <button className="bg-purple-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-700"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContributedQuestion;