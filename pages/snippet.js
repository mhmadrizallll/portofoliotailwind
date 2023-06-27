import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import SectionSnippet from "@/components/SectionSnippet";

export default function Snippet() {
  return (
    <Layout>
      <Container>
        <Navbar />
        <SectionSnippet />
      </Container>
    </Layout>
  );
}
