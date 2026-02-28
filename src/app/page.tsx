import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PatientForm from "@/components/PatientForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="pb-20">
        <PatientForm />
      </div>
    </>
  );
}