import ResumeViewer from "./ResumeViewer";
import DownloadButton from "./DownloadButton";
import Title from "./Title";

const SecondSection = () => {
  return (
    <div
      className=" z-40 relative w-full h-screen bg-cover bg-center overflow-hidden "
      style={{
        backgroundImage: "url('/Bg1.png')", 
      }}
    >
      <Title />
      <ResumeViewer />
      <DownloadButton />
    </div>
  );
};

export default SecondSection;
