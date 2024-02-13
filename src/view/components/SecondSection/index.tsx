import s from './index.module.scss';
import { CheckBox } from "../../ui/CheckBox";
import { Title } from "../../ui/Title";
import { InputTime } from "../../ui/InputTime";
import {useState, useMemo, useEffect} from "react";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {QuizState} from "../../../store/reducers/quiz.reducer";
import { RadioButtonFalse, RadioButtonTrue, RadioButtonUnknow } from '../../ui/RadioButtonWithoutSpan';

export const SecondSection = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);

    const [treatmentStarted, setTreatmentStarted] = useState<boolean>((quizList.treatmentStarted === 'true' ? true : quizList.treatmentStarted === 'false' ? false : false));
    const [intravenousAccessEstablished, setIntravenousAccessEstablished] = useState<any>(quizList.intravenousAccessEstablished === 'true' ? 'true' : quizList.intravenousAccessEstablished === 'false' ? 'false' : 'false');
    const [takesAnticoagulants, setTakesAnticoagulants] = useState<any>(quizList.takesAnticoagulants === 'true' ? 'true' : quizList.takesAnticoagulants === 'false' ? 'false' : 'unknow');
    const [deliveryTimeHh, setDeliveryTimeHh] = useState<string>('');
    const [deliveryTimeMm, setDeliveryTimeMm] = useState<string>('');
    const [takeECG, setTakeECG] = useState<any>(quizList.takeECG === 'true' ? 'true' : quizList.takeECG === 'false' ? 'false' : 'false');

    const debouncedTreatmentStarted = useDebounce(treatmentStarted, 500);
    const debouncedIntravenousAccessEstablished = useDebounce(intravenousAccessEstablished, 500);
    const debouncedTakesAnticoagulants = useDebounce(takesAnticoagulants, 500);
    // const debouncedDeliveryTimeHh = useDebounce(deliveryTimeHh, 500);
    // const debouncedDeliveryTimeMm = useDebounce(deliveryTimeMm, 500)
    const debouncedTakeECG = useDebounce(takeECG, 500)

    useMemo(() => {
        if (quizList) {
            setTreatmentStarted(quizList.treatmentStarted === 'true' ? true : quizList.treatmentStarted === 'false' ? false : false);
            setIntravenousAccessEstablished(quizList.intravenousAccessEstablished === 'true' ? 'true' : quizList.intravenousAccessEstablished === 'false' ? 'false' : 'false');
            setTakesAnticoagulants(quizList.takesAnticoagulants === 'true' ? 'true' : quizList.takesAnticoagulants === 'false' ? 'false' : 'unknow');
            setTakeECG(quizList.takeECG === 'true' ? 'true' : quizList.takeECG === 'false' ? 'false' : 'false');
            setDeliveryTimeHh(quizList.deliveryTimeHh ?? '');
            setDeliveryTimeMm(quizList.deliveryTimeMm ?? '')
        }
    }, [quizList])

    /*useMemo(() => {
        addQuizAnswerThunk({
            params: {
                treatmentStarted,
                intravenousAccessEstablished,
                takesAnticoagulants,
                deliveryTimeHh,
                deliveryTimeMm,
            }
        })
    }, [treatmentStarted, intravenousAccessEstablished, takesAnticoagulants, deliveryTimeHh, deliveryTimeMm])*/

    useEffect(() => {
        addQuizAnswerThunk({
            params: {
                treatmentStarted: debouncedTreatmentStarted,
                intravenousAccessEstablished: debouncedIntravenousAccessEstablished,
                takesAnticoagulants: debouncedTakesAnticoagulants,
                takeECG: debouncedTakeECG,
                // deliveryTimeHh: debouncedDeliveryTimeHh,
                // deliveryTimeMm: debouncedDeliveryTimeMm
            }
        })

    }, [debouncedTreatmentStarted, debouncedIntravenousAccessEstablished, debouncedTakesAnticoagulants, debouncedTakeECG]);

    const onBlurHandler = (name: string, value: any) => {
        addQuizAnswerThunk({
            params: {
                [name]: value
            }
        })
    }

    return (
        <div className={s.SecondSection}>
            <Title>Раздел 2: Действия при подозрении на инсульт</Title>

            <div className={s.inner}>
                <CheckBox id={"1"} checked={treatmentStarted} onChange={(e) => setTreatmentStarted(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Начата ли процедура лечения инсульта</span>
                    </div>
                </CheckBox>
            </div>

            <div className={s.whiteBox}>
                <InputTime title={"Предполагаемое время доставки пациента в инсультный центр"}
                           valueHh={deliveryTimeHh} valueMm={deliveryTimeMm}
                           onChangeHh={(str) => setDeliveryTimeHh(str)} onChangeMm={(str) => setDeliveryTimeMm(str)}
                           onBlurHh={() => onBlurHandler('deliveryTimeHh', deliveryTimeHh)} onBlurMm={() => onBlurHandler('deliveryTimeMm', deliveryTimeMm)}/>
            </div>

            <div className={s.inner}>

            <table>
                    <tbody>
                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Установлен <strong>внутривенный доступ</strong></span> <br/><span className={s.subtitle}>(предпочтительно 2 канюли большого диаметра с портом)</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'1_1'} value={"true"} onChange={(str) => setIntravenousAccessEstablished(str)} name={"intravenousAccessEstablished"} currentValue={intravenousAccessEstablished} />
                                <RadioButtonFalse id={'1_2'} value={"false"} onChange={(str) => setIntravenousAccessEstablished(str)} name={"intravenousAccessEstablished"} currentValue={intravenousAccessEstablished}/>
                                {/* <RadioButtonUnknow id={'1_3'} value={"unknow"} onChange={(str) => setIntravenousAccessEstablished(str)} name={"intravenousAccessEstablished"} currentValue={intravenousAccessEstablished}/> */}
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Пациент принимает <strong>антикоагулянты</strong></span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'2_1'} value={"true"} onChange={(str) => setTakesAnticoagulants(str)} name={"takesAnticoagulants"} currentValue={takesAnticoagulants} />
                                <RadioButtonFalse id={'2_2'} value={"false"} onChange={(str) => setTakesAnticoagulants(str)} name={"takesAnticoagulants"} currentValue={takesAnticoagulants}/>
                                <RadioButtonUnknow id={'2_3'} value={"unknow"} onChange={(str) => setTakesAnticoagulants(str)} name={"takesAnticoagulants"} currentValue={takesAnticoagulants}/>
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Снимите ЭКГ у пациента</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'3_1'} value={"true"} onChange={(str) => setTakeECG(str)} name={"takeECG"} currentValue={takeECG} />
                                <RadioButtonFalse id={'3_2'} value={"false"} onChange={(str) => setTakeECG(str)} name={"takeECG"} currentValue={takeECG}/>
                                {/* <RadioButtonUnknow id={'3_3'} value={"unknow"} onChange={(str) => setTakeECG(str)} name={"takeECG"} currentValue={takeECG}/> */}
                            </td>
                        </tr>

                    </tbody>
                </table>
{/* 
                <CheckBox id={"2"} checked={intravenousAccessEstablished} onChange={(e) => setIntravenousAccessEstablished(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Установлен <strong>внутривенный доступ</strong></span> <br/>
                        <span className={s.subtitle}>(предпочтительно 2 канюли большого диаметра с портом)</span>
                    </div>
                </CheckBox> 
                <CheckBox id={"3"} checked={takesAnticoagulants} onChange={(e) => setTakesAnticoagulants(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Пациент принимает <strong>антикоагулянты</strong></span>
                    </div>
                </CheckBox>
                <CheckBox id={"4"} checked={takeECG} onChange={(e) => setTakeECG(e.target.checked)}>
                    <div className={s.checkbox}>
                        <span className={s.title}>Снимите ЭКГ у пациента</span>
                    </div>
                </CheckBox>
                */}
            </div>
        </div>
    );
};
