import s from './index.module.scss';
import { FourthSection } from "../../components/FourthSection";
import { useEffect } from 'react';

export const FourthPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className={s.FourthPage}>
            <FourthSection/>
        </div>
    );
};
