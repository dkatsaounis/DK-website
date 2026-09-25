import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="row-span-1 flex h-full flex-row items-end justify-center gap-4 px-4 pb-2 text-lg text-white lg:mx-auto lg:gap-16"
    >
      <Link href="/" className="hover:text-gray-400 hover:text-shadow-2xs">
        Home
      </Link>
      <Link
        href="/research"
        className="hover:text-gray-400 hover:text-shadow-2xs"
      >
        Research
      </Link>
      <Link
        href="/events"
        className="hover:text-gray-400 hover:text-shadow-2xs"
      >
        Events
      </Link>
      <Link
        href="/teaching"
        className="hover:text-gray-400 hover:text-shadow-2xs"
      >
        Teaching
      </Link>
    </nav>
  );
}
