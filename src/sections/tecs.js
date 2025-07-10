import ScrollReveal from '../blocks/TextAnimations/ScrollReveal/ScrollReveal.jsx'
import FlowingMenu from '../blocks/Components/FlowingMenu/FlowingMenu.jsx'
export default function Tecs() {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    ];
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
                Knowledge
            </ScrollReveal>
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                {`Poseo conocimiento en el desarrollo de soluciones a medida usando tecnologias como SAP, BTP, ABAP, SAPUI5, Fiori, CAP, Java`}
            </ScrollReveal>
            <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div>
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={3}
                blurStrength={8}
                containerClassName="mb-16 mt-40"
                textClassName="text-6xl font-extrabold"
            >
                Experiencia
            </ScrollReveal>


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