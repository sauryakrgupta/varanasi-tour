import kashiImg from "@/assets/kashi_vishwanath_temple.jpg";

const ImageSlideshow = () => {
  return (
    <section
      id="home"
      className="relative w-full"
      style={{ height: "100vh", minHeight: "500px" }}
    >
      {/* Full-screen Kashi Vishwanath Temple image */}
      <img
        src={kashiImg}
        alt="Kashi Vishwanath Temple Varanasi"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
    </section>
  );
};

export default ImageSlideshow;
