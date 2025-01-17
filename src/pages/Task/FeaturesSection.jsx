import { Button, Text } from "../../components";
import React from "react";
export default function FeaturesSection() {
  return (
    <>
      {/* features section */}
      <div className="mt-[74px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center md:px-5">
          <Text
            size="textmd"
            as="p"
            className="text-[40px] font-normal !text-light_green-600 md: text-[38px] sm:text-[36px] green-font"
          >
            Features
          </Text>
          <Text
            as="p"
            className="self-stretch text-center text-[13px] font-light leading-[19px] !text-gray-600"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute iure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Button
            shape="round"
            className="mt-6 min-w-[180px] rounded-[10px] border border-solid border-black-900 px-[33px] font-roboto font-medium capitalize"
          >
            Know More
          </Button>
        </div>
      </div>
    </>
  );
}
