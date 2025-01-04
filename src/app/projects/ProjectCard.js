export default function ProjectCard({ name, url, desc, tech }) {
  return (
    <div className="mb-4 flex flex-col bg-white bg-opacity-5 p-4 rounded-lg">
      <h1 className="text-3xl text-primary font-bold underline hover:no-underline"><a href={url}>{name}</a></h1>
      <p className="mt-2 text-2xl">{desc}</p>
      <p className="mt-auto font-mono text-xl text-secondary">{tech}</p>
    </div>
  )
}
