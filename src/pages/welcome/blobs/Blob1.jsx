const Blob1 = () => (
  <>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="100%"
      id="blobSvg1"
      filter="blur(0px)"
      style={{ opacity: "0.7" }}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(155, 175, 217)" }} />
          <stop offset="100%" style={{ stopColor: "rgb(16, 55, 131)" }} />
        </linearGradient>
      </defs>
      <path id="blob" fill="url(#gradient1)" style={{ opacity: 1 }}>
        <animate
          attributeName="d"
          dur="16000ms"
          repeatCount="indefinite"
          values="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z"
        />
      </path>
    </svg>
  </>
);

export default Blob1;
