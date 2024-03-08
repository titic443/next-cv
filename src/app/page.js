import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full lg:flex-row  sm:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Image Container*/}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className="object-contain"></Image>
      </div>
      {/* Text Container */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* Title */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Crafting Digital Experiences, Desigining Tomorrow
        </h1>
        {/* Description */}
        <p className="md:text-xl">
          Debugging: You have debugging enabled (slack.OptionDebug(true)), which
          should provide more detailed information about the request and
          response. Check the debug output to see if there are any additional
          clues about why the channel is not found.
        </p>
        {/* Button  */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg  ring-1 ring-black bg-black text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
