import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Footer = ({ children, ...props }: Props) => {
  return <footer {...props}>{children}</footer>;
};

export default Footer;
