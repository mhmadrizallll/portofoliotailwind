export default function CodeSnippet() {
  return (
    <div className="py-10 hidden md:block md:w-10/12 md:mx-auto lg:w-full lg:mx-0">
      <h1 className="text-4xl font-bold font-['Sora'] tracking-wide">
        Code Snippet
      </h1>

      <div className="flex flex-wrap gap-y-10 py-10 justify-evenly">
        <div className="w-6/12">
          <div className="w-11/12 lg:h-64 h-[350px] bg-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold font-['Sora'] tracking-wider">
              Nextjs Starter
            </h2>
            <p className="font-['Inter'] text-md text-white/80 mt-7 tracking-wider">
              A dead simple for nextjs project.
            </p>
            <div className="flex items-center justify-between lg:mt-20 mt-32">
              <div className="flex gap-4 items-center">
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="tailwind.png" />
                </div>
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="react.png" />
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9541 12.2198C19.2841 11.2067 20.7174 11.2067 21.0463 12.2198L22.2233 15.841C22.2952 16.0615 22.435 16.2537 22.6226 16.39C22.8103 16.5263 23.0363 16.5998 23.2683 16.6H27.0765C28.1424 16.6 28.5846 17.964 27.7233 18.591L24.6433 20.8284C24.4552 20.9648 24.3152 21.1573 24.2432 21.3782C24.1713 21.5992 24.1712 21.8372 24.2429 22.0582L25.4199 25.6794C25.7499 26.6925 24.5894 27.5362 23.7259 26.9092L20.6459 24.6718C20.458 24.5354 20.2318 24.4619 19.9996 24.4619C19.7675 24.4619 19.5412 24.5354 19.3534 24.6718L16.2734 26.9092C15.411 27.5362 14.2516 26.6925 14.5805 25.6794L15.7575 22.0582C15.8292 21.8372 15.829 21.5992 15.7571 21.3782C15.6852 21.1573 15.5451 20.9648 15.3571 20.8284L12.2782 18.5921C11.4169 17.9651 11.8602 16.6011 12.925 16.6011H16.7321C16.9642 16.6011 17.1904 16.5278 17.3783 16.3914C17.5662 16.2551 17.7062 16.0628 17.7782 15.8421L18.9552 12.2209L18.9541 12.2198Z"
                    fill="#FFF615"
                  />
                </svg>
                <p>8 Stars</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 hidden lg:block">
          <div className="w-11/12 h-64 bg-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold font-['Sora'] tracking-wider">
              Frontend Starter Kit
            </h2>
            <p className="font-['Inter'] text-md text-white/80 mt-7 tracking-wider">
              A dead simple for html 5 boilerplate project. Included setup for
              minify css, html minify, SEO setting.
            </p>
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-4 items-center">
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="tailwind.png" />
                </div>
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="react.png" />
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9541 12.2198C19.2841 11.2067 20.7174 11.2067 21.0463 12.2198L22.2233 15.841C22.2952 16.0615 22.435 16.2537 22.6226 16.39C22.8103 16.5263 23.0363 16.5998 23.2683 16.6H27.0765C28.1424 16.6 28.5846 17.964 27.7233 18.591L24.6433 20.8284C24.4552 20.9648 24.3152 21.1573 24.2432 21.3782C24.1713 21.5992 24.1712 21.8372 24.2429 22.0582L25.4199 25.6794C25.7499 26.6925 24.5894 27.5362 23.7259 26.9092L20.6459 24.6718C20.458 24.5354 20.2318 24.4619 19.9996 24.4619C19.7675 24.4619 19.5412 24.5354 19.3534 24.6718L16.2734 26.9092C15.411 27.5362 14.2516 26.6925 14.5805 25.6794L15.7575 22.0582C15.8292 21.8372 15.829 21.5992 15.7571 21.3782C15.6852 21.1573 15.5451 20.9648 15.3571 20.8284L12.2782 18.5921C11.4169 17.9651 11.8602 16.6011 12.925 16.6011H16.7321C16.9642 16.6011 17.1904 16.5278 17.3783 16.3914C17.5662 16.2551 17.7062 16.0628 17.7782 15.8421L18.9552 12.2209L18.9541 12.2198Z"
                    fill="#FFF615"
                  />
                </svg>
                <p>12 Stars</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 hidden lg:block">
          <div className="w-11/12 h-64 bg-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold font-['Sora'] tracking-wider">
              Nextjs Starter
            </h2>
            <p className="font-['Inter'] text-md text-white/80 mt-7 tracking-wider">
              A dead simple for nextjs project.
            </p>
            <div className="flex items-center justify-between mt-20">
              <div className="flex gap-4">
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="tailwind.png" />
                </div>
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="react.png" />
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9541 12.2198C19.2841 11.2067 20.7174 11.2067 21.0463 12.2198L22.2233 15.841C22.2952 16.0615 22.435 16.2537 22.6226 16.39C22.8103 16.5263 23.0363 16.5998 23.2683 16.6H27.0765C28.1424 16.6 28.5846 17.964 27.7233 18.591L24.6433 20.8284C24.4552 20.9648 24.3152 21.1573 24.2432 21.3782C24.1713 21.5992 24.1712 21.8372 24.2429 22.0582L25.4199 25.6794C25.7499 26.6925 24.5894 27.5362 23.7259 26.9092L20.6459 24.6718C20.458 24.5354 20.2318 24.4619 19.9996 24.4619C19.7675 24.4619 19.5412 24.5354 19.3534 24.6718L16.2734 26.9092C15.411 27.5362 14.2516 26.6925 14.5805 25.6794L15.7575 22.0582C15.8292 21.8372 15.829 21.5992 15.7571 21.3782C15.6852 21.1573 15.5451 20.9648 15.3571 20.8284L12.2782 18.5921C11.4169 17.9651 11.8602 16.6011 12.925 16.6011H16.7321C16.9642 16.6011 17.1904 16.5278 17.3783 16.3914C17.5662 16.2551 17.7062 16.0628 17.7782 15.8421L18.9552 12.2209L18.9541 12.2198Z"
                    fill="#FFF615"
                  />
                </svg>
                <p>8 Stars</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <div className="w-11/12 lg:h-64 h-[350px] bg-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold font-['Sora'] tracking-wider">
              Frontend Starter Kit
            </h2>
            <p className="font-['Inter'] text-md text-white/80 mt-7 tracking-wider">
              A dead simple for html 5 boilerplate project. Included setup for
              minify css, html minify, SEO setting.
            </p>
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-4">
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="tailwind.png" />
                </div>
                <div className="h-11 w-11 bg-white flex items-center justify-center rounded-xl">
                  <img src="react.png" />
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9541 12.2198C19.2841 11.2067 20.7174 11.2067 21.0463 12.2198L22.2233 15.841C22.2952 16.0615 22.435 16.2537 22.6226 16.39C22.8103 16.5263 23.0363 16.5998 23.2683 16.6H27.0765C28.1424 16.6 28.5846 17.964 27.7233 18.591L24.6433 20.8284C24.4552 20.9648 24.3152 21.1573 24.2432 21.3782C24.1713 21.5992 24.1712 21.8372 24.2429 22.0582L25.4199 25.6794C25.7499 26.6925 24.5894 27.5362 23.7259 26.9092L20.6459 24.6718C20.458 24.5354 20.2318 24.4619 19.9996 24.4619C19.7675 24.4619 19.5412 24.5354 19.3534 24.6718L16.2734 26.9092C15.411 27.5362 14.2516 26.6925 14.5805 25.6794L15.7575 22.0582C15.8292 21.8372 15.829 21.5992 15.7571 21.3782C15.6852 21.1573 15.5451 20.9648 15.3571 20.8284L12.2782 18.5921C11.4169 17.9651 11.8602 16.6011 12.925 16.6011H16.7321C16.9642 16.6011 17.1904 16.5278 17.3783 16.3914C17.5662 16.2551 17.7062 16.0628 17.7782 15.8421L18.9552 12.2209L18.9541 12.2198Z"
                    fill="#FFF615"
                  />
                </svg>
                <p>12 Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 hidden lg:block">
        <button className="h-12 w-48 bg-[#3F4152] flex justify-evenly items-center text-white/60 rounded-xl font-['Inter']">
          <div className="flex flex-col gap-0.5">
            <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
            <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
            <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
            <div className="w-4 h-0.5 bg-white/60 rounded-lg"></div>
          </div>
          <p className="text-sm font-['Inter']">See More</p>
        </button>
      </div>
    </div>
  );
}
