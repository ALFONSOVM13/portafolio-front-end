'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

export default function Resume() {
    const container = useRef();
    const cardGroup = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // CV Card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardGroup.current,
                start: 'top 75%',
                end: 'top top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup} ref={cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardTitle}>ALFONSO VENGOECHAEA</div>
                                <div className={styles.cardDesc}>Desarrollador Front-End</div>
                                <hr/>
                                <p>Soy Alfonso, un desarrollador web creativo con más de 1 año de experiencia en desarrollo.
                                    He trabajado en diseño de interfaz de usuario y desarrollo front-end, por lo que puedo
                                    entender bien los diseños y ayudar al equipo a comunicarse efectivamente.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {commonConfig.personal.email}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.state}</span>
                                </div>
                                <hr/>
                                <div className={styles.cardSectionTitle}>EXPERIENCIA LABORAL</div>
                                <p>
                                    Frontend Tech Lead | Naowee <br/>
                                    Desarrollador Front-End | Naowee <br/>
                                    Practicas Profesionales | Naowee
                                </p>
                            </div>
                            <figure className={styles.figure}>
                                <Image src="/avatar_alfonso.png" alt="Yasin Genc" width={150} height={150}/>
                            </figure>
                        </div>
                        <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src="/code-snippet.svg" alt="Code Snippet" width={330} height={480}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>Ver
                            CV</FancyButton>
                    </div>
                    <div className={styles.links}>
                        <Link href={`${commonConfig.social.linkedin}`} target={'_blank'}>LinkedIn</Link>
                        <Link href={`${commonConfig.social.github}`} target={'_blank'}>GitHub</Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}