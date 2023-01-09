import { Modal, Image, Text, Button } from "@nextui-org/react";
import React, { useState, useEffect } from 'react';

export default function Details() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <>
            <Modal
                closeButton
                blur
                autoMargin
                width="600px"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        width={600}
                        height={400}
                        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                        alt="Default Image"
                        objectFit="cover"
                    />
                    <Text h3> Topic </Text>
                    <Text id="modal-description">
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    </Text>
                    <Text h3> Status : Complete </Text>
                    <Text h3> Role : UXUI Design , Fullstack Developer </Text>
                    <Text h3> Tools Framework </Text>
                    <Image
                        width={100}
                        height={100}
                        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                        alt="Default Image"
                    />
                    <Text h3> Link </Text>
                    <Button>figma</Button>
                    <Button>github</Button>
                </Modal.Body>
                <Modal.Footer>{/* typing somethings */}</Modal.Footer>
            </Modal>
        </>
    )
}