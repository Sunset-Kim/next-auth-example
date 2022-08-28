import type { NextPage } from "next";
import Button from "../components/Button/Button";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button onClick={() => signIn()}>깃허브 로그인</Button>
    </div>
  );
};

export default Home;
