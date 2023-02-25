import React from "react";
import Card from "./Card";

const Container = () => {
  return (
    <div className="Container">
      <Card
        img="https://images.unsplash.com/photo-1561822713-da02f57225b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1684&q=80"
        title="Getting Started"
        link="https://www.tillyandthebuttons.com/2019/01/how-to-start-sewing.html"
      />
      <Card
        img="https://images.unsplash.com/photo-1578353022142-09264fd64295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
        title="Tools You Need"
        link="https://www.sewessential.co.uk/blog/sewing-tools-i-need-start-sewing/"
      />
      <Card
        img="https://images.unsplash.com/photo-1584962119638-92a71b026dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Choosing a Sewing Machine"
        link="https://www.sewingmachinefun.com/how-to-choose-a-sewing-machine/"
      />
      <Card
        img=""
        title="Threading a Sewing Machine"
        link="https://blog.treasurie.com/how-to-thread-a-sewing-machine/"
      />
      <Card
        img=""
        title="Working with Patterns"
        link="https://camimade.com/how-to-use-a-sewing-pattern-5-basic-things-to-know-about-sewing-patterns/"
      />
      <Card
        img=""
        title="Fabric Shopping"
        link="https://curvysewingcollective.com/the-beginners-guide-how-to-shop-for-fabric/"
      />
      <Card
        img=""
        title="First Sewing Projects"
        link="https://www.tillyandthebuttons.com/p/learn-to-sew.html"
      />
      <Card
        img=""
        title="Learn to Sew Gartered Skirt"
        link="https://www.youtube.com/watch?v=QFpB9yS12PU"
      />
      <Card
        img=""
        title="Learn to Sew Wrap Skirt"
        link="https://www.youtube.com/watch?v=1JX0qCTjHQY"
      />
      <Card
        img=""
        title="How to Midi Skirt"
        link="https://www.youtube.com/watch?v=j-3SLbdDSW4"
      />
    </div>
  );
};

export default Container;