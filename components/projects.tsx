
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image'
import { Card, Grid, Text, Button, Container, Badge, Avatar, Row, Col, Spacer, Tooltip } from "@nextui-org/react";

export default function Projects() {
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
    <><Row gap={0} style={{ justifyContent: 'center' }} >
    <code className={styles.code} >
      Experiences in Projects
    </code>

  </Row>
            <Row gap={0} style={{ justifyContent: 'center', }} fluid>
              <Grid.Container gap={2} justify="center">
                {list.map((item, index) => (
                  <Grid xs={12} sm={2} key={index} justify="center">
                    <Tooltip trigger="click" content={"Please wait for information about project or get resume or send mail to me"}>
                      <Card css={{ m: '$6', p: "$6", mw: "400px" }} isPressable>
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
                          <Button className={styles.btn2} onClick={handleClick}>View</Button>
                        </Card.Footer>
                      </Card>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid.Container>
            </Row>
        </>
        )
}
