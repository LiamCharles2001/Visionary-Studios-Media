import { JSX, SVGProps } from "react";
{
  /*Junk */
}

export default function ServiceSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Video Services
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            We focus highly on our storytelling and making videos that are
            engaging the entire time!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
          <div className="flex items-center">
      <h3 className="mb-2 text-xl font-bold dark:text-white">Long Form Content:</h3>
      <p className="flex-1 text-gray-500 dark:text-gray-400">
        We offer editing on any video such as Vlogs, Educational, Reviews, Challenges etc. You send us your footage and
        we will create a captivating video.
      </p>
      <svg className="w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
        <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
      </svg>
    </div>
            <YoutubeIcon className="w-8 h-8 mb-2" />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={
                    "https://www.youtube.com/embed/o7WtYvY5zak?si=R-yhQFpNxE1Qj-V3"
                  }
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={
                    "https://www.youtube.com/embed/-qU4qyI4z-4?si=CZZgtMAIOD529cKl"
                  }
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={
                    "https://www.youtube.com/embed/ZVWIfYXK_mM?si=yIOa6yKrP66Im_8_"
                  }
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={
                    "https://www.youtube.com/embed/zmqFm75VXEA?si=OBsbx_WLjTU3NPCd"
                  }
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Short Form Content:</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We can make your TikToks, Shorts, Reels, etc, that are built to
              have the highest retention custom to your liking.
            </p>
            <YoutubeIcon className="w-8 h-8 mb-2" />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={"https://www.youtube.com/embed/m8t8NqaUkjA"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={"https://www.youtube.com/embed/JmHRJ5nAoRw"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={"https://www.youtube.com/embed/bTIo4aNgV-A"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="200"
                  src={"https://www.youtube.com/embed/biyz_t9olQo"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold dark:text-white">Commercial Editing</h3>
          <p className="text-gray-500 dark:text-gray-400">
            If you need us to edit a promotional video, music video, events
            video, we do it all!
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a className="block" href="#">
              <iframe
                width="100%"
                height="400"
                src={
                  "https://www.youtube.com/embed/V4ohNwQSw0k?si=iZ1UGnKsYNkcDqmQ"
                }
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </a>
            <a className="block" href="#">
              <iframe
                width="100%"
                height="400"
                src={
                  "https://www.youtube.com/embed/Ip9zoA8g1pg?si=TcB-mdpH6u14SnUJ"
                }
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
