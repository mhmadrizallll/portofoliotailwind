import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import SectionPortofolio from "@/components/SectionPortofolio";
import SectionPortofolioProject from "@/components/SectionPortofolioProject";

export default function Portofolio() {
  return (
    <Layout>
      <Container>
        <Navbar />
        <SectionPortofolio />
        <SectionPortofolioProject />
      </Container>
    </Layout>
  );
}
