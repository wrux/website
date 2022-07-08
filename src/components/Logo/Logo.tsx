import { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const aspectRatio = 795 / 190;

interface LogoProps extends IconProps {
  size?: number;
}

const Logo: FC<LogoProps> = ({ size = 32, ...props }) => (
  <Icon
    viewBox="0 0 795 190"
    fill="none"
    fontSize={`${size / 16}rem`}
    height="1em"
    width={`${aspectRatio}em`}
    pointerEvents="none"
    {...props}
  >
    <path
      d="M284.2 64.6V185H337.4V76.1C337.4 55 347 48.6 368.8 48.6C375.969 48.6488 383.124 49.2506 390.2 50.4V3.59999C380.6 1.39999 368.5 0.399994 354.2 0.399994C307.4 0.399994 284.2 21.8 284.2 64.6Z"
      fill="currentColor"
    />
    <path
      d="M534.9 107.9C534.9 130.7 521.7 141.1 502 141.1C482.3 141.1 469.2 130.7 469.2 107.9V5H415.2V112.5C415.2 137.5 423.5 156.8 439.9 170C456.3 183.2 477.4 190 502 190C526.6 190 547.4 183.2 563.8 170C580.2 156.8 588.8 137.5 588.8 112.5V5H534.9V107.9Z"
      fill="currentColor"
    />
    <path d="M662.8 5L703.5 60.6L703.1 61.1L662.8 5Z" fill="currentColor" />
    <path
      d="M736.7 185L703.1 137.5L669.5 185H611.7L673.5 99.6L605.2 5H662.8L794.5 185H736.7Z"
      fill="currentColor"
    />
    <path d="M794.5 5H741.3V56H794.5V5Z" fill="currentColor" />
    <path d="M259.6 5L201.1 185H150.6L209.1 5H259.6Z" fill="currentColor" />
    <path d="M158.6 5L100.1 185H49.6L108.1 5H158.6Z" fill="currentColor" />
    <path d="M53.2 5H0V56H53.2V5Z" fill="currentColor" />
  </Icon>
);

export default Logo;
