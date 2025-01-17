import { Button, Text } from "../../components";
import React from "react";
export default function OurstorySection() {
  return (
    /* our story section */
    <>
      <div className="relative z-[8] mt-[-114px] grey-bg p-6">
        <div className="flex flex-col items-center bg-light_green-400_4c ру-4">
          <div className="container-xs mb-1.5 flex flex-col items-center md:px-5">
            <Text
              size="textmd"
              as="p"
              className="text-[40px] font-normal md: text-[38px] sm:text-[36px]"
            >
              Our Story.
            </Text>
            <div className="flex flex-col items-center gap-6 self-stretch">
              <Text
                as="p"
                className="self-stretch text-center text-[13px] font-light leading-[19px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia
              </Text>
              <Button
                shape="round"
                className="min-w-[180px] rounded-[10px] border border-solid border-black-900 px-[33px] font-roboto font-medium capitalize sm:px-5"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
