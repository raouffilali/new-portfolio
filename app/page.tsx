import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-4xl mb-14">Wait for ME .... 👀✨</h1>
      <img
        src="https://c.tenor.com/Y3Q-JG_JE1YAAAAC/tenor.gif"
        alt="Coming soon"
        width={500}
        height={500}
      />
    </div>
  );
}
