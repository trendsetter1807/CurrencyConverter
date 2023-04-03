import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
} from '@chakra-ui/react';

export default function CTA() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 10, md: 10 }}>
                    <Heading
                        fontWeight={1000}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        <Text as={'span'} color={'#FF5B33'}>
                            Currency Converter
                        </Text>
                    </Heading>
                    <Text color={'pink'} fontWeight={600}>
                     Convert the values of one currency to another currency, essential tool for individuals and businesses that engage in international transactions or travel to different countries.

Allow users to quickly and easily convert currencies based on real-time exchange rates. Input the amount of money they wish to convert, the currency they are converting from, and the currency they wish to convert to.
                    </Text>

                </Stack>
            </Container>
        </>
    );
}