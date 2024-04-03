import Image from "next/image";

const JamesSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            James Smolak
          </h2>
          <p className="mb-4">
            I'm a professional Video Editor with currently 73+ million views.
            Located in the Niagara Region helping businesses with their video
            needs. You can contact me for
            <a href="#contact"> a free quote. </a>
            I've worked with Youtubers and companies to create professionally
            made commercials and videos.
          </p>
          <p>***************</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="https://calendly.com/visionarystudiosmedia/30min?month=2024-03"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Schedule A Call
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            width={200}
            height={200}
            src="/assets/portfolio_2.jpg"
            alt="James Smolak"
          />

          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            width={200}
            height={200}
            src="/assets/portfolio_4.jpg"
            alt="Video Editing"
          />
        </div>
      </div>
    </section>
  );
};

export default JamesSection;
