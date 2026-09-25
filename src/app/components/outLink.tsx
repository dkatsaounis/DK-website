import Link from "next/link";

export default function OutLink({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      target="_tab"
      className="text-blue-600 underline underline-offset-2"
    >
      {label}
    </Link>
  );
}
