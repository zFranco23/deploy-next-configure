import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  href: string,
  text: string,
}

const ActiveLink = (props: Props) => {
  const { href, text } = props;
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default ActiveLink;
