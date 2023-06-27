import Link from "next/link";

export default function SectionProject() {
  return (
    <div className="py-10 hidden md:block w-10/12 mx-auto lg:w-full lg:mx-0">
      <h1 className="text-4xl font-bold font-['Sora'] tracking-wide">
        Featured Project
      </h1>
      <div className="flex lg:block py-16 lg:py-0">
        <div className="flex py-10 items-center">
          <div className="w-6/12 hidden lg:block">
            <div className="w-11/12">
              <div className="bg-card h-80 relative rounded-md">
                <div className="h-9 w-9 absolute left-10 top-5">
                  <img src="new.png" />
                </div>
                <div className="h-9 w-9 bg-[#3F4152] rounded-lg absolute right-3 top-3 flex justify-center items-center">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.50326 1.28315C1.49787 1.01804 1.598 0.761645 1.78163 0.570348C1.96525 0.379051 2.21733 0.268516 2.48244 0.26305L10.9659 0.0894222C11.2311 0.0840363 11.4874 0.184164 11.6787 0.367788C11.87 0.551412 11.9806 0.803495 11.986 1.0686L12.1597 9.55211C12.1605 9.81431 12.0583 10.0663 11.8751 10.2539C11.6918 10.4415 11.4423 10.5496 11.1801 10.555C10.918 10.5603 10.6642 10.4625 10.4735 10.2826C10.2827 10.1027 10.1703 9.85504 10.1604 9.59303L10.0362 3.52308L2.01298 11.8815C1.82932 12.0729 1.57717 12.1834 1.31201 12.1888C1.04685 12.1943 0.790393 12.0941 0.599058 11.9105C0.407724 11.7268 0.297184 11.4747 0.291757 11.2095C0.28633 10.9444 0.38646 10.6879 0.57012 10.4966L8.59331 2.1381L2.52336 2.26233C2.25825 2.26771 2.00185 2.16759 1.81056 1.98396C1.61926 1.80034 1.50873 1.54826 1.50326 1.28315Z"
                      fill="#EBEBEB"
                    />
                  </svg>
                </div>
                <div className="flex gap-3 absolute top-20 left-11">
                  <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
                    <img src="tailwind.png" />
                  </div>
                  <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
                    <img src="react.png" />
                  </div>
                </div>
                <img
                  src="featured1.png"
                  className="w-10/12 object-cover absolute bottom-0 left-[45px]"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full text-center lg:text-start">
            <div className="w-11/12 mx-auto">
              <h2 className="text-lg font-bold tracking-wider font-['Inter']">
                Web Development
              </h2>
              <h1 className="text-4xl font-bold font-['Sora'] mt-8 tracking-wider">
                Collosal Landingpage
              </h1>
              <p className="text-md leading-8 font-['Inter'] tracking-widest mt-10 font-thin text-white/80">
                Serrow restructured and designed core pages, creating
                interactive elements that put users in control and allowed them
                to discover the information needed to make a decision.
              </p>
            </div>
          </div>
        </div>
        <div className="flex py-5 items-center">
          <div className="w-6/12 hidden lg:block">
            <div className="w-11/12">
              <div className="bg-card h-80 relative rounded-lg">
                <div className="h-9 w-9 bg-[#3F4152] rounded-lg absolute right-3 top-3 flex justify-center items-center">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.50326 1.28315C1.49787 1.01804 1.598 0.761645 1.78163 0.570348C1.96525 0.379051 2.21733 0.268516 2.48244 0.26305L10.9659 0.0894222C11.2311 0.0840363 11.4874 0.184164 11.6787 0.367788C11.87 0.551412 11.9806 0.803495 11.986 1.0686L12.1597 9.55211C12.1605 9.81431 12.0583 10.0663 11.8751 10.2539C11.6918 10.4415 11.4423 10.5496 11.1801 10.555C10.918 10.5603 10.6642 10.4625 10.4735 10.2826C10.2827 10.1027 10.1703 9.85504 10.1604 9.59303L10.0362 3.52308L2.01298 11.8815C1.82932 12.0729 1.57717 12.1834 1.31201 12.1888C1.04685 12.1943 0.790393 12.0941 0.599058 11.9105C0.407724 11.7268 0.297184 11.4747 0.291757 11.2095C0.28633 10.9444 0.38646 10.6879 0.57012 10.4966L8.59331 2.1381L2.52336 2.26233C2.25825 2.26771 2.00185 2.16759 1.81056 1.98396C1.61926 1.80034 1.50873 1.54826 1.50326 1.28315Z"
                      fill="#EBEBEB"
                    />
                  </svg>
                </div>
                <div className="flex gap-3 absolute top-20 left-11">
                  <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
                    <img src="tailwind.png" />
                  </div>
                  <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center">
                    <img src="react.png" />
                  </div>
                </div>
                <img
                  src="featured2.png"
                  className="w-10/12 object-cover absolute bottom-0 left-[45px]"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full text-center lg:text-start">
            <div className="w-11/12 mx-auto">
              <h2 className="text-lg font-bold tracking-wider font-['Inter']">
                Web Development
              </h2>
              <h1 className="text-4xl font-bold font-['Sora'] mt-8 tracking-wider">
                Epictetus Landingpage
              </h1>
              <p className="text-md leading-8 font-['Inter'] tracking-widest mt-10 font-thin text-white/80">
                Serrow restructured and designed core pages, creating
                interactive elements that put users in control and allowed them
                to discover the information needed to make a decision.
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 hidden lg:block">
          <Link href="portofolio">
            <button className="h-12 w-48 bg-[#3F4152] flex justify-evenly items-center text-white/60 rounded-xl font-['Inter']">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
                <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
                <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
                <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
              </div>
              <p className="text-sm font-['Inter']">See More</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
