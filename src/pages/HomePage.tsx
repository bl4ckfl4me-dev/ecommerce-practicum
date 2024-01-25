import CarouselSlider from "../components/CarouselSlider";
import Feedback from "../components/Feedback";
import Description from "../components/Description";
import Teachers from "../components/Teachers";
import { useAppSelector } from "../hooks";
import { Timetable } from "../components/Timetable";

export default function HomePage() {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <>
      {!user.isLoggedIn ? (
        <>
          <CarouselSlider />
          <Description />
          <Teachers />
          <Feedback />
        </>
      ) : (
        <>
          <Timetable />
        </>
      )}
    </>
  );
}
