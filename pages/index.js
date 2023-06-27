import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Biography from "@/components/Biography";
import WhatIdo from "@/components/WhatIdo";
import SectionProject from "@/components/SectionProject";
import CodeSnippet from "@/components/CodeSnippet";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Navbar />
        <Title />
        <Biography />
        <WhatIdo />
        <SectionProject />
        <CodeSnippet />
      </Container>
    </Layout>
  );
}
