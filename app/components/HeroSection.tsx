import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-[90px] lg:pt-[50px] -z-50 bg-zinc-900">
      <Image
        objectFit="cover"
        fill
        src="/assets/timeline-background.jpg"
        alt="Video Editing Service Logo"
        className="-z-10 blur-sm brightness-75"
      />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-zinc-100">
            <div className="underline decoration-primary-400">Video Editing </div>for YouTubers and TikTokers
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-zinc-200">
            Get your videos Professionally Edited in Your Personal Style
          </p>
          <a
            href="https://calendly.com/visionarystudiosmedia/30min?month=2024-03"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-900"
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
          {/* <a href="https://calendly.com/visionarystudiosmedia/30min?month=2024-03" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-zinc-900 border border-zinc-300 rounded-lg hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
            Schedule A Call
            </a>  */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <iframe
            className="rounded-lg sm:rounded-none sm:rounded-l-lg shadow-2xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/biyz_t9olQo?si=W-cyZEFiYmicOYVc&amp;controls=0"
            title="Video Editing Tiktok"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
