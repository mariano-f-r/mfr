// unsure if needed with remotemdx

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl mt-4 font-bold">{ children }</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl mt-4 font-semibold">{ children }</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl mt-4 font-medium">{ children }</h3>
    ),
    p: ({ children }) => (
      <p className="text-xl mt-2 font-normal">{children}</p>
    ),
    ...components,
  }
}
