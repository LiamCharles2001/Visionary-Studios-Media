import Image from "next/image";

{
  /* <section className="relative">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let&apos;s talk about how we can help your videos.</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-200">We help YouTubers on lifting the video editing burdeon from them so they can focus on what matters.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="https://calendly.com/visionarystudiosmedia/30min?month=2024-03" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Schedule A Call
                </a>
            </div>
        </div>
    </div>
    <Image objectFit='cover' fill src="/assets/timeline-bottom.jpg" alt="Video Editing Service Logo" className="-z-10 blur-sm brightness-95"/>
</section> 
 */
}

const CTASection = () => {
  return (
    <section className="bg-zinc-900" id="contact">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src="/assets/timeline-bottom.jpg"
          alt="video image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Let&apos;s talk about how we can help <div className="underline decoration-primary-400">your videos</div>
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-400">
            We help content creators on lifting the video editing burdeon from them so
            they can focus on what matters.
          </p>
          <a
            href="https://calendly.com/visionarystudiosmedia/30min?month=2024-03"
            className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Schedule A Free Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
