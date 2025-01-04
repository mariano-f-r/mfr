import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
    h1: ( props ) => (
      <h1 {...props} className="text-4xl mt-8 font-bold">{ props.children }</h1>
    ),
    h2: ( props ) => (
      <h2 {...props} className="text-3xl mt-8 font-semibold">{ props.children }</h2>
    ),
    h3: (props) => (
      <h3 {...props} className="text-2xl mt-8 font-medium">{ props.children }</h3>
    ),
    p: (props) => (
      <p {...props} className="text-xl mt-6 font-normal">{props.children}</p>
    ),
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
