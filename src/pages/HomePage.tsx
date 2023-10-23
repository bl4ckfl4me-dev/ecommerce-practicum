import CarouselSlider from "../components/CarouselSlider";
import Feedback from "../components/Feedback";
import Description from "../components/Description";
import Teachers from "../components/Teachers";

export default function HomePage() {
  return (
    <>
      <CarouselSlider />
      <Description />
      <Teachers />
      <Feedback />
    </>
  );
}
