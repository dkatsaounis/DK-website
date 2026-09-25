import Image from "next/image";

import { CONTENT_CONFIG } from "~/contentConfiguration";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="row-span-2 grid grid-rows-5 bg-cyan-800 shadow-2xl shadow-gray-400">
      <div className="row-span-4 flex flex-row gap-8 px-4 lg:mx-auto">
        <Image
          src="/face-pic.jpg"
          alt="profile picture"
          width={156}
          height={156}
          className="m-auto rounded-full"
        />
        <div className="m-auto flex flex-1 flex-col">
          <div className="text-2xl text-white">Dimitrios Katsaounis</div>
          <div className="text-lg text-gray-400">{CONTENT_CONFIG.title}</div>
          <div className="text-sm text-gray-400">
            {CONTENT_CONFIG.department}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
