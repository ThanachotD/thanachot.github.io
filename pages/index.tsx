import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Card, Grid, Text, Button, Container, Badge, Avatar, Row, Col, Spacer, Tooltip } from "@nextui-org/react";

import Wedo from '../components/wedo';
import {
  SiGithub,
  SiLinkedin,
  SiFacebook
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import Skills from '../components/skills';
import Projects from '../components/projects';

export default function App() {
  const list = [
    {
      role: "UX/UI Design and IoT Developer",
      title: "Meplug",
      img: "/mepluglogo.png",
      description: "Meplug is a smart plug that can be controlled by voice and mobile application.",

    },
    {
      role: "Fullstack Developer",
      title: "Mypark",
      img: "/myparklogo.png",
      description: "Mypark is a smart parking system that can be show parking lot's free and can used in mobile application.",
    },
    {
      role: "Fronted Developer",
      title: "Today",
      img: "/todaylogo.png",
      description: "Today App is a mobile application that can send message to your friend and can use in mobile application."
    },
    {
      role: "Fronted Developer",
      title: "Welendar",
      img: "/welendarlogo.png",
      description: "Welendar is a mobile application that can show your schedule and can use in mobile application."
    },
    {
      role: "UX/UI Design",
      title: "Gather",
      img: "/gatherlogo.png",
      description: " Gather is a mobile application that can booking a activities in university "
    },
    {
      role: "UX/UI Design",
      title: "Carish",
      img: "/carishlogo.png",
      description: " Carish is a mobile application that can show your health quality and can chat with doctor"
    }
  ];
  const router = useRouter()

  function handleClick() {
    router.push('/projects');
  }
  return (
    <>
      <Head>
        <title>Thanachot</title>
        <meta name="firstpage" content="introduce myself by thanachot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thanachot.ico" />
        <meta name="description" content="A web portfolio is a digital collection showcasing professional or creative skills, experiences, and achievements. It is presented on a website and can include resumes and work samples. It is used to showcase abilities and accomplishments to potential employers, clients, or partners."></meta>
      </Head>

     <main style={{overflow:"hidden"}}>
     <Container gap={1} wrap={'wrap'} css={{ overflow: "hidden" ,marginBottom:'$2xl',marginTop:'$2xl',padding:'$11'}}>
        
        <Row  style={{ justifyContent: 'center' }}>
          <Image
            className={styles.profile}
            src="/profile_Thanachot.jpg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </Row>
        <Row  style={{ justifyContent: 'center' }}>
          <h1 className={styles.title}>
            Thanachot Wongmetin
          </h1>
        </Row >
            <Row style={{ justifyContent: 'center' }}><code className={styles.code}>Software Engineer · UX/UI Design · Photographer </code></Row>
            <Row style={{ justifyContent: 'center' }}><p className={styles.introduce}>
              I am passionate about designing user interfaces and user experiences,
              and I also have a strong background in software engineering.I am always looking for new challenges
              and opportunities to make innovation. </p></Row>
            <Row style={{ justifyContent: 'center' }}>
              <code className={styles.code}>
                Education
              </code></Row>
            <Row style={{ justifyContent: 'center' }}><p className={styles.introduce}>
              Bachelor of Engineering, Software Engineering 3<sup>th</sup> Year At Thammasat University </p></Row>
            <Row style={{ justifyContent: 'center' }}><code className={styles.code}>
              Contact
            </code></Row>
            <Row style={{ justifyContent: 'center' }}><p className={styles.introduce}>
              Thanachot.won@gmail.com </p></Row>
              <Row style={{ justifyContent: 'center'}}>
              <Link href="resume.pdf" >
              <Button className={styles.btn2}>
                <i className="bi bi-file-earmark-pdf-fill" /> &nbsp;  Resume
              </Button>
            </Link>
            </Row>
            <br/>
        <Skills />
        <Wedo />
        <Projects />
      </Container>
     </main>
    </>
  )
}
