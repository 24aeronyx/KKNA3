export default function Mission() {
  return (
    <div className="flex flex-col bg-yellow-100 p-2 px-8 pt-8 pb-12 gap-12 md:flex-row md:justify-center md:gap-48 md:px-24 md:pt-24 md:pb-24">
      <div className="flex flex-col items-center md:w-1/2">
        <span className="text-center font-bold mb-8 text-4xl border-b-4 w-auto border-customGreen ">VISI</span>
        <span className="text-center md:text-lg">
          Terwujudnya generasi yang cerdas, sehat ceria dan berakhlak mulia
          serta mengembangkan potensi anak berbasis Perkembangan Teknologi.
        </span>
      </div>
      <div className="flex flex-col items-center md:w-1/2 ">
        <span className="text-center font-bold mb-8 text-4xl border-b-4 w-auto border-customGreen">MISI</span>
        <ul className="flex flex-col list-decimal list-outside mx-4 text-justify md:text-lg">
          <li>Memberikan pengasuhan dan layanan pendidikan.</li>
          <li>Membentuk karakter dan berkepribadian serta mandiri.</li>
          <li>
            Meningkatkan kesadaran dan partisipasi masyarakat terhadap pelayanan
            Yayasan.
          </li>
          <li>
            Menumbuh kembangkan minat belajar anak melalui bermain kreatif
          </li>
        </ul>
      </div>
    </div>
  );
}
