import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "md:underline underline-offset-8 decoration-2 text-[#f9a61a]"
          : "text-white"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
