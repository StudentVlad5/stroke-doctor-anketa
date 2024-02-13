import s from './index.module.scss';
// import { CheckBox } from "../../ui/CheckBox";
import { Title } from "../../ui/Title";
// import {InputTime} from "../../ui/InputTime";
import {useEffect, useMemo, useState} from "react";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {QuizState} from "../../../store/reducers/quiz.reducer";
import { RadioButtonTrue, RadioButtonFalse, RadioButtonUnknow } from '../../ui/RadioButtonWithoutSpan';



export const FourthSection = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);

    const [intracranialHemorrhages, setIntracranialHemorrhages] = useState<any>(quizList.intracranialHemorrhages === 'true' ? 'true' : quizList.intracranialHemorrhages === 'false' ? 'false' : 'unknow');
    const [majorSurgeriesOrSevereInjuries, setMajorSurgeriesOrSevereInjuries] = useState<any>(quizList.majorSurgeriesOrSevereInjuries === 'true' ? 'true' : quizList.majorSurgeriesOrSevereInjuries === 'false' ? 'false' : 'unknow');
    const [surgicalInterventions, setSurgicalInterventions] = useState<any>(quizList.surgicalInterventions === 'true' ? 'true' : quizList.surgicalInterventions === 'false' ? 'false' : 'unknow');
    const [myocardialInfarction, setMyocardialInfarction] = useState<any>(quizList.myocardialInfarction === 'true' ? 'true' : quizList.myocardialInfarction === 'false' ? 'false' : 'unknow');
    const [stroke, setStroke] = useState<any>(quizList.stroke === 'true' ? 'true' : quizList.stroke === 'false' ? 'false' : 'unknow');
    const [arterialPuncture, setArterialPuncture] = useState<any>(quizList.arterialPuncture === 'true' ? 'true' : quizList.arterialPuncture === 'false' ? 'false' : 'unknow');

    const debouncedIntracranialHemorrhages = useDebounce(intracranialHemorrhages, 500);
    const debouncedMajorSurgeriesOrSevereInjuries = useDebounce(majorSurgeriesOrSevereInjuries, 500);
    const debouncedSurgicalInterventions = useDebounce(surgicalInterventions, 500);
    const debouncedMyocardialInfarction = useDebounce(myocardialInfarction, 500);
    const debouncedStroke = useDebounce(stroke, 500);
    const debouncedArterialPuncture = useDebounce(arterialPuncture, 500);

    useMemo(() => {
        if (quizList) {
            setIntracranialHemorrhages(quizList.intracranialHemorrhages === 'true' ? 'true' : quizList.intracranialHemorrhages === 'false' ? 'false' : 'unknow')
            setMajorSurgeriesOrSevereInjuries(quizList.majorSurgeriesOrSevereInjuries === 'true' ? 'true' : quizList.majorSurgeriesOrSevereInjuries === 'false' ? 'false' : 'unknow')
            setSurgicalInterventions(quizList.surgicalInterventions === 'true' ? 'true' : quizList.surgicalInterventions === 'false' ? 'false' : 'unknow')
            setMyocardialInfarction(quizList.myocardialInfarction === 'true' ? 'true' : quizList.myocardialInfarction === 'false' ? 'false' : 'unknow')
            setStroke(quizList.stroke === 'true' ? 'true' : quizList.stroke === 'false' ? 'false' : 'unknow')
            setArterialPuncture(quizList.arterialPuncture === 'true' ? 'true' : quizList.arterialPuncture === 'false' ? 'false' : 'unknow')
        }
    }, [quizList])

    useEffect(() => {
        addQuizAnswerThunk({
            params: {
                intracranialHemorrhages: debouncedIntracranialHemorrhages,
                majorSurgeriesOrSevereInjuries: debouncedMajorSurgeriesOrSevereInjuries,
                surgicalInterventions: debouncedSurgicalInterventions,
                myocardialInfarction: debouncedMyocardialInfarction,
                stroke: debouncedStroke,
                arterialPuncture: debouncedArterialPuncture
            }
        })
    }, [debouncedIntracranialHemorrhages, debouncedMajorSurgeriesOrSevereInjuries, debouncedSurgicalInterventions, debouncedMyocardialInfarction, debouncedStroke, debouncedArterialPuncture]);
console.log("intracranialHemorrhages", intracranialHemorrhages);
    return (
        <div className={s.FourthSection}>
            <Title>Раздел 4: Соберите анамнез</Title>

            <div className={s.inner}>
                {/* 
                    <CheckBox id={"1"} checked={intracranialHemorrhages} onChange={e => setIntracranialHemorrhages(e.target.checked)}>
                        <div className={s.checkbox}>
                            <span className={s.title}>Внутричерепные кровоизлияния</span>
                        </div>
                    </CheckBox> 
                    <CheckBox id={"2"} checked={majorSurgeriesOrSevereInjuries} onChange={e => setMajorSurgeriesOrSevereInjuries(e.target.checked)}>
                        <div className={s.checkbox}>
                            <span className={s.title}>Большие операции или тяжелые травмы за последние 14 суток</span>
                        </div>
                    </CheckBox>
                    <CheckBox id={"3"} checked={surgicalInterventions} onChange={e => setSurgicalInterventions(e.target.checked)}>
                        <div className={s.checkbox}>
                            <span className={s.title}>Недавние внутричерепные или интраспинальные хирургические вмешательства</span>
                        </div>
                    </CheckBox>
                    <CheckBox id={"4"} checked={myocardialInfarction} onChange={e => setMyocardialInfarction(e.target.checked)}>
                        <div className={s.checkbox}>
                            <span className={s.title}>Инфаркт миокарда в предшествующие инсульту 3 месяца</span>
                        </div>
                    </CheckBox>
                    <CheckBox id={"5"} checked={stroke} onChange={e => setStroke(e.target.checked)}>
                        <div className={s.checkbox}>
                            <span className={s.title}>Инсульт в предшествующие инсульту 3 месяца</span>
                        </div>
                    </CheckBox>
                    <CheckBox id={"6"} checked={arterialPuncture} onChange={e => setArterialPuncture(e.target.checked)}>
                        <div className={s.checkbox}>
                            <span className={s.title}>Проведена пункция артерии в сложной для компрессии области в предшествующие инсульту 7 дней</span>
                        </div>
                    </CheckBox>
                                */}
                <table>
                    <tbody>
                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Внутричерепные кровоизлияния</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'1_1'} value={"true"} onChange={(str) => setIntracranialHemorrhages(str)} name={"intracranialHemorrhages"} currentValue={intracranialHemorrhages} />
                                <RadioButtonFalse id={'1_2'} value={"false"} onChange={(str) => setIntracranialHemorrhages(str)} name={"intracranialHemorrhages"} currentValue={intracranialHemorrhages}/>
                                <RadioButtonUnknow id={'1_3'} value={"unknow"} onChange={(str) => setIntracranialHemorrhages(str)} name={"intracranialHemorrhages"} currentValue={intracranialHemorrhages}/>
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Большие операции или тяжелые травмы за последние 14 суток</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'2_1'} value={"true"} onChange={(str) => setMajorSurgeriesOrSevereInjuries(str)} name={"majorSurgeriesOrSevereInjuries"} currentValue={majorSurgeriesOrSevereInjuries} />
                                <RadioButtonFalse id={'2_2'} value={"false"} onChange={(str) => setMajorSurgeriesOrSevereInjuries(str)} name={"majorSurgeriesOrSevereInjuries"} currentValue={majorSurgeriesOrSevereInjuries}/>
                                <RadioButtonUnknow id={'2_3'} value={"unknow"} onChange={(str) => setMajorSurgeriesOrSevereInjuries(str)} name={"majorSurgeriesOrSevereInjuries"} currentValue={majorSurgeriesOrSevereInjuries}/>
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Недавние внутричерепные или интраспинальные хирургические вмешательства</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'3_1'} value={"true"} onChange={(str) => setSurgicalInterventions(str)} name={"surgicalInterventions"} currentValue={surgicalInterventions} />
                                <RadioButtonFalse id={'3_2'} value={"false"} onChange={(str) => setSurgicalInterventions(str)} name={"surgicalInterventions"} currentValue={surgicalInterventions}/>
                                <RadioButtonUnknow id={'3_3'} value={"unknow"} onChange={(str) => setSurgicalInterventions(str)} name={"surgicalInterventions"} currentValue={surgicalInterventions}/>
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Инфаркт миокарда в предшествующие инсульту 3 месяца</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'4_1'} value={"true"} onChange={(str) => setMyocardialInfarction(str)} name={"myocardialInfarction"} currentValue={myocardialInfarction} />
                                <RadioButtonFalse id={'4_2'} value={"false"} onChange={(str) => setMyocardialInfarction(str)} name={"myocardialInfarction"} currentValue={myocardialInfarction}/>
                                <RadioButtonUnknow id={'4_3'} value={"unknow"} onChange={(str) => setMyocardialInfarction(str)} name={"myocardialInfarction"} currentValue={myocardialInfarction}/>
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Инсульт в предшествующие инсульту 3 месяца</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'5_1'} value={"true"} onChange={(str) => setStroke(str)} name={"stroke"} currentValue={stroke} />
                                <RadioButtonFalse id={'5_2'} value={"false"} onChange={(str) => setStroke(str)} name={"stroke"} currentValue={stroke}/>
                                <RadioButtonUnknow id={'5_3'} value={"unknow"} onChange={(str) => setStroke(str)} name={"stroke"} currentValue={stroke}/>
                            </td>
                        </tr>

                        <tr className={s.tableRow}>
                            <td className={s.checkbox}>
                                <span className={s.title}>Проведена пункция артерии в сложной для компрессии области в предшествующие инсульту 7 дней</span>
                            </td>
                            <td className={s.tdButton}>
                                <RadioButtonTrue id={'6_1'} value={"true"} onChange={(str) => setArterialPuncture(str)} name={"arterialPuncture"} currentValue={arterialPuncture} />
                                <RadioButtonFalse id={'6_2'} value={"false"} onChange={(str) => setArterialPuncture(str)} name={"arterialPuncture"} currentValue={arterialPuncture}/>
                                <RadioButtonUnknow id={'6_3'} value={"unknow"} onChange={(str) => setArterialPuncture(str)} name={"arterialPuncture"} currentValue={arterialPuncture}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
