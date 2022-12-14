import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import S from "../../styles/nav.module.css";
import Button from "../Button/Button";
import { signOut } from "next-auth/react";

const Nav = () => {
  const { status, data: session } = useSession();

  console.log(session);
  return (
    <nav className={S.nav}>
      <ul className={S.nav__list}>
        <li className={S.nav__item}>
          <Link href={"/"}>Home</Link>
        </li>

        <li className={S.nav__item}>
          <Link href={"/private"}>Private</Link>
        </li>
      </ul>

      {status === "authenticated" && (
        <ul className={S.auth__list}>
          <li className={S.auth__item}>
            <Button onClick={() => signOut()}>๋ก๊ทธ์์</Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
