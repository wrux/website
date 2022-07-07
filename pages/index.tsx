import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { FadeVisibility, Job, NewTabIcon, Panel } from 'components';
import work from 'data/work';

const links = [
  { label: 'GitHub', href: 'https://github.com/wrux' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/callum-bonnyman/' },
  { label: 'Instagram', href: 'https://www.instagram.com/etocallum/' },
  { label: 'Blog', href: 'https://bloke.blog/' },
];

const Home: NextPage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setInit(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Callum Bonnyman, Frontend Eengineer | WRUX.com</title>
        <meta
          name="description"
          content="I'm Callum, a Frontend Engineer from the United Kingdom. I love anything frontend, but have a focus on design systems, accessibility and browser performance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction={{ base: 'column', md: 'row' }} bg="primary" minH="100vh">
        <Box
          as="header"
          position="relative"
          w={{ base: '100vw', md: 'min(25ch, 33vw)' }}
          bg="dark"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: 'flex-start', md: 'center' }}
            position={{ base: 'static', md: 'fixed' }}
            inset="0"
            w={{
              base: '100vw',
              md: init ? 'calc(0vw + min(25ch, 33vw))' : '100vw',
            }}
            maxH="100vh"
            bg="dark"
            color="white"
            transition={{ md: 'width 500ms ease-out' }}
            zIndex={100}
          >
            <Text
              px={{ base: 'min(16rem, 10vw)', md: 8 }}
              py={8}
              fontWeight="bold"
              fontSize={{ base: 'baseFluid', md: 'smFluid' }}
              letterSpacing="0.0125em"
            >
              WRUX
            </Text>
          </Box>
        </Box>
        <Flex as="main" direction="column" flex="1">
          <Panel variant="primary">
            <FadeVisibility>
              <Heading as="h1" variant="h1" maxW="20ch" mb={2}>
                Callum Bonnyman
              </Heading>
            </FadeVisibility>
            <FadeVisibility>
              <Heading as="h2" variant="h2" maxW="20ch" mb={16}>
                Frontend Engineer
              </Heading>
            </FadeVisibility>
            <FadeVisibility>
              <Text variant="focus" maxW="40ch">
                {`I'm Callum, a Frontend Engineer from Oxford, England. I love
              anything frontend, but have a focus on design systems,
              accessibility and browser performance.`}
              </Text>
            </FadeVisibility>
          </Panel>
          <Panel variant="secondary">
            <Heading as="h2" variant="h2" mb={{ base: 8, md: 16 }}>
              Work
            </Heading>
            <VStack spacing={{ base: 8, md: 10 }} alignItems="flex-start">
              {work.map((item) => (
                <Job key={item.title} {...item} />
              ))}
            </VStack>
          </Panel>
          <Panel variant="offwhite">
            <Heading as="h2" variant="h2" mb={8}>
              Links
            </Heading>
            <FadeVisibility>
              <Box
                sx={{
                  '> *': {
                    mr: 8,
                    display: 'inline-block',
                    breakInside: 'avoid',
                  },
                }}
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="nofollow noreferer"
                    display="inline-flex"
                    alignItems="baseline"
                    fontSize={{ base: 'mdFluid', md: 'lgFluid' }}
                  >
                    {link.label}
                    <NewTabIcon
                      ml={2}
                      boxSize="0.4em"
                      color="dark"
                      aria-hidden
                    />
                    <VisuallyHidden>(opens in new tab)</VisuallyHidden>
                  </Link>
                ))}
              </Box>
            </FadeVisibility>
          </Panel>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
