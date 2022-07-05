import { Heading, Text } from '@chakra-ui/react';
import { FadeVisibility } from 'components/FadeVisibility';
import { FC } from 'react';

type JobProps = job;

const Job: FC<JobProps> = ({ company, location, title, period }) => (
  <FadeVisibility>
    <>
      <Heading as="h3" mb={2}>
        {title}{' '}
        <Text as="sup" fontSize="0.5em">
          ({period})
        </Text>
      </Heading>
      <Text variant="focusSm">
        <strong>{company}</strong> {location}
      </Text>
    </>
  </FadeVisibility>
);

export default Job;
