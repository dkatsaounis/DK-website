import Image from "next/image";

import IntroductionText from "./components/introductionText";

import { CONTENT_CONFIG } from "~/contentConfiguration";

//TODO: Think about what to do with department line
//TODO: Think about your tag

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="grid h-full w-full grid-rows-10">
        <div className="row-span-2 flex h-full w-full flex-row bg-cyan-800">
          <div className="mt-16 mb-8 flex flex-row gap-8 px-4 lg:mx-auto">
            <Image
              src="/face-pic.jpg"
              alt="profile picture"
              width={156}
              height={156}
              className="m-auto rounded-full"
            />
            <div className="m-auto flex flex-1 flex-col">
              <div className="text-2xl text-white">Dimitrios Katsaounis</div>
              <div className="text-lg text-gray-400">
                {CONTENT_CONFIG.title}
              </div>
              <div className="text-sm text-gray-400">
                {CONTENT_CONFIG.department}
              </div>
            </div>
          </div>
        </div>
        <IntroductionText />
      </div>
    </main>
  );
}
