import Prompt from "../Prompt.js";
import ProjectCard from "./ProjectCard.js";

export default function Projects() {
  return (
    <>
      <div className=" text-4xl">
        <Prompt cmd="ls" />
      </div>
      <p className="my-4">
        The following are all projects I&apos;ve developed on my own time and
        consider &quot;complete&quot;. They are sorted from oldest to newest,
        and as a result, likely from highest to lowest code quality.
      </p>
      <div>
        <ProjectCard
          name="parse_rc_ibus"
          url="https://github.com/mariano-f-r/parse_rc_ibus"
          tech="Rust"
          desc="A Rust crate I made to parse the FrSky company's RC radio protocol. Useful for constructing custom flight controllers"
        />
        <ProjectCard
          name="vexdoc"
          url="https://github.com/mariano-f-r/vexdoc"
          tech="Rust, CLI"
          desc="A Rust CLI I made to replace an internal tool that I made for documenting code for Vex Robotics. Using Google's argh library."
        />
        <ProjectCard
          name="chatter"
          url="https://github.com/mariano-f-r/chatter"
          tech="Rust, WebSockets, Tokio, Shuttle"
          desc="A WebSocket chat app I made for the sake of making a project. First experience using async Rust, as well as the Shuttle platform."
        />
        <ProjectCard
          name="ToDoer"
          url="https://github.com/mariano-f-r/ToDoer"
          tech="Swift, UIKit, SQLite3"
          desc="A simple to-do list app that I made as a capstone project"
        />
        <ProjectCard
          name="my-recipe-app"
          url="https://github.com/mariano-f-r/my-recipe-app"
          tech="Python, Django, PostgreSQL, Heroku"
          desc="A web app for sharing recipes. First time making a project without following a tutorial."
        />
        <ProjectCard
          name="new-webapp"
          url="https://github.com/mariano-f-r/new-webapp"
          tech="Python, Django, PostgreSQl, Heroku"
          desc="One of the oldest projects I have source code for, this is a small Django project I made following a tutorial by Corey Schafer. This is also the first project I ever deployed to the web."
        />
      </div>
    </>
  );
}
