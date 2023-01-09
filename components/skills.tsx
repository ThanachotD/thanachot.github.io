import React, { useState, useEffect } from 'react';
import { Card, Grid, Text, Button, Container, Badge, Avatar, Row, Col, Spacer, Tooltip } from "@nextui-org/react";
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
import { FaNodeJs } from 'react-icons/fa';
import styles from '../styles/Home.module.css'

export default function Skills() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
  return (
    <>
            <Row gap={0} style={{ justifyContent: 'center' }} >
            <code className={styles.code} >Skills</code>
            </Row>
            <Row gap={0} style={{ justifyContent: 'center' }} >
            
              <Grid.Container gap={2} css={{ color: "$text", marginTop: "$1" }} justify={'center'}>
                <Grid> <Avatar squared icon={<SiReact />} alt="Icon for react" /></Grid>
                <Grid><Avatar squared icon={<SiNextdotjs />} alt="Icon for next.js" /></Grid>
                <Grid> <Avatar squared icon={<FaNodeJs />} alt="Icon for Node.js" /></Grid>
                <Grid><Avatar squared icon={<SiGoland />} alt="Icon for Golang" /></Grid>
                <Grid> <Avatar squared icon={<SiPython />} alt="Icon for Python" /></Grid>
                <Grid><Avatar squared icon={<SiJava />} alt="Icon for Java" /></Grid>
                <Grid> <Avatar squared icon={<SiTypescript />} alt="Icon for Typescript" /></Grid>
                <Grid><Avatar squared icon={<SiLaravel />} alt="Icon for Laravel" /></Grid>
                <Grid> <Avatar squared icon={<SiMysql />} alt="Icon for MySQL" /></Grid>
                <Grid><Avatar squared icon={<SiMongodb />} alt="Icon for MongoDB" /></Grid>
                <Grid> <Avatar squared icon={<SiFirebase />} alt="Icon for Firebase" /></Grid>
                <Grid> <Avatar squared icon={<SiPostman />} alt="Icon for Postman" /></Grid>
                <Grid> <Avatar squared icon={<SiDocker />} alt="Icon for Docker" /></Grid>
                <Grid> <Avatar squared icon={<SiUbuntu />} alt="Icon for Ubuntu" /></Grid>
                <Grid> <Avatar squared icon={<SiAndroidstudio />} alt="Icon for Androidstudio" /></Grid>
                <Grid> <Avatar squared icon={<SiBootstrap />} alt="Icon for Boostrap" /></Grid>
                <Grid> <Avatar squared icon={<SiHtml5 />} alt="Icon for HTML5" /></Grid>
                <Grid> <Avatar squared icon={<SiCss3 />} alt="Icon for CSS3" /></Grid>
                <Grid> <Avatar squared icon={<SiPhp />} alt="Icon for Php" /></Grid>
                <Grid> <Avatar squared icon={<SiFigma />} alt="Icon for Figma" /></Grid>
              </Grid.Container>
            </Row>
        </>
        )
}
