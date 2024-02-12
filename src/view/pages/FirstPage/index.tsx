import s from './index.module.scss';
import { FirstSection } from "../../components/FirstSection";
import { MethodologyFAST } from "../../components/MethodologyFAST";

export const FirstPage = () => {
    return (
        <div className={s.FirstPage}>
            <FirstSection />
            <MethodologyFAST />
        </div>
    );
};
