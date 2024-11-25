const DownloadButton = () => (
    <button
      onClick={() => window.open("/PouryaCV.pdf", "_blank")}
      className="absolute top-4 right-4 px-4 py-3 bg-secondary text-white text-lg rounded-xl hover:bg-tertiary shadow-lg transition-all"
    >
      Download PDF Resume
    </button>
  );
  
  export default DownloadButton;
  