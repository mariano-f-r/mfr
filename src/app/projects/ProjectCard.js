export default function ProjectCard({ name, url, desc, tech }) {
  return (
    <div className="mb-4 flex flex-col bg-white bg-opacity-5 p-4 rounded-lg hover:scale-105 transition-all duration-150 delay-75 group">
      <h1 className="text-3xl text-primary font-bold underline group-hover:no-underline group-hover:brightness-125 transition-all">
        <a href={url}>{name}</a>
      </h1>
      <p className="mt-2 text-2xl">{desc}</p>
      <p className="mt-auto font-mono text-xl text-secondary">{tech}</p>
    </div>
  );
}
