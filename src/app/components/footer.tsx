import Link from "next/link";
import Icon from "./icon";

import { CONTENT_CONFIG } from "~/contentConfiguration";

export default function Footer() {
  return (
    <div className="row-span-1 grid grid-rows-4 gap-2 bg-cyan-800">
      <div className="row-span-3 mt-4 flex flex-col gap-2 px-4 text-gray-300 lg:mx-auto">
        <div className="row-span-1 flex flex-row gap-2">
          <Icon name="location" size="small" />
          <div className="m-auto flex-1 text-sm">
            {CONTENT_CONFIG.officeAddress}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Icon name="mail" size="small" />
          <div className="m-auto flex-1 text-sm">{CONTENT_CONFIG.email}</div>
        </div>
      </div>
      <div className="row-span-1 mx-auto text-gray-400">
        <div className="text-sm">
          Created by:{" "}
          <Link
            href="https://github.com/geofl0u"
            target="_tab"
            className="underline underline-offset-2 hover:text-gray-300"
          >
            geofl0u
          </Link>
        </div>
      </div>
    </div>
  );
}
