import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import MentorshipSection from "@/components/MentorshipSection";
import MentorshipKeuntungan from "@/components/MentorshipKeuntungan";

export default function Mentorship() {
  return (
    <Layout>
      <Container>
        <Navbar />
        <MentorshipSection />
        <MentorshipKeuntungan />
      </Container>
    </Layout>
  );
}
