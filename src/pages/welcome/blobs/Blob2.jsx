const Blob2 = () => (
  <>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="75%"
      id="blobSvg2"
      filter="blur(0px)"
      style={{ opacity: "0.8" }}
    >
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(155, 175, 217)" }} />
          <stop offset="100%" style={{ stopColor: "rgb(16, 55, 131)" }} />
        </linearGradient>
      </defs>
      <path id="blob" fill="url(#gradient2)" style={{ opacity: 1 }}>
        <animate
          attributeName="d"
          dur="16s"
          repeatCount="indefinite"
          values="M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z;M419.06254,317.79517Q411.11118,385.59033,349.66843,425.59894Q288.22568,465.60755,228.34547,428.45831Q168.46526,391.30906,120.24124,353.19622Q72.01722,315.08338,69.86103,249.40801Q67.70483,183.73263,103.47221,120.73263Q139.23958,57.73263,215.36631,36.75347Q291.49305,15.77432,346.41495,69.35242Q401.33686,122.93051,414.17538,186.46526Q427.0139,250,419.06254,317.79517Z;M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;M443.46373,322.92581Q424.06453,395.85162,352.29275,408.54192Q280.52096,421.23222,209.43547,432.55323Q138.34998,443.87423,108.93547,378.01696Q79.52096,312.15968,50.50966,239.62741Q21.49835,167.09515,80.22256,112.52096Q138.94677,57.94677,211.78709,57.03792Q284.62741,56.12906,342.97339,89.43146Q401.31936,122.73387,432.09114,186.36693Q462.86293,250,443.46373,322.92581Z;M453.57191,328.53752Q437.08754,407.07503,364.57816,448.74386Q292.06878,490.41269,219.55628,459.1657Q147.04377,427.91871,108.99375,371.46874Q70.94372,315.01876,56.52814,244.52814Q42.11255,174.03752,86.02814,107.96874Q129.94372,41.89995,209.98749,31.84993Q290.03126,21.79991,346.01876,71.89683Q402.00625,121.99375,436.03126,185.99687Q470.05628,250,453.57191,328.53752Z;M404.21696,312.89783Q400.5999,375.79567,344.18719,420.60848Q287.77447,465.42129,222.25959,438.51488Q156.7447,411.60848,114.36806,363.06382Q71.99143,314.51917,65.98083,247.80853Q59.97023,181.09788,105.72982,130.10217Q151.4894,79.10645,216.18088,77.25959Q280.87235,75.41272,335.88295,103.82341Q390.89355,132.2341,399.36378,191.11705Q407.83401,250,404.21696,312.89783Z;M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z"
        />
      </path>
    </svg>
  </>
);

export default Blob2;
