export default function Location() {
  return (
    <div className="flex flex-col bg-customGreen gap-2 text-sm text-center pt-6 pb-6 px-4 md:flex-row md:px-2 md:text-justify md:items-center md:justify-between md:pt-12 md:pb-12">
      <section className="flex flex-col bg-customGreengap-2 text-sm text-center pt-6 pb-4 px-4 md:flex-row md:px-24 md:text-justify md:items-center md:justify-between md:py-12">
        <div className="flex justify-center md:mt-0 md:w-1/2 ">
          <div className="bg-yellow-100 shadow-lg p-2 md:w-1/2 mb-4 md:flex md:flex-col ">
            <img
              src="https://i.imgur.com/PwKkxa9.jpeg"
              className="mb-1 w-60 md:w-full"
            />
            <span className="font-semibold text-center">
              Lokasi Darush Sholihin
            </span>
          </div>
        </div>
        <div className="md:w-1/2 px-2 text-justify md:px-6">
          <span className="text-base md:text-lg">
            Yayasan Darush Sholihin berkedudukan di Jl. Lindung KM. 17,
            Kelurahan Karang Joang, Kecamatan Balikpapan Utara, Kota Balikpapan,
            Provinsi Kalimantan Timur. Yayasan ini bergerak di bidang
            pendidikan, penelitian, dan pengabdian kepada masyarakat.
          </span>
        </div>
      </section>
    </div>
  );
}
