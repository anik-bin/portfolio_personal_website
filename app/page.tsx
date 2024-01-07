import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-5 max-w-screen-md">
          <h1 className="text-4xl font-extrabold">Hi 👋, how are you</h1>
          <p className="text-md my-4">My name is Aniket Bindhani. I am currently a final year CS undergrad. I am very fond of writing and i dump my thoughts here in the form of articles. You can find them <Link href="/blog" className="underline">here</Link></p>

          <p className="text-md my-4">a little more about myself:</p>

          <ul className="list-disc px-4">
            <li>I am from Bhubaneswar, Odisha</li>
            <li>I am obssesed of rubiks cubes. I was deeply invested in speedcubing few years back</li>
            <li>I mostly work on full stack web development in Javascript</li>
          </ul>

          <p className="text-md my-4">I love tech and I have been fond of computers since childhood. Programming came into my life accidentally when I saw the movie the social network when I was in high school. Since then I have been deeply invested in programming. I want to deep dive into every domain but I know it isn't possible but i believe in taking small steps and getting there eventually.</p>

          <div className="flex flex-row gap-4">
          <Link href="/blog" className="underline font-bold">Blog</Link>
          <Link href="https://github.com/anik-bin" className="underline font-bold">Github</Link>
          <Link href="https://x.com/aniketbindhani" className="underline font-bold">X</Link>
          </div>
        </div>
      </div>
    </>
  )
}
