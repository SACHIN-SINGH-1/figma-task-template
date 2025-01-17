import { Helmet } from "react-helmet";
import { Button, Input, Text, Img } from "../../components/index.jsx";
import Footer from "../../components/Footer";
import FeaturesSection from "./FeaturesSection";
import OurstorySection from "./OurStorySection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import React from "react";

export default function TaskPage() {
  return (
    <>
      <Helmet>
        <title>
          Our Initiative - Empowering Development with Unique Features
        </title>
        <meta
          name="description"
          content="Discover our platform's initiative, featuring success stories and unique selling points that drive development. Learn about our features, FAQs, and how to get involved."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
          <div>
            <div className="bg-gradient2">
              <div className="mb-[140px]">
                <div className="relative ml-[52px] mr-8 mt-[-4px] flex items-start md:mx-0 md: flex-col">
                  <div className="mt-[42px] flex flex-1 flex-col items-end self-end md: self-stretch md:px-5">
                    <div className="flex flex-wrap self-stretch">
                      <Text
                        size="texts"
                        as="p"
                        className="text-[15px] font-medium !text-light_green-600 green-font"
                      >
                        Home
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="ml-[22px] text-[15px] font-normal"
                      >
                        About Us
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="ml-[22px] text-[15px] font-normal"
                      >
                        Features
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="ml-[22px] text-[15px] font-normal"
                      >
                        FAQ
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="ml-[22px] text-[15px] font-normal"
                      >
                        Success Stories
                      </Text>
                      <Text
                        size="texts"
                        as="p"
                        className="ml-[22px] text-[15px] font-normal"
                      >
                        Development
                      </Text>
                      <Img
                        src="images/img_image.png"
                        alt="Imagefive"
                        className="absolute top-2 right-0 h-[100px] w-[10%] object-contain z-[6] md:ml-0 md:w-full"
                      />
                    </div>
                    <div className="container-xs mt-[38px] flex flex-col items-center px-3">
                      <Text
                        size="textmd"
                        as="p"
                        className="self-stretch text-center text-[40px] font-normal leading-[60px] md: text-[38px] sm:text-[36px]"
                      >
                        <span className="text-black-900">
                          The Punch Line to Explain&nbsp;
                        </span>
                        <span className="font-bold text-light_green-600 green-font">
                          our Initiative
                        </span>
                        <span className="text-black-900">&nbsp; <br/>and the&nbsp;</span>
                        <span className="font-bold text-black-900 green-font">USP&nbsp;</span>
                        <span className="text-black-900">
                          of the platform.
                        </span>
                      </Text>
                      <Text
                        as="p"
                        className="mt-1.5 w-[62%] text-center text-[13px] font-light leading-[19px] |text-gray-600 md:w-full"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                      <Button
                        color="light_green_600"
                        shape="round"
                        className="mt-6 min-w-[144px] rounded-[10px] px-8 font-bold sm:px-5 green-bg">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-end self-stretch md:flex-col">
                      <div className="flex flex-1 items-center justify-end md:flex-col md:self-stretch">
                        <div className="relative z-[2] mb-[74px] flex w-[36%] items-start justify-end self-end md:w-full">
                          <Img
                            src="images/img_artboard_3ratifi.png"
                            alt="Artboard"
                            className="mt-[46px] h-[162px] w-[46%] object-contain opacity-20"
                          />
                          <div className="relative ml-[70px] h-[290px] w-[38%] content-center self-center md:h-auto">
                            <Img
                              src="images/img_modern_oval_not.png"
                              alt="Modernovalnot"
                              className="h-[290px] w-full flex-1 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 top-0 mx-2.5 my-auto h-[242px] flex-1 md:mx-0">
                              <Img
                                src="images/img_1_1.png"
                                alt="Image"
                                className="absolute bottom-0 right-[0.01px] top-0 my-auto h-[242px] flex-1 rounded-[20px] object-cover"
                              />
                              <div className="absolute bottom-0 right-[0.04px] top-0 my-auto ml-3 h-max flex-1 rounded-[10px] bg-white-a700 px-1.5 py-10 blur-[4.00px] backdrop-opacity-[0.5] md:ml-0 sm:py-5">
                                <Img
                                  src="images/img_image.png"
                                  alt="Image"
                                  className="h-[138px] w-full object-cover md:h-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative ml-[-142px] flex flex-1 items-center justify-end md:ml-0 md:self-stretch sm:flex-col">
                          <div className="relative z-[1] mb-[18px] h-[382px] w-[28%] content-center self-end md:h-auto sm:w-full">
                            <Img
                              src="images/img_modern_oval_not.png"
                              alt="Modernovalnot"
                              className="h-[382px] w-full flex-1 object-cover"
                            />
                            <Img
                              src="images/img_1_1_320x142.png"
                              alt="Image"
                              className="absolute bottom-0 right-[15px] top-0 my-auto h-[320px] w-[80%] rounded-[20px] object-contain"
                            />
                          </div>
                          <Img
                            src="images/img_artboard_3ratifi.png"
                            alt="Artboard"
                            className="relative ml-[-146px] h-[466px] w-[72%] object-contain sm:ml-0 sm:w-full"
                          />
                        </div>
                      </div>
                      <div className="relative z-[3] mb-[18px] ml-[-162px] flex w-[32%] items-start justify-end self-end md:ml-0 md:w-full">
                        <div className="relative z-[4] flex flex-1 items-start justify-end">
                          <div className="relative z-[5] h-[376px] flex-1 content-center self-center md:h-auto">
                            <Img
                              src="images/img_modern_oval_not.png"
                              alt="Modernovalnot"
                              className="h-[376px] w-full flex-1 object-cover"
                            ></Img>
                            <div className="absolute bottom-0 left-0 right-0 top-0 mx-3.5 my-auto h-[312px] flex-1 md:mx-0">
                              <Img
                                src="images/img_1_1.png"
                                alt="Image"
                                className="absolute bottom-0 right-[-0.15px] top-0 my-auto h-[312px] w-[88%] rounded-[20px] object-contain"
                              />
                              <div className="absolute bottom-0 right-[-0.11px] top-0 my-auto ml-[18px] h-max flex-1 rounded-[10px] bg-white-a700 px-2 py-[52px] blur-[4.00px] backdrop-opacity-[0.5] md:ml-0 md:py-5">
                                <Img
                                  src="images/img_image.png"
                                  alt="Image"
                                  className="h-[180px] w-full object-cover md:h-auto"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative ml-[-22px] mt-10 h-[266px] w-[40%] content-center opacity-50 md:h-auto">
                            <Img
                              src="images/img_modern_oval_not.png"
                              alt="Modernovalnot"
                              className="h-[266px] w-full flex-1 object-cover"
                            />
                          <Img
                            src="images/img_1_1_320x142.png"
                            alt="Image"
                            className="absolute bottom-0 right-[15px] top-0 my-auto h-[320px] w-[80%] rounded-[20px] object-contain"
                          />
                          </div>
                        </div>
                        <Img
                          src="images/img_artboard_3ratifi.png"
                          alt="Artboard"
                          className="relative ml-[-52px] mt-[76px] h-[162px] w-[36%] object-contain opacity-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* our story section */}
            <OurstorySection />
          </div>
          <div className="relative z-[9] mt-[-50px] flex flex-col items-center bg-gradient2">
            {/* features section */}
            <FeaturesSection />
            {/* success stories section */}
            <SuccessStoriesSection />
            <div className="container-xs mt-6 flex flex-col items-center px-14 md:px-5">
              <div className="flex w-[82%] flex-col items-center gap-2.5 md:w-full">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[40px] font-normal text-light_green-600 md:text-[38px] sm: text-[36px] green-font"
                >
                  Subscribe to know more
                </Text>
                <div className="flex justify-center gap-[31px] self-stretch sm:flex-col">
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Email Address`}
                    className="w-[60%] rounded-[10px] border px-4"
                  />
                  <Button
                    shape="round"
                    className="min-w-[180px] rounded-[10px] border border-solid border-black-900 px-[33px] font-roboto font-medium capitalize sm:px-5"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
