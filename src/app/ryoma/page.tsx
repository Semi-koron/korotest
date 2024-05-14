import Link from "next/link";

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
      <h1>ryoma</h1>

      <Link href="/">top</Link>
    </>
  );
}
