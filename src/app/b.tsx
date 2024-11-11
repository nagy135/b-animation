"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

const cartesianDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

export default function B() {
  const dx1 = useMotionValue(0);
  const dy1 = useMotionValue(0);
  const x1 = useTransform(() => 175.704941 + dx1.get());
  const y1 = useTransform(() => 243.75419 + dy1.get());

  const dx2 = useMotionValue(0);
  const dy2 = useMotionValue(0);
  const x2 = useTransform(() => 95 + dx2.get());
  const y2 = useTransform(() => 81.229313 + dy2.get());

  const dx3 = useMotionValue(0);
  const dy3 = useMotionValue(0);
  const x3 = useTransform(() => 95 + dx3.get());
  const y3 = useTransform(() => 188.991047 + dy3.get());

  const dx4 = useMotionValue(0);
  const dy4 = useMotionValue(0);
  const x4 = useTransform(() => 125 + dx4.get());
  const y4 = useTransform(() => 242.921641 + dy4.get());

  const dx5 = useMotionValue(0);
  const dy5 = useMotionValue(0);
  const x5 = useTransform(() => 205 + dx5.get());
  const y5 = useTransform(() => 189.025981 + dy5.get());

  const dx6 = useMotionValue(0);
  const dy6 = useMotionValue(0);
  const x6 = useTransform(() => 125 + dx6.get());
  const y6 = useTransform(() => 137.408064 + dy6.get());

  useAnimationFrame(() => {
    dx1.set(dx1.get() * 0.95);
    dy1.set(dy1.get() * 0.95);
    dx2.set(dx2.get() * 0.95);
    dy2.set(dy2.get() * 0.95);
    dx3.set(dx3.get() * 0.95);
    dy3.set(dy3.get() * 0.95);
    dx4.set(dx4.get() * 0.95);
    dy4.set(dy4.get() * 0.95);
    dx5.set(dx5.get() * 0.95);
    dy5.set(dy5.get() * 0.95);
    dx6.set(dx6.get() * 0.95);
    dy6.set(dy6.get() * 0.95);
  });
  return (
    <motion.svg
      onMouseMove={(e) => {
        const movementX = e.movementX * 0.5;
        const movementY = e.movementY * 0.5;

        const x = e.clientX;
        const y = e.clientY;

        const distanceTo1 = cartesianDistance(x, y, x1.get(), y1.get());
        const distanceTo2 = cartesianDistance(x, y, x2.get(), y2.get());
        const distanceTo3 = cartesianDistance(x, y, x3.get(), y3.get());
        const distanceTo4 = cartesianDistance(x, y, x4.get(), y4.get());
        const distanceTo5 = cartesianDistance(x, y, x5.get(), y5.get());
        const distanceTo6 = cartesianDistance(x, y, x6.get(), y6.get());

        const maxMove = 150;

        const newDx1 =
          movementX * ((1 * Math.max(0, maxMove - distanceTo1)) / maxMove);
        const newDy1 =
          movementY * ((1 * Math.max(0, maxMove - distanceTo1)) / maxMove);
        dx1.set(dx1.get() + newDx1 * (1 - Math.abs(newDx1) / maxMove));
        dy1.set(dy1.get() + newDy1 * (1 - Math.abs(newDy1) / maxMove));

        const newDx2 =
          movementX * ((1 * Math.max(0, maxMove - distanceTo2)) / maxMove);
        const newDy2 =
          movementY * ((1 * Math.max(0, maxMove - distanceTo2)) / maxMove);
        dx2.set(dx2.get() + newDx2 * (1 - Math.abs(newDx2) / maxMove));
        dy2.set(dy2.get() + newDy2 * (1 - Math.abs(newDy2) / maxMove));

        const newDx3 =
          movementX * ((1 * Math.max(0, maxMove - distanceTo3)) / maxMove);
        const newDy3 =
          movementY * ((1 * Math.max(0, maxMove - distanceTo3)) / maxMove);
        dx3.set(dx3.get() + newDx3 * (1 - Math.abs(newDx3) / maxMove));
        dy3.set(dy3.get() + newDy3 * (1 - Math.abs(newDy3) / maxMove));

        const newDx4 =
          movementX * ((1 * Math.max(0, maxMove - distanceTo4)) / maxMove);
        const newDy4 =
          movementY * ((1 * Math.max(0, maxMove - distanceTo4)) / maxMove);
        dx4.set(dx4.get() + newDx4 * (1 - Math.abs(newDx4) / maxMove));
        dy4.set(dy4.get() + newDy4 * (1 - Math.abs(newDy4) / maxMove));

        const newDx5 =
          movementX * ((1 * Math.max(0, maxMove - distanceTo5)) / maxMove);
        const newDy5 =
          movementY * ((1 * Math.max(0, maxMove - distanceTo5)) / maxMove);
        dx5.set(dx5.get() + newDx5 * (1 - Math.abs(newDx5) / maxMove));
        dy5.set(dy5.get() + newDy5 * (1 - Math.abs(newDy5) / maxMove));

        const newDx6 =
          movementX * ((1 * Math.max(0, maxMove - distanceTo6)) / maxMove);
        const newDy6 =
          movementY * ((1 * Math.max(0, maxMove - distanceTo6)) / maxMove);
        dx6.set(dx6.get() + newDx6 * (1 - Math.abs(newDx6) / maxMove));
        dy6.set(dy6.get() + newDy6 * (1 - Math.abs(newDy6) / maxMove));
      }}
      id="b"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      project-id="4e56f334af864e64958c702e2f826936"
      export-id="55c5e64e23574afba2501a76fc28a608"
    >
      <motion.polygon
        id="b-s-polygon1"
        points="0,-43.6145 37.771265,21.807249 -37.771265,21.807249 0,-43.6145"
        transform="matrix(.864426-.502761 0.502761 0.864426 175.704941 243.75419)"
        strokeWidth="0"
        style={{
          x: x1,
          y: y1,
          rotate: -30,
        }}
      />
      <motion.polygon
        id="b-s-polygon2"
        points="0,-42.312731 36.6439,21.156366 -36.6439,21.156366 0,-42.312731"
        transform="matrix(-.002837 1.062511-.999996-.00267 97.270057 81.229313)"
        strokeWidth="0"
        style={{
          x: x2,
          y: y2,
          rotate: -30,
        }}
      />
      <motion.polygon
        id="b-s-polygon3"
        points="0,-42.312731 36.6439,21.156366 -36.6439,21.156366 0,-42.312731"
        transform="matrix(-.002837 1.062511-.999996-.00267 97.815327 188.991047)"
        style={{
          x: x3,
          y: y3,
          rotate: -30,
        }}
        strokeWidth="0"
      />
      <motion.polygon
        id="b-s-polygon4"
        points="0,-42.312731 36.6439,21.156366 -36.6439,21.156366 0,-42.312731"
        transform="matrix(-.004603-1.062505 0.999991-.004332 119.244011 242.921641)"
        style={{
          x: x4,
          y: y4,
          rotate: 30,
        }}
        strokeWidth="0"
      />
      <motion.polygon
        id="b-s-polygon5"
        points="0,-42.312731 36.6439,21.156366 -36.6439,21.156366 0,-42.312731"
        transform="matrix(-.004603-1.062505 0.999991-.004332 197.99438 189.025981)"
        style={{
          x: x5,
          y: y5,
          rotate: 30,
        }}
        strokeWidth="0"
      />
      <motion.polygon
        id="b-s-polygon6"
        points="0,-42.312731 36.6439,21.156366 -36.6439,21.156366 0,-42.312731"
        transform="matrix(-.004603-1.062505 0.999991-.004332 118.153834 137.408064)"
        style={{
          x: x6,
          y: y6,
          rotate: 30,
        }}
        strokeWidth="0"
      />
    </motion.svg>
  );
}
