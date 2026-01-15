"use client";
import { useState } from "react";
import { Menu } from "./ui/Menu";
import { PageContent } from "./ui/PageContent";
import PageIndexContextProvider from "./ui/PageIndexContext";
import { VisitorCounter } from "./ui/VisitorCounter";

export default function Home() {
  return (
    <main>
      <PageIndexContextProvider>
        <center>
          <img style={{ padding: "10px" }} src="images/name.gif" />
        </center>

        <hr />
        <div className="hero  min-h-screen flex flex-col">
          <Menu />
          <div className="main-box">
            <PageContent />
          </div>
          <VisitorCounter />
        </div>
      </PageIndexContextProvider>
    </main>
  );
}
