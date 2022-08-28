import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import S from "../../styles/nav.module.css";
import Button from "../Button/Button";

const Nav = () => {
  const { status, data: session } = useSession();
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
            <Button>로그인</Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
