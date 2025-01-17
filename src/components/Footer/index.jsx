import { Text, Heading, Img } from "./..";
import React from "react";
export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch justify-center items-end mt-[46px] rounded-tl-[20px] rounded-tr-[20px] gradient-bg`}
    >
      <div className="mt-2 flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
        <div className="relative h-[146px] w-[70%] self-center md:w-full">
          <div className="absolute bottom-[17px] left-0 right-0 mx-auto h-px w-full flex-1 rotate-[-180deg]" />
          <div className="absolute bottom-[26px] right-[27px] m-auto flex w-[30%] justify-between gap-5">
            <a href="Help" target="_blank" rel="noreferrer">
              <Text as="p" className="text-[13px] font-light">
                Help
              </Text>
            </a>
            <div className="flex flex-wrap items-center gap-1.5">
              <Text as="p" className="text-[13px] font-light">
                Language:{" "}
              </Text>
              <Text as="p" className="text-[13px] font-medium !text-white-a700">
                English
              </Text>
              <Img
                src="images/img_favourite.svg"
                alt="Favorite"
                className="h-[8px] self-start mt-1"
              />
            </div>
          </div>
          <Img
            src="images/img_image_6.png"
            alt="Imagesix"
            className="absolute bottom-0 left-[23px] top-0 h-[146px] w-[18%] object-contain"
            style={{ filter: "brightness(0.8) contrast(8)" }}
          />
        </div>

        <div className="mt-[18px] flex w-[24%] flex-col items-end gap-1 md:w-full">
          <div className="flex justify-between gap-5 self-stretch">
            <div className="flex flex-col items-end gap-[34px]">
              <Heading as="p" className="text-[13px] font-semibold">
                Company
              </Heading>
              <a href="/">
              <Text as="p" className="text-[13px] font-light !text-white-a700">
                  Terms and Conditions
                </Text>
              </a>
            </div>
            <div className="flex w-[24%] flex-col items-end gap-1.5">
              <div className="flex flex-col items-end gap-2 self-stretch">
                <Heading as="p" className="text-[13px] font-semibold">
                  Contact Us
                </Heading>
                <Text
                  as="p"
                  className="text-[13px] font-light !text-white-a700"
                >
                  Twitter
                </Text>
              </div>
              <a href="Instagram" target="_blank" rel="noreferrer">
                <Text
                  as="p"
                  className="text-[13px] font-light !text-white-a700"
                >
                  Instagram
                </Text>
              </a>
            </div>
          </div>
          <div className="flex w-[89%] flex-wrap justify-between gap-5 md:w-full">
            <a href="/">
              <Text as="p" className="text-[13px] font-light !text-white-a700">
                Privacy policy
              </Text>
            </a>
            <Text as="p" className="text-[13px] font-light !text-white-a700">
              Facebook
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
