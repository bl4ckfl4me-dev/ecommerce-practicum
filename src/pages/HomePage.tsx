import { Card, Typography } from "@material-tailwind/react";
import CarouselSlider from "../components/CarouselSlider";
import Feedback from "../components/Feedback";
import Description from "../components/Description";

export default function HomePage() {
  return (
    <>
      <CarouselSlider />
      <Description />
      <Feedback />
    </>
  );
}
