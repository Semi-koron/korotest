"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/ryoma">Ryoma Page</Link>
      <Link href="/semikoron">Semikoron Page</Link>
    </>
  );
}
