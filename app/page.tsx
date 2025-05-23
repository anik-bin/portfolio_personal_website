import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-5 max-w-screen-md">
          <h1 className="text-4xl font-extrabold">Hi 👋, how are you</h1>
          <p className="text-md my-4">
            I am Aniket.
          </p>
          <p className="text-md my-4">
            I hail from Bhubaneswar, Odisha, and I&apos;ve had a lifelong fascination with puzzles, especially Rubik&apos;s cubes. A few years ago, I was deeply into speedcubing, and that obsession taught me the value of patience and problem-solving — qualities I now bring to my work in full stack web development. I focus primarily on building dynamic applications using JavaScript, but I&apos;m always curious to explore new tech landscapes.
          </p>
          <p className="text-md my-4">
            My journey into programming began rather unexpectedly. Watching The Social Network in high school sparked a deep curiosity in me, and I&apos;ve been coding ever since. I love diving into different tech domains and constantly learning, even if it&apos;s one small step at a time.
          </p>
          <p className="text-md my-4">
            When I&apos;m not coding or writing articles to dump my thoughts (which you can find <Link href="/blog" className="underline font-bold text-blue-600">here</Link>), you might find me exploring research papers or just tinkering around with new web frameworks. I&apos;m excited about the future of tech, and I&apos;m eager to be a part of its ever-evolving story.
          </p>

          <h2 className="text-lg font-semibold">Projects: </h2>
          <ol className="mt-4 list-decimal list-outside pl-5">
            <li>
              <Link href="https://thekudosly.com" className="underline hover:text-blue-600">thekudosly</Link>
            </li>
            <li>
              <Link href="https://anonmessage.xyz" className="underline hover:text-blue-600">anonmessage</Link>
            </li>
          </ol>

          <div className="flex flex-row gap-4 mt-6">
            <Link href="/blog" className="underline font-bold">Blog</Link>
            <Link href="https://github.com/anik-bin" className="underline font-bold">Github</Link>
            <Link href="https://x.com/aniketbindhani" className="underline font-bold">X</Link>
            <Link href="https://drive.google.com/file/d/14LIGzq8_ayud01cR9adBxBY0dPKOHUSI/view?usp=sharing" className="underline font-bold">Resume</Link>
          </div>
        </div>
      </div>
    </>
  )
}
