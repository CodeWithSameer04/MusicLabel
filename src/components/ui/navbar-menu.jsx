import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="menu-item">
      <motion.p
        transition={{ duration: 0.3 }}
        className="menu-item-text"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="dropdown-container">
              <motion.div
                transition={transition}
                layoutId="active"
                className="dropdown-panel"
              >
                <motion.div
                  layout
                  className="dropdown-content"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const ButtonMenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="menu-item">
      <Link to={href} className="menu-item-button">
        <motion.p
          transition={{ duration: 0.3 }}
          className="menu-item-text"
        >
          {item}
        </motion.p>
      </Link>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="dropdown-container">
              <motion.div
                transition={transition}
                layoutId="active"
                className="dropdown-panel"
              >
                <motion.div
                  layout
                  className="dropdown-content"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="navbar-menu"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <Link to={href} className="product-item">
      {icon && <div className="product-icon">{icon}</div>}
      <div>
        <h4 className="product-title">
          {title}
        </h4>
        <p className="product-description">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const ServiceItem = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <Link to={href} className="service-item">
      <div className="service-icon">{icon}</div>
      <div>
        <h4 className="service-title">
          {title}
        </h4>
        <p className="service-description">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, to, className, ...rest }) => {
  return (
    <Link
      to={to}
      className={`hovered-link ${className || ''}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
