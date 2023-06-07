import React from "react";

export default function Link(props) {
  return (
    <article id={"link-" + props.id} className="flex link">
      <img src={props.img} alt={"link-image-" + props.id} />
      <div>
        <span className="text-neutral-300 fs-600 fw-700">{props.id}</span>
        <a href="#" className="fs-500 fw-800">
          {props.title}
        </a>
        <p className="text-neutral-400">{props.content}</p>
      </div>
    </article>
  );
}
