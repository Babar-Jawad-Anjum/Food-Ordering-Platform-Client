import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today.
        </h1>
        <span className="text-lg">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing-img" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-2xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalized
            recommendations.
          </span>
          <img src={appDownloadImage} alt="App-Download-Image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
