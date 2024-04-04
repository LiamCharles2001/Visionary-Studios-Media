import Image from "next/image";

{/*bg-gradient-to-r from-amber-500 from-0%

from-pink-500 hover:to-yellow-500
*/}

export default function Hero() {
  return (
    <section className="relative">
      <Image
        objectFit="cover"
        fill
        src="/assets/timeline-background.jpg"
        alt="Video Editing Service Logo"
        className="-z-10 blur-sm brightness-95"
      />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ">
          Video Editing for YouTubers and TikTokers
          </h1>
          <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">
            Get your videos Professionally Edited in Your Personal Style
          </p>
          <a
            href="https://calendly.com/visionarystudiosmedia/30min?month=2024-03"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
          {/*<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
          <iframe
            width="100%"
            height="400"
            src={
              "https://www.youtube.com/embed/V4ohNwQSw0k?si=iZ1UGnKsYNkcDqmQ"
            }
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
