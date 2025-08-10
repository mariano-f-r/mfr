import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import CaptionImage from "./CaptionImage.js";

const components = {
  h1: (props) => (
    <h1 {...props} className="text-4xl mt-8 font-bold">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 {...props} className="text-3xl mt-8 font-semibold">
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 {...props} className="text-2xl mt-8 font-medium">
      {props.children}
    </h3>
  ),
  p: (props) => (
    <p {...props} className="text-xl mt-6 font-normal">
      {props.children}
    </p>
  ),
  code: (props) => (
    <code {...props} className="font-mono p-1 rounded">
      {props.children}
    </code>
  ),
  pre: (props) => (
    <pre
      {...props}
      className="clear-both overflow-x-auto font-mono m-4 border border-foreground bg-white/5 p-1 rounded"
    >
      {props.children}
    </pre>
  ),
  a: (props) => (
    <a {...props} className="underline text-secondary">
      {props.children}
    </a>
  ),
  img: (props) => (
    <Image {...props} width={32 * 60} height={18 * 60} alt={props.alt} />
  ),
  CaptionImage,
  ul: (props) => (
    <ul {...props} className="list-disc list-inside">
      {props.children}
    </ul>
  ),
  ol: (props) => (
    <ol {...props} className="list-decimal list-inside">
      {props.children}
    </ol>
  ),
  li: (props) => <li {...props}>{props.children}</li>,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
