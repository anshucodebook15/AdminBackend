import React from "react";

export default function Pagecontainer({ children }) {
  return (
    <section className="content">
      <div className="container-fluid">{children}</div>
    </section>
  );
}
