import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-5 max-w-screen-md">
          <h1 className="text-4xl font-extrabold">Hi 👋, how are you</h1>
          <p className="text-md my-4">
            I’m currently pursuing my Master’s in Cyber Security after completing my B.Tech in Computer Science. I’m passionate about technology and have always loved exploring the endless possibilities it offers.
          </p>
          <p className="text-md my-4">
            I hail from Bhubaneswar, Odisha, and I’ve had a lifelong fascination with puzzles, especially Rubik’s cubes. A few years ago, I was deeply into speedcubing, and that obsession taught me the value of patience and problem-solving — qualities I now bring to my work in full stack web development. I focus primarily on building dynamic applications using JavaScript, but I’m always curious to explore new tech landscapes.
          </p>
          <p className="text-md my-4">
            My journey into programming began rather unexpectedly. Watching "The Social Network" in high school sparked a deep curiosity in me, and I’ve been coding ever since. I love diving into different tech domains and constantly learning, even if it’s one small step at a time.
          </p>
          <p className="text-md my-4">
            When I’m not coding or writing articles to dump my thoughts (which you can find <Link href="/blog" className="underline">here</Link>), you might find me exploring new cybersecurity techniques or just tinkering around with new web frameworks. I'm excited about the future of tech, and I’m eager to be a part of its ever-evolving story.
          </p>

          <div className="flex flex-row gap-4 mt-6">
            <Link href="/blog" className="underline font-bold">Blog</Link>
            <Link href="https://github.com/anik-bin" className="underline font-bold">Github</Link>
            <Link href="https://x.com/aniketbindhani" className="underline font-bold">X</Link>
            <Link href="https://drive.google.com/file/d/1vv_RVa1gTrbvdPG1eau2u72JutgFxS29/view?usp=sharing" className="underline font-bold">Resume</Link>
          </div>
        </div>
      </div>
    </>
  )
}
