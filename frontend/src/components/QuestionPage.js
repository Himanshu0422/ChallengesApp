import Question from "./Question";
import { useSelector } from 'react-redux';

const QuestionPage = ({ ques }) => {

    const { search, difficult } = useSelector((state) => state.question);

    const filteredQuestions = ques.filter(q => {
        const isDifficultyMatch = !difficult || difficult === "All" || q.difficulty === difficult;

        const isSearchMatch = !search || Object.values(q).some(val => {
            if (typeof val === 'string') {
                return val.toLowerCase().includes(search.toLowerCase());
            }
            return false;
        });

        return isSearchMatch && isDifficultyMatch;
    });

    return (
        <>
            {filteredQuestions.map((q, i) => (
                <Question ques={q} i={i} key={i} />
            ))}
        </>
    );
}

export default QuestionPage;
