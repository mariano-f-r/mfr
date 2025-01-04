import Prompt from "../Prompt.js"

export default function About() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col h-screen w-1/2 max-sm:w-screen">
        <div className="mt-16 max-sm:mx-4">
          <div className="text-3xl">
            <Prompt cmd="cat about.md" />
          </div>
          <p className="mt-4 text-xl">
            I&apos;m Mariano, a student with a strong focus on learning how to do things in <strong className="text-accent font-semibold">powerful</strong>,
            <strong className="text-accent font-semibold"> flexible</strong>, and <strong className="text-accent font-semibold">idiomatic</strong> ways.
            I am currently attending the University of Illinois at Urbana-Champaign for a bachelor&apos;s degree in Computer Science.
          </p>
          <p className="mt-4 text-xl">
            I got into Computer Science in 2020, when, having been forced inside by global events, I decided to pick up programming for the hell of it.
            I&apos;ve been at it ever since then, starting with Python, building a few web apps with Django, and then moving on to Swift, and then lastly, Rust
            , picking up languages like JavaScript, and C along the way. 
          </p>
          <p className="mt-4 text-xl">
            Lately, I&apos;ve been working with a lot of embedded technologies.
            At school, I&apos;ve been involved with the Illinois Space Society writing firmware in Rust for a test gantry, as well as writing firmware for
            a RP2040-based microcontroller for a school project.
          </p>
          <p className="mt-4 text-xl">
            When I&apos;m not tinkering around with tech, you can find me cooking up a delicious meal, in the gym, trying to improve my lifting
            personal bests, reading philosophy, or out on run.
          </p>
        </div>
        <div className="mt-8 max-sm:mx-4 pb-4">
          <div className="text-3xl">
            <Prompt cmd="cat tech.md" />
          </div>
          <p className="mt-4 text-xl">
            My technical range is fairly broad (or at least I like to think so). Here are some technologies that I am pretty confident with:
          </p>
          <div className="grid max-sm:grid-cols-2 grid-cols-4 mt-4 text-2xl">
            <p>Rust</p>
            <p>Tokio</p>
            <p>Python</p>
            <p>Django</p>
            <p>Kotlin</p>
            <p>C</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>Java</p>
            <p>SQL</p>
            <p>WebSockets</p>
            <p>UART</p>
            <p>I2C, SPI, PWM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
