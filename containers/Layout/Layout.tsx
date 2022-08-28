import React, { PropsWithChildren } from "react";
import Nav from "../../components/Nav/Nav";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <Nav />
        <main
          style={{
            flex: 1,
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
