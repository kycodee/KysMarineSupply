import Image from "next/image";
import Navbar from "./navbar";
import HomePhoto from "./homePhoto";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePhoto />
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by K & Y Marine Supply Ltd</p>
        </aside>
      </footer>
    </>
  );
}
