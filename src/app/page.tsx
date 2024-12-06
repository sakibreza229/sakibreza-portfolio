import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home" className="h-screen  pt-96">
      home
      <a className="btn btn-primary" href="#">Hire Me</a>
      </div>
      <div id="about" className="h-screen">
      about
      </div>
    </>
  );
}
