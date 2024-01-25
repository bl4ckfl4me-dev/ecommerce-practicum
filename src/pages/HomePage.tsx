import CarouselSlider from "../components/CarouselSlider";
import Feedback from "../components/Feedback";
import Description from "../components/Description";
import Teachers from "../components/Teachers";
import { useAppSelector } from "../hooks";

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
          Здесь должно быть расписание и все такое
        </>
      )}
    </>
  );
}
