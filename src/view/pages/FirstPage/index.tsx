import s from './index.module.scss';
import { FirstSection } from "../../components/FirstSection";
import { MethodologyFAST } from "../../components/MethodologyFAST";
import { useEffect } from 'react';

export const FirstPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className={s.FirstPage}>
            <FirstSection />
            <MethodologyFAST />
        </div>
    );
};
