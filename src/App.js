import React, { useState, useEffect } from "react";

function useMedia(query) {
  let [matches, setMatches] = useState(
    window.matchMedia(query).matches
  )  
  
  useEffect(() => {
    let media = window.matchMedia(query)
    if (media.matches !== matches)
        setMatches(media.matches)

    let listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [query])

  return matches
}

function App() {
  let small = useMedia("(max-width: 600px)")
  let large = useMedia("(min-width: 800px)")
  return (
    <div>
      <h1>React Hooks</h1>
      <h2>Now using Hooks</h2>
      <h3>SMALL: { small ? "YES" : "NOPE"  }</h3>
      <h3>LARGE: { large ? "YES" : "NOPE"  }</h3>
    </div>
  )
}

export default App;
