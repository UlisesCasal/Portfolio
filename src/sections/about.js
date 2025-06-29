import ScrollReveal from '../blocks/TextAnimations/ScrollReveal/ScrollReveal.jsx'
import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery.jsx'
export default function About() {
    return (
        <section className="flex flex-col items-start justify-center min-h-screen scroll-smooth px-8">
            <div className="h-[60vh]"></div>
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={3}
                blurStrength={8}
                containerClassName="mb-16 mt-40"
                textClassName="text-6xl font-extrabold"
            >
                Sobre Mi
            </ScrollReveal>
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                {`Hola! Soy un SAP Developer con más de 3 años de experiencia en el mundo IT. Actualmente, me encuentro trabajando para un proyecto de Asia de Procter & Gamble (P&G) dentro de la consultura Artech. Ademas, poseo experiencia en grandes empresas desarrollando aplicaciones de alto impacto empresarial como Movistar`}
            </ScrollReveal>
            
                <CircularGallery bend={8} borderRadius={0.05} textColor="#ffffff" />
                <div className="w-full flex justify-center mt-2">
                    <span className="text-gray-400 text-lg italic">Desliza para ver más ➡️</span>
                </div>
            
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="mt-8"
            >
                {`En simultaneo, me encuentro estudiando la carrera de Lic. en Sistemas de Información en la Universidad Nacional de Luján`}
            </ScrollReveal>
        </section>
    )
}