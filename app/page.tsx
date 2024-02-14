
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
      {/* from the sound directory i want to play the sound in a loop when user enter the page  */}
      <audio autoPlay loop muted>
        <source src="/public/sounds/sound-1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
