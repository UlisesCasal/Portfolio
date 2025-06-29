import BlurText from '../blocks/TextAnimations/BlurText/BlurText.jsx';
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText.jsx';

export default function Header() {
    return (
        <>
        <div className="header flex items-center justify-center min-h-[60vh]">
            <div className="header__left">
                <div className="header__left__title">
                    <BlurText
                        text="Ulises Casal"
                        delay={300}
                        animateBy="words"
                        direction="top"
                        className="text-[4rem] md:text-[5rem] font-extrabold leading-tight text-white" />
                    
                    <div className="flex items-center gap-4">
                        <ShinyText text="SAP Developer" speed={3} className='text-3xl md:text-5xl' /> 
                        <img src="/images/SAPLogo.svg" alt="SAP Logo" className="w-[60px] h-[60px] object-contain" />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}