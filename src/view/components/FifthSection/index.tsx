import s from "./index.module.scss";
import { Title } from "../../ui/Title";
import { useEffect, useState } from "react";
import { CheckBox } from "../../ui/CheckBox";
// import { InputTime } from "../../ui/InputTime";
// import { InputText } from "../../ui/InputText";
// import { InputNumber } from "../../ui/InputNumber";
// import { useDebounce } from "../../../common/helpers/useDebounceHook";
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
  // quizList?.smallOperations === "true"
  //   ? "true"
  //   : quizList?.smallOperations === "false"
  //   ? "false"
  //   : "unknow"
  const [cardiovascularDiseases, setCardiovascularDiseases] = useState<any>();

  const [acuteInfectiousDisease, setAcuteInfectiousDisease] = useState<any>();
  const [hemorrhages, setHemorrhages] = useState<any>();
  const [onmk, setOnmk] = useState<any>();
  const [convulsions, setConvulsions] = useState<any>();
  const [hemorrhagicStroke, setHemorrhagicStroke] = useState<boolean>();
  // quizList?.hemorrhagicStroke === "true"
  //   ? true
  //   : quizList?.hemorrhagicStroke === "false"
  //   ? false
  //   : false
  const [SACStroke, setSACStroke] = useState<boolean>();
  const [ischemicStroke, setIschemicStroke] = useState<boolean>();
  const [noteChecklistSMP, setNoteChecklistSMP] = useState<string>("");

  // const [medicalStaffFullName, setMedicalStaffFullName] = useState<string>('');
  // const [employeeID, setEmployeeID] = useState<string>('');
  // const [invalidMessage, setInvalidMessage] = useState('');

  //   const debouncedSmallOperations = useDebounce(smallOperations, 500);
  //   const debouncedCardiovascularDiseases = useDebounce(
  //     cardiovascularDiseases,
  //     500
  //   );
  //   const debouncedAcuteInfectiousDisease = useDebounce(
  //     acuteInfectiousDisease,
  //     500
  //   );
  //   const debouncedHemorrhages = useDebounce(hemorrhages, 500);
  //   const debouncedConvulsions = useDebounce(convulsions, 500);
  //   const debouncedHemorrhagicStroke = useDebounce(hemorrhagicStroke, 500);
  //   const debouncedSACStroke = useDebounce(SACStroke, 500);
  //   const debouncedIschemicStroke = useDebounce(ischemicStroke, 500);
  //   const debouncedIschemicOnmk = useDebounce(onmk, 500);
  //   const debouncedNoteChecklistSMP = useDebounce(noteChecklistSMP, 500);

  // const debouncedMedicalStaffFullName = useDebounce(medicalStaffFullName, 500);
  // const debouncedEmployeeID = useDebounce(employeeID, 500);

  // useMemo(() => {
  //     if (employeeID && employeeID.length !== 5) setInvalidMessage('Введите 5 символов')
  //     else setInvalidMessage('')
  // }, [employeeID])

  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

  //   useMemo(() => {
  //     if (quizList) {
  //       //   setSmallOperations(
  //       //     quizList?.smallOperations === "true"
  //       //       ? "true"
  //       //       : quizList?.smallOperations === "false"
  //       //       ? "false"
  //       //       : "unknow"
  //       //   );
  //       //   setCardiovascularDiseases(
  //       //     quizList?.cardiovascularDiseases === "true"
  //       //       ? "true"
  //       //       : quizList?.cardiovascularDiseases === "false"
  //       //       ? "false"
  //       //       : "unknow"
  //       //   );
  //       //   setAcuteInfectiousDisease(
  //       //     quizList?.acuteInfectiousDisease === "true"
  //       //       ? "true"
  //       //       : quizList?.acuteInfectiousDisease === "false"
  //       //       ? "false"
  //       //       : "unknow"
  //       //   );
  //       //   setHemorrhages(
  //       //     quizList?.hemorrhages === "true"
  //       //       ? "true"
  //       //       : quizList?.hemorrhages === "false"
  //       //       ? "false"
  //       //       : "unknow"
  //       //   );
  //     //   setConvulsions(
  //     //     quizList?.convulsions === "true"
  //     //       ? "true"
  //     //       : quizList?.convulsions === "false"
  //     //       ? "false"
  //     //       : "unknow"
  //     //   );
  //     //   setHemorrhagicStroke(
  //     //     quizList?.hemorrhagicStroke === "true"
  //     //       ? true
  //     //       : quizList?.hemorrhagicStroke === "false"
  //     //       ? false
  //     //       : false
  //     //   );
  //     //   setSACStroke(
  //     //     quizList?.SACStroke === "true"
  //     //       ? true
  //     //       : quizList?.SACStroke === "false"
  //     //       ? false
  //     //       : false
  //     //   );
  //     //   setIschemicStroke(
  //     //     quizList?.ischemicStroke === "true"
  //     //       ? true
  //     //       : quizList?.ischemicStroke === "false"
  //     //       ? false
  //     //       : false
  //     //   );
  //       //   setOnmk(
  //       //     quizList?.onmk === "true"
  //       //       ? "true"
  //       //       : quizList?.onmk === "false"
  //       //       ? "false"
  //       //       : "unknow"
  //       //   );
  //       //   setNoteChecklistSMP(
  //       //     quizList?.noteChecklistSMP ? quizList.noteChecklistSMP : ""
  //       //   );
  //       // setMedicalStaffFullName(quizList.medicalStaffFullName ?? '')
  //       // setEmployeeID(quizList.employeeID ?? '')
  //     }
  //   }, [quizList]);

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

  //   useEffect(
  //     () => {
  //       addQuizAnswerThunk({
  //         params: {
  //           // smallOperations: debouncedSmallOperations,
  //           // cardiovascularDiseases: debouncedCardiovascularDiseases,
  //           // acuteInfectiousDisease: debouncedAcuteInfectiousDisease,
  //           // hemorrhages: debouncedHemorrhages,
  //           // convulsions: debouncedConvulsions,
  //           // hemorrhagicStroke: debouncedHemorrhagicStroke,
  //           // SACStroke: debouncedSACStroke,
  //           // ischemicStroke: debouncedIschemicStroke,
  //           // onmk: debouncedIschemicOnmk,
  //           // noteChecklistSMP: debouncedNoteChecklistSMP,
  //         },
  //       });
  //     },
  //     [
  //       // debouncedSmallOperations,
  //       // debouncedCardiovascularDiseases,
  //       // debouncedAcuteInfectiousDisease,
  //       // debouncedHemorrhages,
  //       // debouncedConvulsions,
  //       // debouncedHemorrhagicStroke,
  //       // debouncedSACStroke,
  //       // debouncedIschemicStroke,
  //       // debouncedNoteChecklistSMP,
  //     ]
  //   );

  return (
    <div className={s.FifthSection}>
      <Title>Раздел 4: Соберите анамнез</Title>

      <div className={s.inner}>
        {/* <CheckBox id={"1"} checked={smallOperations} onChange={e => setSmallOperations(e.target.checked)}>
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
                */}

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
                  Кровоизлияния в ЖКТ и мочевыводящих путях не позднее 21 дня до
                  инсульта
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
