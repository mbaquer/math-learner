import React from "react";
import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Math Learner" },
  ];
}

export default function Home() {
  return <Welcome />;
}
