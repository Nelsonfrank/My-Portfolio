import React from "react"

export default ({ pageContext: { data} }) => (
  <section>
    <h1>{data.title}</h1>
    <p>{data.language}</p>
  </section>
)