import s from "./index.module.scss";
import { Title } from "../../ui/Title";
import { CheckBox } from "../../ui/CheckBox";
import { InputTime } from "../../ui/InputTime";
import { useEffect, useState } from "react";
import { useAppSelector, useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";
// import {useDebounce} from "../../../common/helpers/useDebounceHook";
import { QuizState } from "../../../store/reducers/quiz.reducer";
import { InputDate } from "../../ui/InputDate";


export const MethodologyFAST = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);

  const [saggingFace, setSaggingFace] = useState(false);
  const [handDisplacement, setHandDisplacement] = useState(false);
  const [speechDisorders, setSpeechDisorders] = useState(false);
  const [lossOfBalance, setLossOfBalance] = useState(false);
  const [visionProblems, setVisionProblems] = useState(false);

  const [firstSymptomsTimeHh, setFirstSymptomsTimeHh] = useState<string>("");
  const [firstSymptomsTimeMm, setFirstSymptomsTimeMm] = useState<string>("");
  const [firstSymptomsDate, setFirstSymptomsDate] = useState<string>("");
  const [firstSymptomsTime_unknown, setFirstSymptomsTime_unknown] =
    useState(false);
  const [firstSymptomsDate_unknown, setFirstSymptomsDate_unknown] =
    useState(false);
  const start_time_auto = localStorage.getItem("start_time_auto");
  const start_date_auto = new Date(Number(localStorage.getItem("id"))).toLocaleDateString().split(".").reverse().join('-');

  const onChangeHandler = (e: any, setValue: any) => {
    setValue(e.target.checked);
  };

  useEffect(() => {
    quizList?.saggingFace
      ? setSaggingFace(JSON.parse(quizList?.saggingFace))
      : setSaggingFace(false);
    quizList?.handDisplacement
      ? setHandDisplacement(JSON.parse(quizList?.handDisplacement))
      : setHandDisplacement(false);
    quizList?.speechDisorders
      ? setSpeechDisorders(JSON.parse(quizList?.speechDisorders))
      : setSpeechDisorders(false);
    quizList?.lossOfBalance
      ? setLossOfBalance(JSON.parse(quizList?.lossOfBalance))
      : setLossOfBalance(false);
    quizList?.visionProblems
      ? setVisionProblems(JSON.parse(quizList?.visionProblems))
      : setVisionProblems(false);
    quizList?.firstSymptomsTimeHh
      ? setFirstSymptomsTimeHh(quizList?.firstSymptomsTimeHh)
      : setFirstSymptomsTimeHh("");
    quizList?.firstSymptomsTimeMm
      ? setFirstSymptomsTimeMm(quizList?.firstSymptomsTimeMm)
      : setFirstSymptomsTimeMm("");
    quizList?.firstSymptomsDate
      ? setFirstSymptomsDate(quizList?.firstSymptomsDate)
      : setFirstSymptomsDate("");
    quizList?.firstSymptomsTime_unknown
      ? setFirstSymptomsTime_unknown(
          JSON.parse(quizList?.firstSymptomsTime_unknown)
        )
      : setFirstSymptomsTime_unknown(false);
    quizList?.firstSymptomsDate_unknown
      ? setFirstSymptomsDate_unknown(
          JSON.parse(quizList?.firstSymptomsDate_unknown)
        )
      : setFirstSymptomsDate_unknown(false);
  }, [
    quizList?.firstSymptomsTimeHh,
    quizList?.firstSymptomsTimeMm,
    quizList?.firstSymptomsDate,
    quizList?.handDisplacement,
    quizList?.saggingFace,
    quizList?.speechDisorders,
    quizList?.lossOfBalance,
    quizList?.visionProblems,
    quizList?.firstSymptomsTime_unknown,
    quizList?.firstSymptomsDate_unknown,
  ]);

  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

  return (
    <div className={s.MethodologyFAST}>
      <Title>Методика BE FAST</Title>
      <div className={s.inner}>
        <div className={s.checkBoxBlock}>
          <CheckBox
            id={"1"}
            checked={lossOfBalance}
            onChange={(e) => {
              onChangeHandler(e, setLossOfBalance);
              onBlurHandler("lossOfBalance", e.target.checked);
            }}
          >
            <span className={s.title}>
              Потеря равновесия (трудности с координацией)
            </span>
          </CheckBox>

          <CheckBox
            id={"2"}
            checked={visionProblems}
            onChange={(e) => {
              onChangeHandler(e, setVisionProblems);
              onBlurHandler("visionProblems", e.target.checked);
            }}
          >
            <span className={s.title}>
              Проблемы со зрением, двоение в глазах
            </span>
          </CheckBox>

          <CheckBox
            id={"3"}
            checked={saggingFace}
            onChange={(e) => {
              onChangeHandler(e, setSaggingFace);
              onBlurHandler("saggingFace", e.target.checked);
            }}
          >
            <span className={s.title}>Провисание на лице</span>
          </CheckBox>

          <CheckBox
            id={"4"}
            checked={handDisplacement}
            onChange={(e) => {
              onChangeHandler(e, setHandDisplacement);
              onBlurHandler("handDisplacement", e.target.checked);
            }}
          >
            <span className={s.title}>Смещение рук</span>
          </CheckBox>

          <CheckBox
            id={"5"}
            checked={speechDisorders}
            onChange={(e) => {
              onChangeHandler(e, setSpeechDisorders);
              onBlurHandler("speechDisorders", e.target.checked);
            }}
          >
            <span className={s.title}>Нарушения речи</span>
          </CheckBox>
        </div>
        <div className={s.timeBlock}>
          <InputTime
            title={"Введите дату и время появления первых симптомов"}
            valueHh={firstSymptomsTimeHh}
            valueMm={firstSymptomsTimeMm}
            onChangeHh={(str) => setFirstSymptomsTimeHh(str)}
            onChangeMm={(str) => setFirstSymptomsTimeMm(str)}
            onBlurHh={() => {
              localStorage.setItem(
                "start_time",
                `${firstSymptomsTimeHh ?? "00"}:${firstSymptomsTimeMm ?? "00"}`
              );
              onBlurHandler("firstSymptomsTimeHh", firstSymptomsTimeHh ?? "00");
            }}
            onBlurMm={() => {
              localStorage.setItem(
                "start_time",
                `${firstSymptomsTimeHh ?? "00"}:${firstSymptomsTimeMm ?? "00"}`
              );
              onBlurHandler("firstSymptomsTimeMm", firstSymptomsTimeMm ?? "00");
            }}
          />

          <InputDate
            valueDate={firstSymptomsDate}
            onChangeDate={(e) => setFirstSymptomsDate(e.target.value)}
            onBlur={() => {
              onBlurHandler("firstSymptomsDate", firstSymptomsDate ?? "");
              onBlurHandler("firstSymptomsDate_unknown", false);
            }}
          />
        </div>

        <div className={s.unknownBox}>
          <CheckBox
            id={"6"}
            checked={firstSymptomsTime_unknown}
            onChange={(e) => {
              onChangeHandler(e, setFirstSymptomsTime_unknown);
              // localStorage.setItem(
              //   "start_time", "00:00");
              // onBlurHandler("firstSymptomsTimeHh", "00");
              // onBlurHandler("firstSymptomsTimeMm", "00");
              onBlurHandler("firstSymptomsTime_unknown", e.target.checked);
              // firstSymptomsTime_unknown && onBlurHandler("firstSymptomsDate_unknown", false);
            }}
          >
            <span className={s.title}>время не известно</span>
          </CheckBox>

          <CheckBox
            id={"7"}
            checked={firstSymptomsDate_unknown}
            onChange={(e) => {
              onChangeHandler(e, setFirstSymptomsDate_unknown);
              onBlurHandler("firstSymptomsDate_unknown", e.target.checked);
              // !firstSymptomsDate_unknown ? localStorage.setItem(
              //   "start_time", `${start_time_auto}`) : localStorage.setItem(
              //   "start_time", `${firstSymptomsTimeHh}:${firstSymptomsTimeMm}`);
              //   !firstSymptomsDate_unknown &&  setFirstSymptomsDate(start_date_auto);
              //   !firstSymptomsDate_unknown && onBlurHandler("firstSymptomsDate", start_date_auto);
              //   !firstSymptomsDate_unknown && onBlurHandler("firstSymptomsTime_unknown", true);
              //   !firstSymptomsDate_unknown && onBlurHandler("firstSymptomsTimeHh", `${localStorage.getItem("start_time")?.split(":")[0]}`);
              //   !firstSymptomsDate_unknown && onBlurHandler("firstSymptomsTimeMm", `${localStorage.getItem("start_time")?.split(":")[1]}`);

            }}
          >
            <span className={s.title}>дата не известна</span>
          </CheckBox>
        </div>
      </div>
    </div>
  );
};
