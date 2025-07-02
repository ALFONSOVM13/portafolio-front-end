"use client";

import React from 'react';
import styles from './About.module.scss';
import Title from "@/components/UI/Elements/Title/Title";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import SeattleMap from "@/components/UI/Cards/SeattleMap/SeattleMap";
import Stats from "@/components/UI/Cards/Stats/Stats";
import ParallaxImage from "@/components/UI/ParallaxImage/ParallaxImage";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>Soy</span> <br/>
                        un Front-End Creativo
                    </Title>
                    <TextReveal className={styles.description}>
                        Me describo como un desarrollador web creativo con más de 1 año de experiencia en desarrollo.
                    </TextReveal>
                </header>

                <ParallaxImage src={"/gallery/IMG-20190712-WA0010.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20210713_103018.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />

                <Stats className={styles.stats} />

            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <TextReveal className={styles.description}>
                        He trabajado en diseño de interfaz de usuario y desarrollo front-end, por lo que puedo entender bien los diseños y ayudar al equipo a comunicarse efectivamente.
                    </TextReveal>
                </header>
                <ParallaxImage src={"/gallery/IMG_20230325_154428.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/G0062517.JPG"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20220129_133838.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20220821_193826.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <TextReveal className={styles.description}>
                    Actualmente, vivo en Barranquilla. En mi vida personal, me gusta viajar con mi esposa y mi hija, ver películas y jugar videojuegos.
                    </TextReveal>
                </header>
                <ParallaxImage src={"/gallery/IMG_20231225_165326.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <SeattleMap className={styles.map} />
                <ParallaxImage src={"/gallery/IMG_20231210_140134.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20230420_161256.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
            </div>
        </section>
    );
}