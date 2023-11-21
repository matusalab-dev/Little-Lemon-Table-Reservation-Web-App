import { Herosection } from "../components/Hero";
export const Home = () => {
  // just for path reference
  // const links = [
  //   ["home", "/"],
  //   ["about", "/about"],
  //   ["menu", "/menu"],
  //   ["reservation", "/reserve"],
  //   ["order online", "/order"],
  //   ["log in", "/log-in"],
  // ];
  return (
    <>
      <section className="" id="home">
        {/* <Navbar /> */}
        <Herosection />
      </section>
    </>
  );
};
