import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Image from 'next/image'
import { Card, Grid, Text, Button, Container, Badge, Avatar, Row, Col, Spacer } from "@nextui-org/react";
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
  SiJavascript,
  SiJquery,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiDocker,

} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Thanachot</title>
        <meta name="firstpage" content="introduce myself by thanachot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thanachot.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
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
            and I a
            <div className="card-panel"></div>lso have a strong background in software engineering.I am always looking for new challenges
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
          <Container gap={1}>
            <Row gap={0} style={{ justifyContent: 'center' }} >

            </Row>
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
            <code className={styles.code} >
              Work Experiences
            </code>
            <Row gap={0} style={{ justifyContent: 'center' }}  >
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
                        Digital Trainnee
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>WEDO SCG Sement</Text>
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

          </Container>

        </div>



      </main>
    </>
  )
}
