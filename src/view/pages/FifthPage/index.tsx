import s from './index.module.scss';
import { FifthSection } from "../../components/FifthSection";
import { useEffect } from 'react';

export const FifthPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className={s.FifthPage}>
            <FifthSection />
        </div>
    );
};
