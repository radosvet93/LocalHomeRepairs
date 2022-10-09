import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Header = ({ children, ...props }: Props) => {
  return <header {...props}>{children}</header>;
};

export default Header;
