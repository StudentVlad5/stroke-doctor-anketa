import s from './index.module.scss';
import { Title } from "../../ui/Title";
import { CheckBox } from "../../ui/CheckBox";
import {InputTime} from "../../ui/InputTime";
import {useEffect, useMemo, useState} from "react";
import {log} from "util";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {QuizState} from "../../../store/reducers/quiz.reducer";

export const MethodologyFAST = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);

    const [saggingFace, setSaggingFace] = useState(false);
    const [handDisplacement, setHandDisplacement] = useState(false);
    const [speechDisorders, setSpeechDisorders] = useState(false);

    const [firstSymptomsTimeHh, setFirstSymptomsTimeHh] = useState<string>('');
    const [firstSymptomsTimeMm, setFirstSymptomsTimeMm] = useState<string>('');

    const debouncedSaggingFace = useDebounce(saggingFace, 500);
    const debouncedHandDisplacement = useDebounce(handDisplacement, 500);
    const debouncedSpeechDisorders = useDebounce(speechDisorders, 500);
    const debouncedFirstSymptomsTimeHh = useDebounce(firstSymptomsTimeHh, 500);
    const debouncedFirstSymptomsTimeMm = useDebounce(firstSymptomsTimeMm, 500);

    const onChangeHandler = (e: any, setValue: any) => {
        setValue(e.target.checked)
    }

    useMemo(() => {
        if (quizList) {
            setSaggingFace(quizList.saggingFace === 'true' ? true : quizList.saggingFace === 'false' ? false : false)
            setHandDisplacement(quizList.handDisplacement === 'true' ? true : quizList.handDisplacement === 'false' ? false : false)
            setSpeechDisorders(quizList.speechDisorders === 'true' ? true : quizList.speechDisorders === 'false' ? false : false)
            setFirstSymptomsTimeHh(quizList.firstSymptomsTimeHh ?? '')
            setFirstSymptomsTimeMm(quizList.firstSymptomsTimeMm ?? '')
        }
    }, [quizList])

    useEffect(() => {
        addQuizAnswerThunk({
            params: {
                saggingFace: debouncedSaggingFace,
                handDisplacement: debouncedHandDisplacement,
                speechDisorders: debouncedSpeechDisorders,
                // firstSymptomsTimeHh: debouncedFirstSymptomsTimeHh,
                // firstSymptomsTimeMm: debouncedFirstSymptomsTimeMm,
            }
        })
    }, [debouncedSaggingFace, debouncedHandDisplacement, debouncedSpeechDisorders]);

/*    useEffect(() => {
        // localStorage.setItem('start_time', `${debouncedFirstSymptomsTimeHh}:${debouncedFirstSymptomsTimeMm}`)
        if (firstSymptomsTimeHh) {
            localStorage.setItem('start_time', `${debouncedFirstSymptomsTimeHh ?? '00'}:${debouncedFirstSymptomsTimeMm ?? '00'}`)
            localStorage.setItem('setTime', 'true')
        }
        if (firstSymptomsTimeMm) {
            localStorage.setItem('start_time', `${debouncedFirstSymptomsTimeHh ?? '00'}:${debouncedFirstSymptomsTimeMm ?? '00'}`)
            localStorage.setItem('setTime', 'true')
        }
    }, [debouncedFirstSymptomsTimeHh, debouncedFirstSymptomsTimeMm]);*/

    const onBlurHandler = (name: string, value: any) => {
        addQuizAnswerThunk({
            params: {
                [name]: value
            }
        })
    }

    return (
        <div className={s.MethodologyFAST}>
            <Title>Методика F-A-S-T</Title>
            <div className={s.inner}>
                <div className={s.checkBoxBlock}>

                    <CheckBox id={"1"} checked={saggingFace} onChange={(e) => onChangeHandler(e, setSaggingFace)}>
                        <span className={s.title}>Провисание на лице</span>
                    </CheckBox>

                    <CheckBox id={"2"} checked={handDisplacement} onChange={(e) => onChangeHandler(e, setHandDisplacement)}>
                        <span className={s.title}>Смещение рук</span>
                    </CheckBox>

                    <CheckBox id={"3"} checked={speechDisorders} onChange={(e) => onChangeHandler(e, setSpeechDisorders)}>
                        <span className={s.title}>Нарушения речи</span>
                    </CheckBox>
                </div>
                <div className={s.timeBlock}>
                    <InputTime title={"Введите время появления первых симптомов"}
                               valueHh={firstSymptomsTimeHh} valueMm={firstSymptomsTimeMm}
                               onChangeHh={(str) => setFirstSymptomsTimeHh(str)} onChangeMm={(str) => setFirstSymptomsTimeMm(str)}
                               onBlurHh={() => {
                                   localStorage.setItem('start_time', `${firstSymptomsTimeHh ?? '00'}:${firstSymptomsTimeMm ?? '00'}`)
                                   onBlurHandler('firstSymptomsTimeHh', firstSymptomsTimeHh ?? '00')
                               }} onBlurMm={() => {
                                    localStorage.setItem('start_time', `${firstSymptomsTimeHh ?? '00'}:${firstSymptomsTimeMm ?? '00'}`)
                                    onBlurHandler('firstSymptomsTimeMm', firstSymptomsTimeMm ?? '00')
                                }}/>
                </div>
            </div>
        </div>
    );
};
