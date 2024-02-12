import s from './index.module.scss';
import { SecondSection } from "../../components/SecondSection";

export const SecondPage = () => {
    return (
        <div className={s.SecondPage}>
            <SecondSection />
        </div>
    );
};
