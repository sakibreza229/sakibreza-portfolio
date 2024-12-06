import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home" className="h-screen bg-primary-dark">
      home
      </div>
      <div id="about" className="h-screen">
      about
      </div>
    </>
  );
}
