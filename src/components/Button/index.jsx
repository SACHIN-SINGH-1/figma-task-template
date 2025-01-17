import React from "react";
import PropTypes from "prop-types";
const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    light_green_600: "bg-light_green-600 text-white-a700",
    black_900: "bg-black-900 text-white-a700",
  },
};
const sizes = {
  xs: "h-[44px] px-8 text-[15px]",
};
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      className={`${className} flex flex-row items-center justify-center sm:px-5 text-center cursor-pointer whitespace-nowrap text-white-a700 text-[15px] rounded-[10px] ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_green_600", "black_900"]),
};
export { Button };
