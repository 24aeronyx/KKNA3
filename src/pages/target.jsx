export default function Target() {
  return (
    <div className="flex flex-col items-center pt-8 px-8 bg-customGreen md:pb-12 md:px-24 md:flex-row md:items-center md:justify-center md:gap-48">
      <div className="flex flex-col justify-center shadow-xl p-2 m-4 bg-yellow-100 md:w-1/2">
        <img src="https://i.imgur.com/IPTcMQN.jpeg" className="mb-1 w-full"></img>
        <span className="font-semibold text-center">
          Yayasan Darush Sholihin
        </span>
      </div>
      <div className="flex flex-col items-center mt-12 md:w-1/2">
        <div className="text-center font-bold mb-8 text-4xl border-b-4 w-auto border-yellow-100">
          <span>TUJUAN</span>
        </div>
        <ul className="flex flex-col list-decimal list-outside mx-4 text-justify md:text-lg md:w-full">
          <li>
            Berusaha membentuk kepribadian yang berlandaskan kepada Aqidah
            Shahihah dan Akhlak Karimah
          </li>
          <li>Memberikan pengasuhan dan layanan pendidikan.</li>
          <li>Membentuk karakter dan berkepribadian serta mandiri.</li>
          <li>
            Meningkatkan kesadaran dan partisipasi masyarakat terhadap pelayanan
            Yayasan.
          </li>
          <li>Menumbuh kembangkan minat belajar peserta didik </li>
          <li>
            Membiasakan peserta didik untuk berinteraksi dan bersosialisasi
            dengan teman sebaya dan guru.
          </li>
          <li>Menanamkan budi pekerti mulia pada peserta didik.</li>
          <li>
            Mengembangkan pendidikan dalam rangka melaksanakan syari’at Islam.
          </li>
        </ul>
      </div>
    </div>
  );
}
