import Banear from "../components/Home/Banear";
import Skills from "../components/Home/Skills";



export default function Home() {
  return (
    <div>
      {/* Banner page */}
      <div className="mt-4">
        <Banear />
      </div>

      {/* skills section */}
      <div>
        <Skills />
      </div>

      {/* Feauturse project section */}
      {/* <div>
        <FeaturedProject />
      </div> */}

    </div>
  );
}
