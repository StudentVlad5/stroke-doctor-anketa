import s from './index.module.scss';
import {Title} from "../../ui/Title";
import {InputText} from "../../ui/InputText";
import {Textarea} from "../../ui/Textarea";
import {useEffect, useMemo, useState} from "react";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {InputNumber} from "../../ui/InputNumber";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {QuizState} from "../../../store/reducers/quiz.reducer";
import {RadioButton} from "../../ui/RadioButton";

export const FirstSection = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);
    const [patientFullName, setPatientFullName] = useState<string>(quizList?.patientFullName ? quizList.patientFullName : '');
    const [patientINN, setPatientINN] = useState<string>(quizList?.patientINN ? quizList.patientINN : '');
    const [visualDescription, setVisualDescription] = useState<string>(quizList?.visualDescription ? quizList.visualDescription : '');
    const [invalidMessage, setInvalidMessage] = useState('');
    const [sex, setSex] = useState(quizList?.patientSex ? quizList.patientSex : '');

    const debouncedSex = useDebounce(sex, 200);

    const onBlurHandler = (name: string, value: any) => {
        addQuizAnswerThunk({
            params: {
                [name]: value
            }
        })
    }

    useMemo(() => {
        if (patientINN && patientINN.length !== 12) setInvalidMessage('Длинна ИИН - 12 символов')
        else setInvalidMessage('')
    }, [patientINN])

    useMemo(() => {
        if (quizList) {
            setPatientFullName(quizList.patientFullName ?? '')
            setPatientINN(quizList.patientINN ?? '')
            setVisualDescription(quizList.visualDescription ?? '')
            setSex(quizList.patientSex ?? '')
        }
    }, [quizList]);

    useEffect(() => {
        if(debouncedSex !== ""){
        addQuizAnswerThunk({
            params: {
                patientSex: debouncedSex,
            }
        })}
    }, [debouncedSex]);

    return (
        <div className={s.PatientInformation}>
            <Title>Раздел 1: Информация по пациенту</Title>
            <div className={s.inner}>
                <InputText title={"ФИО пациента"}
                           subtitle={"Внесите информацию по визуальному осмотру, если данных по личности не имеются"}
                           onChange={(e) => setPatientFullName(e.target.value)} value={patientFullName} onBlur={() => onBlurHandler('patientFullName', patientFullName)} />

                {/*<InputText title={"ИИН пациента"}
                           onBlur={onBlurHandler}
                           onChange={(e) => setPatientINN(e.target.value)} value={patientINN}/>*/}
                <div className={s.sex}>
                    <span className={s.title}>Пол пациента</span>
                    <div className={s.sexInner}>
                        <RadioButton id={'15'} value={"Мужской"} onChange={(str) => setSex(str)} name={"sex"} currentValue={sex} />
                        <RadioButton id={'16'} value={"Женский"} onChange={(str) => setSex(str)} name={"sex"} currentValue={sex}/>
                    </div>
                </div>
                <InputNumber title={"ИИН пациента"} invalidMessage={invalidMessage} inputMode={"numeric"}
                             onChange={(e) => setPatientINN(e.target.value)} value={patientINN} minLength={12} maxLength={12} onBlur={() => onBlurHandler('patientINN', patientINN)} />

                <Textarea title={"Визуальное описание - при отсутствии личных данных"}
                          onChange={(e) => setVisualDescription(e.target.value)} value={visualDescription} onBlur={() => onBlurHandler('visualDescription', visualDescription)} />
            </div>
        </div>
    );
};
