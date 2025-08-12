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


export default function FeedbackEmail(name:string, email:string, mobile:string, message: string){
    return(
        <Html lang="en" dir="ltr">
            <Head>
                <title>GYST Club</title>
            </Head>
            <Preview>Feedback Mail</Preview>
            <Section>
                <Row>
                    <Heading as="h2">feedback & Question</Heading>
                </Row>
                <Row>
                    <Text>
                        this is the question and feedback from the user name :{name} and email : {email} and mobile : {mobile}
                    </Text>
                </Row>
                <Row>
                    <Text>{message}</Text>
                </Row>
                <Row>
                    <Text>if you did not request this code, Please ignore this email</Text>
                </Row>
            </Section>
        </Html>
    );
}