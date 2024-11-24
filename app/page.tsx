import { Facebook, Linkedin, Github } from "lucide-react";
import TypewriterText from "./components/(framerComponents)/textAnim";
import Image from "next/image";
import my_image from '../public/my_image.webp'
import my_image2 from '@/public/qwe.avif'
import Services from "./parts/services";


export default function Page() {
  return (
    <main>
     <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:text-left">
              <p className="pb-4 text-base text-gray-500">Welcome to my digital space</p>
              <h1 className="text-4xl font-bold  tracking-tight sm:text-5xl md:text-6xl">
                Hi, I&apos;m <span className="text-red-500 text-50">TitoSenpai</span>,
                <span className="block ">a <TypewriterText /></span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <h2 className="text-lg font-medium pt-4">
                  Check me on
                </h2>
            
            <div className="flex flex-nowrap gap-8 py-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-md shadow-[0px_16px_16px_0px_#0000004d] text-white transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="flex h-12 w-12 rounded-md  items-center justify-center transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300">
                <Facebook className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md shadow-[0px_16px_16px_0px_#0000004d] text-white transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="flex h-12 w-12 rounded-md  items-center justify-center transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300">
                <Linkedin className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md shadow-[0px_16px_16px_0px_#0000004d] text-white transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="flex h-12 w-12 rounded-md  items-center justify-center transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 duration-300">
                <Github className="h-6 w-6" />
                </button>
              </div>
            </div>
            </div>
            
            <div className="relative lg:h-screen md:object-scale-down overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={my_image}
                  alt="Profile Pic"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
           
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative lg:h-screen md:object-scale-down overflow-hidden">
              <div className="absolute inset-0">
              <Image src={my_image2} alt="Profile Pic" fill style={{ objectFit: 'cover' }} priority />
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
             }}></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
           
            </div>

            <div>
              <h5 className=" font-bold sm:text-4xl">
                Who I am?
              </h5>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </div>
           
          </div>
        </div>
      </section>

      <section className="py-8">
        <Services />
      </section>
    </main>
  );
}
