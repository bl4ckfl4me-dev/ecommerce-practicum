import CarouselSlider from "../components/CarouselSlider";
import Feedback from "../components/Feedback";
import Description from "../components/Description";
import Teachers from "../components/Teachers";
import { useEffect } from "react";
import { fetchUser } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function HomePage() {
  const { accessToken, refreshToken, user } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser({ username: user.username, accessToken, refreshToken }));
  }, []);
  return (
    <>
      <CarouselSlider />
      <Description />
      <Teachers />
      <Feedback />
    </>
  );
}
