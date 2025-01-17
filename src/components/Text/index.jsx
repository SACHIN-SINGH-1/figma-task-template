import React from "react";
const sizes = {
  textxs: "text-[13px] font-light",
  texts: "text-[15px] font-normal",
  textmd: "text-[40px] font-normal md: text- [38px] sm:text-[36px]",
};
const Text = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-black-900 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
