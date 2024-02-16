import s from "./index.module.scss";
import { Title } from "../../ui/Title";
import { useEffect, useState } from "react";
import { CheckBox } from "../../ui/CheckBox";
import { useAppSelector, useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../store/reducers/quiz.reducer";
import {
  RadioButtonFalse,
  RadioButtonTrue,
  RadioButtonUnknow,
} from "../../ui/RadioButtonWithoutSpan";
import { Textarea } from "../../ui/Textarea";

export const FifthSection = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);

  const [smallOperations, setSmallOperations] = useState<any>();
  const [cardiovascularDiseases, setCardiovascularDiseases] = useState<any>();
  const [acuteInfectiousDisease, setAcuteInfectiousDisease] = useState<any>();
  const [hemorrhages, setHemorrhages] = useState<any>();
  const [onmk, setOnmk] = useState<any>();
  const [convulsions, setConvulsions] = useState<any>();
  const [hemorrhagicStroke, setHemorrhagicStroke] = useState<boolean>(false);
  const [SACStroke, setSACStroke] = useState<boolean>(false);
  const [ischemicStroke, setIschemicStroke] = useState<boolean>(false);
  const [noteChecklistSMP, setNoteChecklistSMP] = useState<string>("");

  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

 
  useEffect(() => {
    quizList?.smallOperations
      ? setSmallOperations(
          quizList?.smallOperations === "true"
            ? "true"
            : quizList?.smallOperations === "false"
            ? "false"
            : "unknow"
        )
      : setSmallOperations("");

    quizList?.cardiovascularDiseases
      ? setCardiovascularDiseases(
          quizList?.cardiovascularDiseases === "true"
            ? "true"
            : quizList?.cardiovascularDiseases === "false"
            ? "false"
            : "unknow"
        )
      : setCardiovascularDiseases("");

    quizList?.acuteInfectiousDisease
      ? setAcuteInfectiousDisease(
          quizList?.acuteInfectiousDisease === "true"
            ? "true"
            : quizList?.acuteInfectiousDisease === "false"
            ? "false"
            : "unknow"
        )
      : setAcuteInfectiousDisease("");

    quizList?.hemorrhages
      ? setHemorrhages(
          quizList?.hemorrhages === "true"
            ? "true"
            : quizList?.hemorrhages === "false"
            ? "false"
            : "unknow"
        )
      : setHemorrhages("");

    quizList?.convulsions
      ? setConvulsions(
          quizList?.convulsions === "true"
            ? "true"
            : quizList?.convulsions === "false"
            ? "false"
            : "unknow"
        )
      : setConvulsions("");

    quizList?.onmk
      ? setOnmk(
          quizList?.onmk === "true"
            ? "true"
            : quizList?.onmk === "false"
            ? "false"
            : "unknow"
        )
      : setOnmk("");

    quizList?.hemorrhagicStroke
      ? setHemorrhagicStroke(
          quizList?.hemorrhagicStroke === "true"
            ? true
            : quizList?.hemorrhagicStroke === "true"
            ? false
            : false
        )
      : setHemorrhagicStroke(false);

    quizList?.SACStroke
      ? setSACStroke(
          quizList?.SACStroke === "true"
            ? true
            : quizList?.SACStroke === "true"
            ? false
            : false
        )
      : setSACStroke(false);

    quizList?.ischemicStroke
      ? setIschemicStroke(
          quizList?.ischemicStroke === "true"
            ? true
            : quizList?.ischemicStroke === "true"
            ? false
            : false
        )
      : setIschemicStroke(false);

    quizList?.noteChecklistSMP
      ? setNoteChecklistSMP(quizList?.noteChecklistSMP)
      : setNoteChecklistSMP("");
  }, [quizList?.noteChecklistSMP, quizList?.onmk, quizList?.smallOperations, quizList?.cardiovascularDiseases, quizList?.acuteInfectiousDisease, quizList?.hemorrhages, quizList?.convulsions, quizList?.hemorrhagicStroke, quizList?.SACStroke, quizList?.ischemicStroke]);

  return (
    <div className={s.FifthSection}>
      <Title>Раздел 4: Соберите анамнез</Title>

      <div className={s.inner}>
          <table>
          <tbody>
            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                  Малые операции или инвазивные вмешательства в последние 10
                  дней
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButtonTrue
                  id={"1_1"}
                  value={"true"}
                  onChange={(str) => {
                    setSmallOperations(str);
                    onBlurHandler("smallOperations", str);
                  }}
                  name={"smallOperations"}
                  currentValue={smallOperations}
                />
                <RadioButtonFalse
                  id={"1_2"}
                  value={"false"}
                  onChange={(str) => {
                    setSmallOperations(str);
                    onBlurHandler("smallOperations", str);
                  }}
                  name={"smallOperations"}
                  currentValue={smallOperations}
                />
                <RadioButtonUnknow
                  id={"1_3"}
                  value={"unknow"}
                  onChange={(str) => {
                    setSmallOperations(str);
                    onBlurHandler("smallOperations", str);
                  }}
                  name={"smallOperations"}
                  currentValue={smallOperations}
                />
              </td>
            </tr>

            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                  Сердечно-сосудистые заболевания <br />{" "}
                  <small>
                    (подострый бактериальный эндокардит, острый перикардит)
                  </small>
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButtonTrue
                  id={"2_1"}
                  value={"true"}
                  onChange={(str) => {
                    setCardiovascularDiseases(str);
                    onBlurHandler("cardiovascularDiseases", str);
                  }}
                  name={"cardiovascularDiseases"}
                  currentValue={cardiovascularDiseases}
                />
                <RadioButtonFalse
                  id={"2_2"}
                  value={"false"}
                  onChange={(str) => {
                    setCardiovascularDiseases(str);
                    onBlurHandler("cardiovascularDiseases", str);
                  }}
                  name={"cardiovascularDiseases"}
                  currentValue={cardiovascularDiseases}
                />
                <RadioButtonUnknow
                  id={"2_3"}
                  value={"unknow"}
                  onChange={(str) => {
                    setCardiovascularDiseases(str);
                    onBlurHandler("cardiovascularDiseases", str);
                  }}
                  name={"cardiovascularDiseases"}
                  currentValue={cardiovascularDiseases}
                />
              </td>
            </tr>

            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>Острое инфекционное заболевание</span>
              </td>
              <td className={s.tdButton}>
                <RadioButtonTrue
                  id={"3_1"}
                  value={"true"}
                  onChange={(str) => {
                    setAcuteInfectiousDisease(str);
                    onBlurHandler("acuteInfectiousDisease", str);
                  }}
                  name={"acuteInfectiousDisease"}
                  currentValue={acuteInfectiousDisease}
                />
                <RadioButtonFalse
                  id={"3_2"}
                  value={"false"}
                  onChange={(str) => {
                    setAcuteInfectiousDisease(str);
                    onBlurHandler("acuteInfectiousDisease", str);
                  }}
                  name={"acuteInfectiousDisease"}
                  currentValue={acuteInfectiousDisease}
                />
                <RadioButtonUnknow
                  id={"3_3"}
                  value={"unknow"}
                  onChange={(str) => {
                    setAcuteInfectiousDisease(str);
                    onBlurHandler("acuteInfectiousDisease", str);
                  }}
                  name={"acuteInfectiousDisease"}
                  currentValue={acuteInfectiousDisease}
                />
              </td>
            </tr>

            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                  Кровоизлияния в ЖКТ и мочевыводящих путях не позднее 21 дня до
                  инсульта
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButtonTrue
                  id={"4_1"}
                  value={"true"}
                  onChange={(str) => {
                    setHemorrhages(str);
                    onBlurHandler("hemorrhages", str);
                  }}
                  name={"hemorrhages"}
                  currentValue={hemorrhages}
                />
                <RadioButtonFalse
                  id={"4_2"}
                  value={"false"}
                  onChange={(str) => {
                    setHemorrhages(str);
                    onBlurHandler("hemorrhages", str);
                  }}
                  name={"hemorrhages"}
                  currentValue={hemorrhages}
                />
                <RadioButtonUnknow
                  id={"4_3"}
                  value={"unknow"}
                  onChange={(str) => {
                    setHemorrhages(str);
                    onBlurHandler("hemorrhages", str);
                  }}
                  name={"hemorrhages"}
                  currentValue={hemorrhages}
                />
              </td>
            </tr>

            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                Судорожные приступы в дебюте заболевания 
                <br/>(имеется связь с острой церебральной ишемией)
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButtonTrue
                  id={"5_1"}
                  value={"true"}
                  onChange={(str) => {
                    setConvulsions(str);
                    onBlurHandler("convulsions", str);
                  }}
                  name={"convulsions"}
                  currentValue={convulsions}
                />
                <RadioButtonFalse
                  id={"5_2"}
                  value={"false"}
                  onChange={(str) => {
                    setConvulsions(str);
                    onBlurHandler("convulsions", str);
                  }}
                  name={"convulsions"}
                  currentValue={convulsions}
                />
                <RadioButtonUnknow
                  id={"5_3"}
                  value={"unknow"}
                  onChange={(str) => {
                    setConvulsions(str);
                    onBlurHandler("convulsions", str);
                  }}
                  name={"convulsions"}
                  currentValue={convulsions}
                />
              </td>
            </tr>

            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>ОНМК ранее:</span>
              </td>
              <td className={s.tdButton}>
                <RadioButtonTrue
                  id={"6_1"}
                  value={"true"}
                  onChange={(str) => {
                    setOnmk(str);
                    onBlurHandler("onmk", str);
                  }}
                  name={"onmk"}
                  currentValue={onmk}
                />
                <RadioButtonFalse
                  id={"6_2"}
                  value={"false"}
                  onChange={(str) => {
                    setOnmk(str);
                    onBlurHandler("onmk", str);
                  }}
                  name={"onmk"}
                  currentValue={onmk}
                />
                <RadioButtonUnknow
                  id={"6_3"}
                  value={"unknow"}
                  //   onChange={(str) => setOnmk(str)}
                  onChange={(str) => {
                    setOnmk(str);
                    onBlurHandler("onmk", str);
                  }}
                  name={"onmk"}
                  currentValue={onmk}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className={s.whiteBox}>
          <span className={s.title}></span>
          <div className={s.checkboxWrapper}>
            <CheckBox
              className={s.check}
              id={"6"}
              checked={hemorrhagicStroke}
              onChange={(e) => {
                setHemorrhagicStroke(e.target.checked);
                onBlurHandler("hemorrhagicStroke", e.target.checked);
              }}
            >
              Гемморагический
            </CheckBox>
            <CheckBox
              className={s.check}
              id={"7"}
              checked={SACStroke}
              onChange={(e) => {
                setSACStroke(e.target.checked);
                onBlurHandler("SACStroke", e.target.checked);
              }}
            >
              САК
            </CheckBox>
            <CheckBox
              className={s.check}
              id={"8"}
              checked={ischemicStroke}
              onChange={(e) => {
                setIschemicStroke(e.target.checked);
                onBlurHandler("ischemicStroke", e.target.checked);
              }}
            >
              Ишемический инсульт
            </CheckBox>
          </div>
        </div>

        <div>
          <Textarea
            className={s.textarea}
            title={"Примечание к чек-листу от СМП"}
            value={noteChecklistSMP}
            onChange={(e) => setNoteChecklistSMP(e.target.value)}
            onBlur={() => {
              onBlurHandler("noteChecklistSMP", noteChecklistSMP ?? "");
            }}
          />
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
