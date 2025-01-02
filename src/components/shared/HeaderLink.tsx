import React from 'react';

type Props = {
  href: string;
  title: string;
}

const Link: React.FC<Props> = ({href, title}) => {
  return (
    <a href={href}>{title}</a>
  );
};

export default Link;
