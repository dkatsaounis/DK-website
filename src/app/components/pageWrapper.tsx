import type React from "react";
import Footer from "./footer";
import Header from "./header";

export default function PageWrapper(props: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen items-center">
      <div className="grid min-h-screen w-full grid-rows-10">
        <Header />
        {props.children}
        <Footer />
      </div>
    </main>
  );
}
