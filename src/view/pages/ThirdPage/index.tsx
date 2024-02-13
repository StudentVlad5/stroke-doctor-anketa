import s from './index.module.scss';
import { ThirdSection } from "../../components/ThirdSection";
import { useEffect } from 'react';

export const ThirdPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className={s.ThirdPage}>
            <ThirdSection />
        </div>
    );
};
