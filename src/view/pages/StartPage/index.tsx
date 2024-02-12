import s from './index.module.scss';
import { Button } from "../../ui/Button";
import { InputText } from "../../ui/InputText";
import {useMemo, useState} from "react";
import { useAppSelector, useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../store/reducers/quiz.reducer";
import Skeleton from "../../ui/Skeleton";
import {useLocation, useNavigate} from "react-router-dom";
import ClueImg from '../../../assets/images/clue.png'
import {Modal} from "../../ui/Modal";
import { IMaskInput } from 'react-imask';
import {InputNumber} from "../../ui/InputNumber";
import classNames from "classnames";

export const StartPage = () => {
    const navigate = useNavigate();
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizIsLoading } = useAppSelector(QuizState);

    const [number, setNumber] = useState<string>('');
    const [employeeID, setEmployeeID] = useState<string>('');
    const [isOpenClue, setIsOpenClue] = useState<boolean>(false);
    const [isOpenClue2, setIsOpenClue2] = useState<boolean>(false);
    const [invalidMessage, setInvalidMessage] = useState('');

    useMemo(() => {
        if (employeeID && employeeID.length !== 5) setInvalidMessage('Введите 5 символов')
        else setInvalidMessage('')
    }, [employeeID])

    const onChange = (e: any) => {
        console.log(number)
        setNumber(e.target.value)
    }

    const onSubmitFormHandler = async () => {
        localStorage.setItem('id', Date.now().toString());
        localStorage.setItem('application_number', number);
        const startTimeAutoHh = new Date().getHours()
        const startTimeAutoMm =new Date().getMinutes()

        localStorage.setItem('start_time_auto', `${startTimeAutoHh}:${startTimeAutoMm}`)
        addQuizAnswerThunk({ params: {
            employeeID: employeeID,
            startTimeAutoHh: startTimeAutoHh,
            startTimeAutoMm: startTimeAutoMm
        } })
        navigate('/1')
    }

    return (
        <div className={s.StartPage}>
            { quizIsLoading && <Skeleton /> }
            <div className={s.inputWrapper}>
                {/*<InputText placeholder={"Введите № бригады СМП"} onChange={onChange}/>*/}
                <IMaskInput className={s.textInput} value={number} inputMode='numeric'
                            onChange={onChange}
                            placeholder='Введите № бригады СМП' mask={"00/00"}/>
                <button className={s.clue} onClick={() => setIsOpenClue(true)}>
                    <img src={ClueImg} alt=""/>
                </button>
            </div>
            <div className={classNames(s.inputWrapper, s.oneItem)}>
                {/*<span className={s.title}>Идентификатор сотрудника <span className={s.invalidMessage}>{invalidMessage}</span> </span>*/}
                {invalidMessage && <span className={s.invalidMessage}>{invalidMessage}</span>}
                <InputNumber value={employeeID}
                             placeholder={'Идентификатор сотрудника'}
                             inputMode={'numeric'}
                             onChange={e => setEmployeeID(e.target.value)}
                             maxLength={5} minLength={5}/>
                <button className={s.clue} onClick={() => setIsOpenClue2(true)}>
                    <img src={ClueImg} alt=""/>
                </button>
            </div>
            <Button disabled={!number || quizIsLoading || !!invalidMessage || !employeeID} onClick={onSubmitFormHandler}>Заполнить новый чек-лист</Button>
            <Modal isVisible={isOpenClue} onClose={() => setIsOpenClue(false)} content={<p>Введите № бригады в формате №подстанции СМП/№бригады. Например, "03/05"</p>}/>
            <Modal isVisible={isOpenClue2} onClose={() => setIsOpenClue2(false)} content={<p>Введите идентификатор сотрудника. Например, "12345"</p>}/>
        </div>
    );
};
