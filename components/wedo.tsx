import styles from '../styles/Home.module.css'
import React from 'react';
import Image from 'next/image'
import { Card, Grid, Text, Row } from "@nextui-org/react";



export default function Wedo() {
  return (
    <>
            <Row   style={{ justifyContent: 'center' }} >
              <code className={styles.code} >
                Work Experiences
              </code>
            </Row>
            <Row   style={{ justifyContent: 'center' }}  >
              <Card css={{ m: '$6', p: "$6", mw: "400px" }}>
                <Card.Header>
                  <Image
                    src={'/wedologo.jpg'}
                    alt="Picture of the author"
                    width={54}
                    height={54}
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        Digital Trainee
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ Gridor: "$accents8" }}> WEDO - SCG Cement-Building Materials</Text>
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

        </>
        )
}
