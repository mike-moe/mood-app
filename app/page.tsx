import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen text-white bg-black flex justify-center items-center">
      <div className="w-full max-w-[600px]">
        <h1 className="text-6xl mb-4">The Best JOURNAL APP</h1>
        <p className="text-2xl">This is an app from FRONTENDMASTERS</p>
        <Link href={"/journal"}>
          <button className="bg-blue-600 p-2 my-2 rounded text-xl whitespace-nowrap uppercase">get started</button>
        </Link>
      </div>
    </div>
  );
}
