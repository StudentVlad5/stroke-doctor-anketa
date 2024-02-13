import s from './index.module.scss';
import { CheckBox } from "../../ui/CheckBox";
import { Title } from "../../ui/Title";
// import {InputTime} from "../../ui/InputTime";
import {useEffect, useMemo, useState} from "react";
import {useDebounce} from "../../../common/helpers/useDebounceHook";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import {QuizState} from "../../../store/reducers/quiz.reducer";

export const FourthSection = () => {
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizList } = useAppSelector(QuizState);

    const [intracranialHemorrhages, setIntracranialHemorrhages] = useState<boolean>(quizList.intracranialHemorrhages === 'true' ? true : quizList.intracranialHemorrhages === 'false' ? false : false);
    const [majorSurgeriesOrSevereInjuries, setMajorSurgeriesOrSevereInjuries] = useState<boolean>(quizList.majorSurgeriesOrSevereInjuries === 'true' ? true : quizList.majorSurgeriesOrSevereInjuries === 'false' ? false : false);
    const [surgicalInterventions, setSurgicalInterventions] = useState<boolean>(quizList.surgicalInterventions === 'true' ? true : quizList.surgicalInterventions === 'false' ? false : false);
    const [myocardialInfarction, setMyocardialInfarction] = useState<boolean>(quizList.myocardialInfarction === 'true' ? true : quizList.myocardialInfarction === 'false' ? false : false);
    const [stroke, setStroke] = useState<boolean>(quizList.stroke === 'true' ? true : quizList.stroke === 'false' ? false : false);
    const [arterialPuncture, setArterialPuncture] = useState<boolean>(quizList.arterialPuncture === 'true' ? true : quizList.arterialPuncture === 'false' ? false : false);

    const debouncedIntracranialHemorrhages = useDebounce(intracranialHemorrhages, 500);
    const debouncedMajorSurgeriesOrSevereInjuries = useDebounce(majorSurgeriesOrSevereInjuries, 500);
    const debouncedSurgicalInterventions = useDebounce(surgicalInterventions, 500);
    const debouncedMyocardialInfarction = useDebounce(myocardialInfarction, 500);
    const debouncedStroke = useDebounce(stroke, 500);
    const debouncedArterialPuncture = useDebounce(arterialPuncture, 500);

    useMemo(() => {
        if (quizList) {
            setIntracranialHemorrhages(quizList.intracranialHemorrhages === 'true' ? true : quizList.intracranialHemorrhages === 'false' ? false : false)
            setMajorSurgeriesOrSevereInjuries(quizList.majorSurgeriesOrSevereInjuries === 'true' ? true : quizList.majorSurgeriesOrSevereInjuries === 'false' ? false : false)
            setSurgicalInterventions(quizList.surgicalInterventions === 'true' ? true : quizList.surgicalInterventions === 'false' ? false : false)
            setMyocardialInfarction(quizList.myocardialInfarction === 'true' ? true : quizList.myocardialInfarction === 'false' ? false : false)
            setStroke(quizList.stroke === 'true' ? true : quizList.stroke === 'false' ? false : false)
            setArterialPuncture(quizList.arterialPuncture === 'true' ? true : quizList.arterialPuncture === 'false' ? false : false)
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

    return (
        <div className={s.FourthSection}>
            <Title>Раздел 4: Соберите анамнез</Title>

            <div className={s.inner}>
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
            </div>
        </div>
    );
};
