import type { NextPage } from "next";
import Button from "../components/Button/Button";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const session = useSession();

  console.log(session);
  return (
    <div className={styles.container}>
      <div>
        <Button onClick={() => signIn("github")}>깃허브 로그인</Button>
        <Button onClick={() => signIn("twitch")}>트위치 로그인</Button>
      </div>
    </div>
  );
};

export default Home;
