export default function ServiceSection() {
  return (
    <section className="bg-white dark:bg-zinc-900" id="portfolio">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
            Video Services
          </h2>
          <p className="font-light text-zinc-500 lg:mb-16 sm:text-xl dark:text-zinc-400">
            We focus highly on our storytelling and making videos that are
            engaging the entire time!
          </p>
        </div>
        <div className="grid gap-8">
          <div>
            <div className="flex items-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-500">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </div>

              <h3 className="p-2 mb-2 text-xl font-bold dark:text-white flex-1">
                Long Form Content:
              </h3>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400">
              We offer editing on any video such as Vlogs, Educational, Reviews,
              Challenges etc. You send us your footage and we will create a
              captivating video.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/v9h1XGWMuos?si=PO8mZm3SO0vRJ0Ug"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/QfDrFITSB0k?si=PxzH6rORRUYxJBk7"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/CkltdgGtNx4?si=kem65n56Cl5aDTtx"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/BHqaATk3hWs?si=PBctkxWUL0Qq51Zn"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/7DKpnkHnuMA?si=19SWWwam3T3CoWPq"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/KOd7Fpufk8k?si=vO41EC2WciNTxo73"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/o7WtYvY5zak?si=R-yhQFpNxE1Qj-V3"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/-qU4qyI4z-4?si=CZZgtMAIOD529cKl"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/ZVWIfYXK_mM?si=yIOa6yKrP66Im_8_"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/zmqFm75VXEA?si=OBsbx_WLjTU3NPCd"
                  }
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-500">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </div>

              <h3 className="p-2 mb-2 text-xl font-bold dark:text-white flex-1">
                Short Form Content:
              </h3>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400">
              We can make your TikToks, Shorts, Reels, etc, that are built to
              have the highest retention custom to your liking.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={"https://www.youtube.com/embed/m8t8NqaUkjA"}
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={"https://www.youtube.com/embed/JmHRJ5nAoRw"}
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={"https://www.youtube.com/embed/bTIo4aNgV-A"}
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
              <a className="block" href="#">
                <iframe
                  width="100%"
                  height="400"
                  src={"https://www.youtube.com/embed/biyz_t9olQo"}
                  loading="lazy"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg sm:rounded-none sm:rounded-l-lg hover:scale-110 transition duration-500"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
