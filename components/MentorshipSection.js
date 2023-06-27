export default function MentorshipSection() {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold font-['Sora'] tracking-wider">
          Mentorship
        </h1>
        <p className="mt-8 w-[458px] text-lg font-['Inter'] leading-8 font-thin">
          Menghabiskan banyak waktu untuk belajar{" "}
          <span className="text-[#3BF686] font-bold underline underline-offset-4">
            sendiri
          </span>{" "}
          dan tetap merasa{" "}
          <span className="text-[#3BF686] font-bold underline underline-offset-4">
            stuck
          </span>
          ?
        </p>
        <div className="flex gap-4 items-center mt-3">
          <div className="h-16 w-1.5 bg-gradient-to-b from-[#3BF686] to-[#4CA9FF]"></div>
          <p className="w-[453px] text-lg font-['Inter'] font-thin leading-8">
            Mentorship Frontend ini menjadi jawaban atas permasalahanmu. Karena
            disini, kamu bakal merasakan mentoring yang lebih personal
          </p>
        </div>
      </div>
      <div className="w-7/12">
        <div className="w-[652px] h-[231px] rounded-lg bg-card flex justify-center items-center gap-4">
          <div className="w-[173px] h-[139]">
            <div className="flex items-center gap-4">
              <img src="pertama.png" />
              <h3 className="font-['Inter'] text-lg leading-6 tracking-wider font-bold">
                Minggu Pertama
              </h3>
            </div>
            <p className="mt-3 text-sm text-white/60 font-['Inter'] leading-7 tracking-wider">
              Membahas dasar dari website seperti tag atribut dan element.{" "}
            </p>
          </div>
          <div className="w-[173px] h-[139]">
            <div className="flex items-center gap-4">
              <img src="kedua.png" />
              <h3 className="font-['Inter'] text-lg leading-6 tracking-wider font-bold">
                Minggu Kedua
              </h3>
            </div>
            <p className="mt-3 text-sm text-white/60 font-['Inter'] leading-7 tracking-wider">
              Membahas seputar Pengembangan website - SDLC dasar.
            </p>
          </div>
          <div className="w-[173px] h-[139]">
            <div className="flex items-center gap-4">
              <img src="ketiga.png" />
              <h3 className="font-['Inter'] text-lg leading-6 tracking-wider font-bold">
                Minggu Ketiga
              </h3>
            </div>
            <p className="mt-3 text-sm text-white/60 font-['Inter'] leading-7 tracking-wider">
              Membahas seputar konsep layoung seperti flexbox dan grid.
            </p>
          </div>
        </div>
        <div className="py-6 hidden lg:block">
          <button className="h-[44px] w-[256px] bg-[#3F4152] flex justify-evenly items-center text-white/60 rounded-xl font-['Inter']">
            <div className="flex flex-col gap-0.5">
              <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
              <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
              <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
              <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
            </div>
            <p className="text-sm font-['Inter']">Baca Selengkapnya</p>
          </button>
        </div>
      </div>
    </div>
  );
}
