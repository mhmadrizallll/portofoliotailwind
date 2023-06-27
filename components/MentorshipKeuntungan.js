export default function MentorshipKeuntungan() {
  return (
    <div className="py-[149px] flex">
      <div className="w-4/12 text-center">
        <h1 className="font-['Sora'] font-bold text-5xl leading-[56px] tracking-wider">
          Keuntungan Mentorship
        </h1>

        <div className="flex justify-center">
          <img src="mentorship.png" />
        </div>
      </div>
      <div className="w-8/12 flex flex-col gap-y-9 items-end">
        <div className="w-[655px] h-[180px] bg-card flex justify-center items-center relative">
          <div className="absolute -left-16">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#3BF686] to-[#4CA9FF] p-0.5">
              <div className="bg-card rounded-full h-full w-full flex justify-center items-center">
                <img src="mentor1.png" />
              </div>
            </div>
          </div>
          <div className="w-[457px]">
            <h3 className="font-['Sora'] font-bold text-[28px] leading-[56px] tracking-wider">
              Mentorship 1 : 1
            </h3>
            <p className="text-sm text-white/60 font-['Inter'] leading-7 tracking-wider w-[400px]">
              Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan
              konsultasi seputar mentorship frontend atau hal lainnya
            </p>
          </div>
        </div>
        <div className="w-[655px] h-[180px] bg-card flex justify-center items-center relative">
          <div className="absolute -left-16">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#3BF686] to-[#4CA9FF] p-0.5">
              <div className="bg-card rounded-full h-full w-full flex justify-center items-center">
                <img src="mentor2.png" />
              </div>
            </div>
          </div>
          <div className="w-[457px]">
            <h3 className="font-['Sora'] font-bold text-[28px] leading-[56px] tracking-wider">
              Terarah
            </h3>
            <p className="text-sm text-white/60 font-['Inter'] leading-7 tracking-wider w-[400px]">
              Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan
              konsultasi seputar mentorship frontend atau hal lainnya
            </p>
          </div>
        </div>
        <div className="w-[655px] h-[180px] bg-card flex justify-center items-center relative">
          <div className="absolute -left-16">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#3BF686] to-[#4CA9FF] p-0.5">
              <div className="bg-card rounded-full h-full w-full flex justify-center items-center">
                <img src="mentor3.png" />
              </div>
            </div>
          </div>
          <div className="w-[457px]">
            <h3 className="font-['Sora'] font-bold text-[28px] leading-[56px] tracking-wider">
              Silabus
            </h3>
            <p className="text-sm text-white/60 font-['Inter'] leading-7 tracking-wider w-[400px]">
              Silabus praktis, fundamental yang bisa diimplementasikan
              berdasarkan studi kasus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
