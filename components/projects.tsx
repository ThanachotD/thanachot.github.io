
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Card, Grid, Modal, Text, Button, Container, Badge, Avatar, Row, Col, Spacer, Tooltip } from "@nextui-org/react";
import Link from 'next/link';
import {
    SiReact, SiNextdotjs,
    SiGoland,
    SiPython,
    SiJava,
    SiTypescript,
    SiLaravel,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiPostman,
    SiAndroidstudio,
    SiUbuntu,
    SiBootstrap,
    SiPhp,
    SiHtml5,
    SiCss3,
    SiFigma,
    SiDocker,
    SiGithub,
    SiLinkedin,
    SiFacebook
} from 'react-icons/si';
import { IoOpen } from 'react-icons/io5';
import { AiFillRead } from 'react-icons/ai'

export default function Projects() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const list = [
        {
            role: "UX/UI Design and IoT Developer",
            title: "Meplug",
            img: "/mepluglogo.png",
            description: "Meplug is a smart plug that can be controlled by voice and mobile application.",
            file: "Meplug Portfolio.pdf",
            github: "",
            figma:"https://www.figma.com/file/wmXwhXxRcMSYXk5DqGhIr0/Untitled?node-id=1%3A9404"
        },
        {
            role: "Fullstack Developer",
            title: "Mypark",
            img: "/myparklogo.png",
            description: "Mypark is a smart parking system that can be show parking lot's free and can used in mobile application.",
            file: "Mypark Portfolio.pdf",
            github: "https://github.com/ThanachotD/Mypark---backend.git",
            figma:"https://www.figma.com/file/wmXwhXxRcMSYXk5DqGhIr0/Untitled?node-id=0%3A1"

        },
        {
            role: "Fronted Developer",
            title: "Today",
            img: "/todaylogo.png",
            description: "Today App is a mobile application that can send message to your friend and can use in mobile application.",
            file: "Today Portfolio.pdf",
            github: "https://github.com/ThanachotD/todayapp.git",
            figma:"https://www.figma.com/file/wmXwhXxRcMSYXk5DqGhIr0/Untitled?node-id=1%3A4657"
        },
        {
            role: "UX/UI Design",
            title: "Gather",
            img: "/gatherlogo.png",
            description: " Gather is a mobile application that can booking a activities in university ",
            file: "Gather Portfolio.pdf",
            github: "",
            figma:"https://www.figma.com/file/wmXwhXxRcMSYXk5DqGhIr0/Untitled?node-id=1%3A5961"
        },
        {
            role: "UX/UI Design",
            title: "Carish",
            img: "/carishlogo.png",
            description: " Carish is a mobile application that can show your health quality and can chat with doctor",
            file: "Carish Portfolio.pdf",
            github: "",
            figma:"https://www.figma.com/file/wmXwhXxRcMSYXk5DqGhIr0/Untitled?node-id=1%3A10749"
        }
    ];

    const router = useRouter()

    function handleClick() {
        router.push('/projects');
    }

    return (
        <><Row gap={0} style={{ justifyContent: 'center' }} >
            <code className={styles.code} >
                Experiences in Projects
            </code>

        </Row>
            <Row gap={0} style={{ justifyContent: 'center', }} fluid>
                <Grid.Container gap={2} justify="center">
                    {list.map((item, index) => (
                        <Grid xs={12} sm={2} key={index} justify="center">

                            <Card css={{ m: '$6', p: "$6", mw: "400px" }} >
                                <Card.Header>
                                    <Image
                                        src={item.img}
                                        alt="Picture of the author"
                                        width={54}
                                        height={54}
                                    />
                                    <Grid.Container css={{ pl: "$6" }}>
                                        <Grid xs={12} justify="space-between" >
                                            <Text h5 css={{ lineHeight: "$xs" }} >
                                                {item.title}
                                            </Text>
                                            <Badge color="success" variant={"flat"}> complete </Badge>
                                        </Grid>
                                        <Grid xs={12} css={{ textAlign: "left" }}>
                                            <Text css={{ color: "$accents8" }} size={12}> {item.role} </Text>
                                        </Grid>
                                    </Grid.Container>
                                </Card.Header>
                                <Card.Body css={{ py: "$2" }}>
                                    <Text size={12}>
                                        {item.description}</Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>

                                        {item.github == '' ? <br /> : <Link href={item.github} style={{ marginRight: '1rem' }} className={styles.icon}><Avatar squared icon={<SiGithub color='black' className={styles.icon} />} alt="Icon for react" /></Link>
                                        }
                                        <Link href={item.figma} style={{ marginRight: '1rem' }} className={styles.icon}><Avatar squared icon={<SiFigma color='red' className={styles.icon} />} alt="Icon for react" /></Link>

                                        <Link href={item.file} style={{ marginRight: '1rem' }} className={styles.icon}><Avatar squared icon={<IoOpen className={styles.icon} />} alt="Icon for react" /></Link>

                                    </Row>
                                </Card.Footer>

                            </Card>

                        </Grid>
                    ))}
                </Grid.Container>

            </Row>

        </>
    )
}
