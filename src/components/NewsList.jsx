import React from "react";

export default function NewsList() {
  const News = (props) => (
    <article>
      <a href="#" className="fs-550 fw-700">
        {props.title}
      </a>
      <p className="text-neutral-300">{props.content}</p>
    </article>
  );

  return (
    <aside id="news" className="bg-neutral-900 text-neutral-100">
      <h2 className="text-orange-400 fs-700">New</h2>
      <News
        key="1"
        id="1"
        title="Hydrogen VS Electric Cars"
        content="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <News
        key="2"
        id="2"
        title="The Downsides of AI Artistry"
        content="What are the possible adverse effects of on-demand AI image
        generation?"
      />
      <News
        key="3"
        id="3"
        title="Is VC Funding Drying Up?"
        content="Private funding by VC firms is down 50% YOY. We take a look at what
        that means."
      />
    </aside>
  );
}
