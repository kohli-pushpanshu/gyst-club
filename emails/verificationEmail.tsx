import React from 'react';
import {
  Html,
  Head,
  Preview,
  Row,
  Section,
  Text,
  Heading,
} from '@react-email/components';


export default function VerificationEmail(){
    return(
        <Html lang="en" dir="ltr">
            <Head>
                <title>GYST Club</title>
            </Head>
            <Preview>Hey Thank you for registration on GYST club</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello User</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering on GYST club. Please use the following link to join our whatsapp group and stay updated with the latest news and events.
                    </Text>
                </Row>
                <Row>
                    <Text>link</Text>
                </Row>
                <Row>
                    <Text>if you did not request this code, Please ignore this email</Text>
                </Row>
            </Section>
        </Html>
    );
}