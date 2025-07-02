'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import styles from './BoldTitle.module.scss';
import Container from "@/components/UI/Layout/Layout";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function BoldTitle() {
    const boldTitle = useRef();
    const boldTitleLeft = useRef();
    const boldTitleRight = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const splitTextLeft = new SplitText(boldTitleLeft.current, {
            type: 'chars',
        });
        const splitTextRight = new SplitText(boldTitleRight.current, {
            type: 'chars',
        });


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: boldTitle.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });

        // BoldText
        tl.fromTo(boldTitleLeft.current, {
            xPercent: -50,
        }, {
            xPercent: -10,
        }, 0);
        tl.fromTo(boldTitleRight.current, {
            xPercent: 50,
        }, {
            xPercent: 10,
        }, 0);

    });

    return(

        <section className={styles.section}>
            <Container className={styles.grid}>
                <TextReveal className={styles.paragraph}>
                Con experiencia en diseño de interfaz de usuario (UI) y desarrollo front-end, facilito la comunicación efectiva en el equipo al comprender y traducir los diseños de forma precisa.
                </TextReveal>
                <h2 className={styles.boldTitle} ref={boldTitle}>
                    <span className={styles.boldTitleLeft} ref={boldTitleLeft}>Desarrollador</span>
                    <span>Front-End</span>
                    <span className={styles.boldTitleRight} ref={boldTitleRight}>Creativo</span>
                </h2>
                <TextReveal className={`${styles.paragraph} ${styles.paragraphAlt}`}>
                    Actualmente, vivo en Barranquilla. En mi vida personal, me gusta viajar con mi esposa y mi hija, ver películas y jugar videojuegos.
                </TextReveal>

                <Blobs type={'v3'} classVariable={styles.blob} />
            </Container>
        </section>

    );
}