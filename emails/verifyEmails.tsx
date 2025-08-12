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

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerifyEmail({username, otp}: VerificationEmailProps){
    return(
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
            </Head>
            <Preview>Here&apos;s your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username}</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the following verification code to complete your registration:
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>if you did not request this code, Please ignore this email</Text>
                </Row>
            </Section>
        </Html>
    );
}