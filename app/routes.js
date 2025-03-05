import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("prealgebra", "routes/prealgebra.jsx"),
  route("algebra", "routes/algebra.jsx"),
  route("calculus", "routes/calculus.jsx"),
];
