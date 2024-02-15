import s from "./index.module.scss";
import { Button } from "../../ui/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";
import { Modal } from "../../ui/Modal";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { addQuizAnswerThunk } = useThunks(QuizThunks);

  const onClickNextBtnHandler = () => {
    navigate(`/${+location.pathname[1] + 1}`);
  };

  const onClickPrevBtnHandler = () => {
    navigate(`/${+location.pathname[1] - 1}`);
  };

  const onClickFinishBtnHandler = () => {
    addQuizAnswerThunk({
      params: {
        endTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      },
    });
    localStorage.removeItem("application_number");
    localStorage.removeItem("id");
    localStorage.removeItem("start_time");
    localStorage.removeItem("start_time_auto");
    setIsOpenModal(true);
  };

  const onClickSuccessButton = () => {
    navigate("/");
    setIsOpenModal(false);
  };

  const resetChecklist = () =>{
    addQuizAnswerThunk({
      params: {
        anketaStatus: 'canceled',
      },
    });
    localStorage.removeItem("application_number");
    localStorage.removeItem("id");
    localStorage.removeItem("start_time");
    localStorage.removeItem("start_time_auto");
    navigate("/");
  }

  return (
    <footer className={s.Footer}>
      {location.pathname !== "/1" ? (
        <Button onClick={onClickPrevBtnHandler} classname={s.prevBtn}>
          Назад
        </Button>
      ) : (
        <div style={{ width: "100%" }}></div>
      )}
      <div className={s.page}>{location.pathname[1]}/5</div>
      {location.pathname !== "/5" ? (
        <Button onClick={onClickNextBtnHandler} classname={s.nextBtn}>
          Дальше
        </Button>
      ) : (
        <>
          <Button classname={s.endBtn} onClick={onClickFinishBtnHandler}>
            Пациент передан
          </Button>

          <div  className={s.btnBox}>
            <Button classname={s.resetCheckList} onClick={resetChecklist}>Аннулировать чек-лист</Button>
          </div>
        </>
      )}
      <Modal
        isVisible={isOpenModal}
        notClose={true}
        content={<p>Чек-лист успешно заполнен и отправлен</p>}
        footer={
          <button className={s.successBtn} onClick={onClickSuccessButton}>
            Ок
          </button>
        }
      />
    </footer>
  );
};
