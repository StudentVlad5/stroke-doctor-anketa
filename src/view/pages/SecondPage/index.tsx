import s from './index.module.scss';
import { SecondSection } from "../../components/SecondSection";
import { useEffect } from 'react';

export const SecondPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className={s.SecondPage}>
            <SecondSection />
        </div>
    );
};
