import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>
        OOOOOOOOPSSSSSSS, beg pardon but we can&apos;t find who you&apos;re
        looking for!
      </h1>

      <Link href={"/"} className="bg-blue-700 text-gray-300">
        HOME
      </Link>
    </>
  );
}
