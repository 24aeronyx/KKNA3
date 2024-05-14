export default function Organization() {
  return (
    <section className="flex flex-col bg-yellow-100 gap-2 text-sm text-center pt-6 pb-6 px-4 md:py-12 md:items-center">
      <div className="flex flex-col lg:items-center lg:w-full">
        <img
          src="https://i.imgur.com/hntv8sf.png"
          className="rounded-lg my-6 lg:w-1/2"
        />
        <span className="font-bold lg:text-lg">
          SK. Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia
        </span>
        <span className="font-bold lg:text-lg">
          Nomor AHU-0001695.AH.01.04.Tahun 2021
        </span>
      </div>
      <div className="flex flex-col items-center lg:w-full lg:mt-8">
        <span className="text-center font-bold my-4 text-4xl border-b-4 w-auto border-customGreen">
          NOTARIS
        </span>
        <span className="font-bold text-lg mb-4 lg:text-2xl">
          Nurhayati, S.H., M.Kn
        </span>
        <span className="font-bold lg:text-lg">
          SK. Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia
        </span>
        <span className="font-bold lg:text-lg">
          Nomor AHU-00152.AH..02.01.Tahun 2014
        </span>
        <span className="font-bold lg:text-lg">Tgl. 01 Februari 2014</span>
      </div>
    </section>
  );
}
