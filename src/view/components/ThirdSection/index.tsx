import s from './index.module.scss';
import {Title} from "../../ui/Title";
import {useEffect, useMemo, useState} from "react";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {QuizState} from "../../../store/reducers/quiz.reducer";

export const ThirdSection = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);

    const [bloodSugarLevel, setBloodSugarLevel] = useState('');
    const [bodyTemperature, setBodyTemperature] = useState('');
    const [arterialPressureS, setArterialPressureS] = useState('');
    const [arterialPressureD, setArterialPressureD] = useState('');
    const [patientBodyWeight, setPatientBodyWeight] = useState('');
    const [patientAge, setPatientAge] = useState('');

    const debouncedBloodSugarLevel = useDebounce(bloodSugarLevel, 500);
    const debouncedBodyTemperature = useDebounce(bodyTemperature, 500);
    const debouncedArterialPressureS = useDebounce(arterialPressureS, 500);
    const debouncedArterialPressureD = useDebounce(arterialPressureD, 500);
    const debouncedPatientBodyWeight = useDebounce(patientBodyWeight, 500);
    const debouncedPatientAge = useDebounce(patientAge, 500);

    useMemo(() => {
        if (quizList) {
            setBloodSugarLevel(quizList.bloodSugarLevel ?? '')
            setBodyTemperature(quizList.bodyTemperature ?? '')
            setArterialPressureS(quizList.arterialPressureS ?? '')
            setArterialPressureD(quizList.arterialPressureD ?? '')
            setPatientBodyWeight(quizList.patientBodyWeight ?? '')
            setPatientAge(quizList.patientAge ?? '')
        }
    }, [quizList])

    const onBlurHandler = (name: string, value: any) => {
        addQuizAnswerThunk({
            params: {
                [name]: value
            }
        })
    }

    function validate(evt: any) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\.|,/;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    /*useEffect(() => {
        addQuizAnswerThunk({
            params: {
                bloodSugarLevel: debouncedBloodSugarLevel,
                bodyTemperature: debouncedBodyTemperature,
                arterialPressureS: debouncedArterialPressureS,
                arterialPressureD: debouncedArterialPressureD,
                patientBodyWeight: debouncedPatientBodyWeight,
                patientAge: debouncedPatientAge
            }
        })
    }, [debouncedBloodSugarLevel, debouncedBodyTemperature, debouncedArterialPressureS, debouncedArterialPressureD, debouncedPatientBodyWeight, debouncedPatientAge]);*/

    return (
        <div className={s.ThirdSection}>
            <Title>Раздел 3: Соберите следующую информацию</Title>
            <div className={s.inner}>
                <div className={s.field}>
                    <span className={s.title}>Содержание сахара в крови</span>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder={"_ _"} inputMode={'numeric'}
                               value={bloodSugarLevel} onChange={e => setBloodSugarLevel(e.target.value)}
                               onBlur={() => onBlurHandler('bloodSugarLevel', bloodSugarLevel)} onKeyPress={validate}/>
                    </div>
                    <div className={s.unit}>
                        <span>ммоль/л</span>
                    </div>
                </div>

                <div className={s.field}>
                    <span className={s.title}>Температура тела</span>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder={"_ _"} inputMode={'numeric'}
                               value={bodyTemperature} onChange={e => setBodyTemperature(e.target.value)}
                               onBlur={() => onBlurHandler('bodyTemperature', bodyTemperature)} onKeyPress={validate}/>
                    </div>
                    <div className={s.unit}>
                        <span>°C</span>
                    </div>
                </div>

                <div className={s.field}>
                    <span className={s.title}>Артериальное давление</span>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder={"_ _"} inputMode={'numeric'}
                               value={arterialPressureS} onChange={e => setArterialPressureS(e.target.value)}
                               onBlur={() => onBlurHandler('arterialPressureS', arterialPressureS)} onKeyPress={validate}/>
                        <span className={s.name}>САД</span>
                    </div>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder={"_ _"} inputMode={'numeric'}
                               value={arterialPressureD} onChange={e => setArterialPressureD(e.target.value)}
                               onBlur={() => onBlurHandler('arterialPressureD', arterialPressureD)} onKeyPress={validate}/>
                        <span className={s.name}>ДАД</span>
                    </div>
                </div>

                <div className={s.field}>
                    <span className={s.title}>Масса тела пациента</span>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder={"_ _"} inputMode={'numeric'}
                               value={patientBodyWeight} onChange={e => setPatientBodyWeight(e.target.value)}
                               onBlur={() => onBlurHandler('patientBodyWeight', patientBodyWeight)} onKeyPress={validate}/>
                    </div>
                    <div className={s.unit}>
                        <span>кг</span>
                    </div>
                </div>

                <div className={s.field}>
                    <span className={s.title}>Возраст пациента</span>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder={"_ _"} inputMode={'numeric'}
                               value={patientAge} onChange={e => setPatientAge(e.target.value)}
                               onBlur={() => onBlurHandler('patientAge', patientAge)} onKeyPress={validate}/>
                    </div>
                    <div className={s.unit}>
                        <span>лет</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
