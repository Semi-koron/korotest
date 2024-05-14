"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

type UserData = {
  UserId: string;
  UserIcon: string;
  DisplayName: string;
  Follower: number;
  Following: number;
  Introduce: string;
};

const SemikoronData: UserData = {
  UserId: "semikoron",
  UserIcon:
    "https://pbs.twimg.com/profile_images/1652730366892085248/djNLZzPt_400x400.jpg",
  DisplayName: "Semikoron",
  Follower: 100,
  Following: 100,
  Introduce: "I'm Semikoron",
};

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>{SemikoronData.DisplayName}</div>
      <div className={styles.links}>
        <Link href="/ryoma">Ryoma Page</Link>
        <Link href="/semikoron">Semikoron Page</Link>
        <Link href="/U5">U5 Page</Link>
      </div>
    </>
  );
}
