import { BackgroundBeams } from '@/components/ui/Bacground-boxes'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import React from 'react'
import { cn } from '@/lib/utils'
import { HiSparkles } from 'react-icons/hi2'
import { PinContainer } from '@/components/ui/Threedpin'
import Image from 'next/image'
import img from '../app/assets/image2.png'
import img2 from '../app/assets/img3.png'
import { PiSlidersHorizontalThin } from 'react-icons/pi'
import { SlideTabsExample } from '@/components/ui/Tab'
import {  WobbleCard } from '@/components/ui/Stickyscroll'
import { FeaturesSectionDemo } from '@/components/ui/Feature'
import { FlipWords } from '@/components/ui/Text'

const Page = () => {
  const words = ["organizing", "sharing", "documenting"];

  return (
    <>
      <div className="h-screen p-10 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-image:radial-gradient(transparent,white) pointer-events-none" />
        <BackgroundBeams />
        <SlideTabsExample />
        <div className="text-center z-20">
          <h1 className="text-4xl md:text-4xl font-bold text-white mt-4">
            Manage Code Snippets Effortlessly with Code Snip
          </h1>
          <p className="text-lg md:text-2xl flex flex-row justify-center items-center text-gray-500 mt-2">
            Your ultimate solution for organizing, sharing, and documenting code with AI{" "}
            <HiSparkles className="text-[#6365EF] text-4xl md:text-xl " />
          </p>
        </div>
        <div className="w-[120%]  md:w-[75%] h-[40%] md:h-[80%] z-20 p-5">
          <div className="flex items-center justify-between rounded-t-xl bg-gray-200 py-2 px-4 border-t border-l border-r border-gray-300">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-center flex-1">
              <p className="text-gray-700 text-sm">Codesnip</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-b-xl overflow-hidden">
            <Image src={img} alt="ss" className="w-full h-auto shadow-lg shadow-black/50" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#10182B] to-[#6365EF] overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="h-[10rem] flex justify-center items-center px-4">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Your ultimate solution for
                <FlipWords words={words} /> <br />
                code with AI
              </div>
            </div>
          }
        >
          <Image
            src={img}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="bg-[#6365EF]">
        <div className="bg-neutral-900 grid grid-cols-1 lg:grid-cols-3 gap-4 p-5 mx-auto">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Collaborative Editing
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.
              </p>
            </div>
            <Image
              src={img}
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Real-time Changes
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                AI Integration
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Leverage the power of AI to enhance your code management. Our platform offers intelligent suggestions and automated features that streamline your workflow and boost productivity.
              </p>
            </div>
            <Image
              src={img2}
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[10%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
<div className='h-full w-full'>
      <FeaturesSectionDemo />
      </div>

      <footer className="bg-black md:block hidden text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-lg font-semibold">Code Snip</p>
              <p className="text-sm mt-1">Your ultimate solution for organizing, sharing, and documenting code with AI</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
              <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
              <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-4 pt-4 text-xs text-gray-400 text-center md:text-left">
            <p>&copy; 2024 Code Snip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Page;