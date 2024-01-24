import { Carousel, IconButton, Typography } from "@material-tailwind/react";

export default function CarouselSlider() {
  const carouselDatas: Array<CarouselDatas> = [
    {
      backgroundPath: "..\\..\\static\\img\\DevochkaDenis.jpg",
      title: "Онлайн школа",
      description:
        "современный и гибкий формат образования, который позволяет учиться в удобное время и из любого места",
    },
    {
      backgroundPath: "..\\..\\static\\img\\classMarat.jpg",
      title: "Онлайн школа",
      description:
        "Мы предлагаем широкий выбор курсов по различным предметам: математике, английскому языку, программированию, и др",
    },
    {
      backgroundPath: "..\\..\\static\\img\\classZaur.jpg",
      title: "Онлайн школа",
      description:
        "Система онлайн обучения позволяет контролировать прогресс и получать обратную связь, а также общаться с преподавателями и другими учениками",
    },
    {
      backgroundPath: "..\\..\\static\\img\\classZaur2.jpg",
      title: "Онлайн школа",
      description:
        "Присоединяйтесь к нам и раскройте свой потенциал в комфортной обстановке!",
    },
  ];

  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ ease: "easeOut", duration: 1 }}
      className="h-96 my-7"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {carouselDatas.map((data, index) => (
        <div className="relative h-full w-full" key={index}>
          <img
            src={data.backgroundPath}
            alt="image 4"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {data.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {data.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

interface CarouselDatas {
  backgroundPath: string;
  title: string;
  description: string;
}
