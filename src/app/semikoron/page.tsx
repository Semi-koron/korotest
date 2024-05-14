"use client";
import Link from "next/link";
import Profile from "../component/userprofile/page";
import { useEffect, useState } from "react";
import { fabric } from "fabric";
import { Canvas } from "fabric/fabric-impl";

const backgroundImageUrl: string = "";
const CanvasId: string = "test";
const initialBrushColor = "red";
const initialBrushWidth = 25;

export default function Home() {
  const [fabricCanvas, setFabricCanvas] = useState<Canvas>();

  useEffect(() => {
    const canvas = new fabric.Canvas(CanvasId, {
      isDrawingMode: true,
      width: 500,
      height: 500,
      backgroundImage: backgroundImageUrl,
    });
    canvas.freeDrawingBrush.color = initialBrushColor;
    setFabricCanvas(canvas);
  }, []);

  return (
    <>
      <h1>Semikoron Page</h1>
      <canvas id={CanvasId} width="500" height="500"></canvas>
      <Profile userName="semikoron" />
      <Link href="/">top</Link>
    </>
  );
}
