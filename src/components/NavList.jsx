import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { twMerge } from "tailwind-merge";

export const NavLinkList = ({ title, link, className, ...props }) => {
  const twMergeLinkClass = twMerge(
    " transition-background  px-6 py-2 transition-colors duration-100 ease-out hover:bg-primary-200 hover:text-secondary-300 ",
    className
  );

  return (
    <NavLink to={link} className={twMergeLinkClass} {...props}>
      {title}
    </NavLink>
  );
};

export const NavHashList = ({ title, href, className, ...props }) => {
  const twMergeHashList = twMerge(
    "transition-background  px-6 py-2 transition-colors duration-100 ease-out hover:bg-primary-200 hover:text-secondary-300",
    className
  );

  return (
    <AnchorLink href={href} className={twMergeHashList} {...props}>
      {title}
    </AnchorLink>
  );
};
