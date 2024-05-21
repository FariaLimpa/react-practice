import Body1Home from "../components/home/Body1Home";
import BodyHome from "../components/home/Body1Home";
import Body2Home from "../components/home/Body2Home";
import HeaderHome from "../components/home/HeaderHome";

export default async function Home() {
  return (
    <>
      <HeaderHome></HeaderHome>
      <Body1Home></Body1Home>
      <Body2Home></Body2Home>
    </>
  );
}
