import s from './index.module.scss';
import { Title } from "../../ui/Title";
import {useEffect, useMemo, useState} from "react";
import { CheckBox } from "../../ui/CheckBox";
// import { InputTime } from "../../ui/InputTime";
// import { InputText } from "../../ui/InputText";
// import { InputNumber } from "../../ui/InputNumber";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {QuizState} from "../../../store/reducers/quiz.reducer";

export const FifthSection = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);

    const [smallOperations, setSmallOperations] = useState<boolean>(quizList.smallOperations === 'true' ? true : quizList.smallOperations === 'false' ? false : false);
    const [cardiovascularDiseases, setCardiovascularDiseases] = useState<boolean>(quizList.cardiovascularDiseases === 'true' ? true : quizList.cardiovascularDiseases === 'false' ? false : false);
    const [acuteInfectiousDisease, setAcuteInfectiousDisease] = useState<boolean>(quizList.acuteInfectiousDisease === 'true' ? true : quizList.acuteInfectiousDisease === 'false' ? false : false);
    const [hemorrhages, setHemorrhages] = useState<boolean>(quizList.hemorrhages === 'true' ? true : quizList.hemorrhages === 'false' ? false : false);
    const [convulsions, setConvulsions] = useState<boolean>(quizList.convulsions === 'true' ? true : quizList.convulsions === 'false' ? false : false);
    const [hemorrhagicStroke, setHemorrhagicStroke] = useState<boolean>(quizList.hemorrhagicStroke === 'true' ? true : quizList.hemorrhagicStroke === 'false' ? false : false);
    const [SACStroke, setSACStroke] = useState<boolean>(quizList.SACStroke === 'true' ? true : quizList.SACStroke === 'false' ? false : false);
    const [ischemicStroke, setIschemicStroke] = useState<boolean>(quizList.ischemicStroke === 'true' ? true : quizList.ischemicStroke === 'false' ? false : false);
    // const [medicalStaffFullName, setMedicalStaffFullName] = useState<string>('');
    // const [employeeID, setEmployeeID] = useState<string>('');
    // const [invalidMessage, setInvalidMessage] = useState('');

    const debouncedSmallOperations = useDebounce(smallOperations, 500);
    const debouncedCardiovascularDiseases = useDebounce(cardiovascularDiseases, 500);
    const debouncedAcuteInfectiousDisease = useDebounce(acuteInfectiousDisease, 500);
    const debouncedHemorrhages = useDebounce(hemorrhages, 500);
    const debouncedConvulsions = useDebounce(convulsions, 500);
    const debouncedHemorrhagicStroke = useDebounce(hemorrhagicStroke, 500);
    const debouncedSACStroke = useDebounce(SACStroke, 500);
    const debouncedIschemicStroke = useDebounce(ischemicStroke, 500);
    // const debouncedMedicalStaffFullName = useDebounce(medicalStaffFullName, 500);
    // const debouncedEmployeeID = useDebounce(employeeID, 500);

    // useMemo(() => {
    //     if (employeeID && employeeID.length !== 5) setInvalidMessage('Введите 5 символов')
    //     else setInvalidMessage('')
    // }, [employeeID])

    useMemo(() => {
        if (quizList) {
            setSmallOperations(quizList.smallOperations === 'true' ? true : quizList.smallOperations === 'false' ? false : false)
            setCardiovascularDiseases(quizList.cardiovascularDiseases === 'true' ? true : quizList.cardiovascularDiseases === 'false' ? false : false)
            setAcuteInfectiousDisease(quizList.acuteInfectiousDisease === 'true' ? true : quizList.acuteInfectiousDisease === 'false' ? false : false)
            setHemorrhages(quizList.hemorrhages === 'true' ? true : quizList.hemorrhages === 'false' ? false : false)
            setConvulsions(quizList.convulsions === 'true' ? true : quizList.convulsions === 'false' ? false : false)
            setHemorrhagicStroke(quizList.hemorrhagicStroke === 'true' ? true : quizList.hemorrhagicStroke === 'false' ? false : false)
            setSACStroke(quizList.SACStroke === 'true' ? true : quizList.SACStroke === 'false' ? false : false)
            setIschemicStroke(quizList.ischemicStroke === 'true' ? true : quizList.ischemicStroke === 'false' ? false : false)
            // setMedicalStaffFullName(quizList.medicalStaffFullName ?? '')
            // setEmployeeID(quizList.employeeID ?? '')
        }
    }, [quizList])

    useEffect(() => {
        addQuizAnswerThunk({
            params: {
                smallOperations: debouncedSmallOperations,
                cardiovascularDiseases: debouncedCardiovascularDiseases,
                acuteInfectiousDisease: debouncedAcuteInfectiousDisease,
                hemorrhages: debouncedHemorrhages,
                convulsions: debouncedConvulsions,
                hemorrhagicStroke: debouncedHemorrhagicStroke,
                SACStroke: debouncedSACStroke,
                ischemicStroke: debouncedIschemicStroke,
            }
        })
    }, [debouncedSmallOperations, debouncedCardiovascularDiseases, debouncedAcuteInfectiousDisease, debouncedHemorrhages, debouncedConvulsions, debouncedHemorrhagicStroke,
        debouncedSACStroke, debouncedIschemicStroke]);

    /*const onBlurHandler = (name: string, value: any) => {
        addQuizAnswerThunk({
            params: {
                [name]: value
            }
        })
    }*/

    return (
        <div className={s.FifthSection}>
            <Title>Раздел 4: Соберите анамнез</Title>

            <div className={s.inner}>
                <CheckBox id={"1"} checked={smallOperations} onChange={e => setSmallOperations(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Малые операции или инвазивные вмешательства в последние 10 дней</span>
                    </div>
                </CheckBox>

                <CheckBox id={"2"} checked={cardiovascularDiseases} onChange={e => setCardiovascularDiseases(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Сердечно-сосудистые заболевания <br/> <small>(подострый бактериальный эндокардит, острый перикардит)</small></span>
                    </div>
                </CheckBox>

                <CheckBox id={"3"} checked={acuteInfectiousDisease} onChange={e => setAcuteInfectiousDisease(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Острое инфекционное заболевание</span>
                    </div>
                </CheckBox>

                <CheckBox id={"4"} checked={hemorrhages} onChange={e => setHemorrhages(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Кровоизлияния в ЖКТ и мочевыводящих путях не позднее 21 дня до инсульта</span>
                    </div>
                </CheckBox>

                <CheckBox id={"5"} checked={convulsions} onChange={e => setConvulsions(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Судорожные приступы в дебюте заболевания <br/> (имеется связь с острой церебральной ишемией)</span>
                    </div>
                </CheckBox>

                <div className={s.whiteBox}>
                    <span className={s.title}>ОНМК ранее:</span>
                    <div className={s.checkboxWrapper}>
                        <CheckBox className={s.check} id={"6"} checked={hemorrhagicStroke} onChange={e => setHemorrhagicStroke(e.target.checked)}>Гемморагический</CheckBox>
                        <CheckBox className={s.check} id={"7"} checked={SACStroke} onChange={e => setSACStroke(e.target.checked)}>САК</CheckBox>
                        <CheckBox className={s.check} id={"8"} checked={ischemicStroke} onChange={e => setIschemicStroke(e.target.checked)}>Ишемический инсульт</CheckBox>
                    </div>
                </div>

                <div className={s.textInputs}>
                    {/*<div className={s.inputWrapper}>
                        <span className={s.title}>Медперсонал ФИО</span>
                        <InputText value={medicalStaffFullName} onChange={e => setMedicalStaffFullName(e.target.value)} onBlur={() => onBlurHandler('medicalStaffFullName', medicalStaffFullName)}/>
                    </div>*/}

                    {/*<div className={s.inputWrapper}>
                        <span className={s.title}>Идентификатор сотрудника <span className={s.invalidMessage}>{invalidMessage}</span> </span>
                        <InputNumber value={employeeID}
                                     inputMode={'numeric'}
                                     onChange={e => setEmployeeID(e.target.value)} onBlur={() => {
                                         if (!invalidMessage && employeeID) onBlurHandler('employeeID', employeeID)
                                     }}
                                     maxLength={5} minLength={5}/>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};
