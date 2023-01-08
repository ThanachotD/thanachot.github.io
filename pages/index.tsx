import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Card, Grid, Text, Button, Container, Badge, Avatar, Row, Col, Spacer } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";

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

} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


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
        
      </Head>
      <main className={styles.main}>

        <Image
          className={styles.profile}
          src="/profile_Thanachot.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <h1 className={styles.title}>
          Thanachot Wongmetin
        </h1>
        <div className={styles.description}>
          <code className={styles.code}>Software Engineer · UX/UI Design · Photographer </code>
          <p className={styles.introduce}>
            I am passionate about designing user interfaces and user experiences,
            and I also have a strong background in software engineering.I am always looking for new challenges
            and opportunities to make innovation. </p>

          <code className={styles.code}>
            Education
          </code>
          <br />
          <p className={styles.introduce}>
            Bachelor of Engineering, Software Engineering 3<sup>th</sup> Year At Thammasat University </p>
          <code className={styles.code}>
            Contact
          </code>
          <p className={styles.introduce}>
            Thanachot.won@gmail.com </p>
          <Link href="https://github.com/ThanachotD" ><i className="bi bi-github" /></Link>
          <Link href="https://www.linkedin.com/in/thanachot-wongmetin-94bb49210/" ><i className="bi bi-linkedin" /></Link>
          <Link href="https://www.facebook.com/profile.php?id=100005890065983" ><i className="bi bi-facebook" /></Link>
          <a className="bi bi-envelope-fill" onClick={() => router.push('mailto:Thanachot.won@gmail.com')}></a>
          {/*<a href='resume.pdf'>resume</a> */}
          <center>
            <Link href="resume.pdf" >
              <Button className={styles.btn2}>
                <i className="bi bi-file-earmark-pdf-fill" /> &nbsp;  Resume
              </Button>
            </Link>
          </center>
          <code className={styles.code} >
            Skills
          </code>
          <Container gap={1} wrap={'wrap'}>
            <Row gap={0} style={{ justifyContent: 'center' }} >
              <Grid.Container gap={2} css={{ color: "$text", marginTop: "$1" }} justify={'center'}>
                <Grid> <Avatar squared icon={<SiReact />} /></Grid>
                <Grid><Avatar squared icon={<SiNextdotjs />} /></Grid>
                <Grid> <Avatar squared icon={<FaNodeJs />} /></Grid>
                <Grid><Avatar squared icon={<SiGoland />} /></Grid>
                <Grid> <Avatar squared icon={<SiPython />} /></Grid>
                <Grid><Avatar squared icon={<SiJava />} /></Grid>
                <Grid> <Avatar squared icon={<SiTypescript />} /></Grid>
                <Grid><Avatar squared icon={<SiLaravel />} /></Grid>
                <Grid> <Avatar squared icon={<SiMysql />} /></Grid>
                <Grid><Avatar squared icon={<SiMongodb />} /></Grid>
                <Grid> <Avatar squared icon={<SiFirebase />} /></Grid>
                <Grid> <Avatar squared icon={<SiPostman />} /></Grid>
                <Grid> <Avatar squared icon={<SiDocker />} /></Grid>
                <Grid> <Avatar squared icon={<SiUbuntu />} /></Grid>
                <Grid> <Avatar squared icon={<SiAndroidstudio />} /></Grid>
                <Grid> <Avatar squared icon={<SiBootstrap />} /></Grid>
                <Grid> <Avatar squared icon={<SiHtml5 />} /></Grid>
                <Grid> <Avatar squared icon={<SiCss3 />} /></Grid>
                <Grid> <Avatar squared icon={<SiPhp />} /></Grid>
                <Grid> <Avatar squared icon={<SiFigma />} /></Grid>
              </Grid.Container>
            </Row>
            <br />
            <Row gap={0} style={{ justifyContent: 'center' }} >
              <code className={styles.code} >
                Work Experiences
              </code>
            </Row>
            <Row gap={0} style={{ justifyContent: 'center', }} fluid>
              <Card css={{ m: '$6', p: "$6", mw: "400px" }}>
                <Card.Header>
                  <img
                    alt="nextui logo"
                    src="https://media.licdn.com/dms/image/C560BAQHnOtmYTOvWPw/company-logo_200_200/0/1671785697940?e=1681344000&v=beta&t=RqenS7HhQ8gYG3oLAQjT2uXH_OBaqOzZoga2gI4bdT4"
                    width="54px"
                    height="54px"
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        Digital Trainee
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}> WEDO - SCG Cement-Building Materials</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text>
                    Research and Development IoT smart outlet and application services for ev user live in condominuim.
                  </Text>
                </Card.Body>
              </Card>
            </Row>
            <br />

            <Row gap={0} style={{ justifyContent: 'center' }} >
              <code className={styles.code} >
                Experiences in Projects
              </code>

            </Row>
            <br />
            <Row gap={0} style={{ justifyContent: 'center', }} fluid>

              <Grid.Container gap={2} justify="center">
                {list.map((item, index) => (
                  <Grid xs={12} sm={2} key={index} justify="center">
                    <Card css={{ m: '$6', p: "$6", mw: "400px" }} isPressable>
                      <Card.Header>
                        <Image
                          className={styles.profile}
                          src={item.img}
                          alt="Picture of the author"
                          width={500}
                          height={500}
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
                        <Button className={styles.btn2} onClick={handleClick}>View</Button>
                      </Card.Footer>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
}
