const SocialProofSection = () => {
  return (
    <section className="bg-white dark:bg-zinc-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-zinc-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
            <dd className="font-light text-zinc-500 dark:text-zinc-400">
              views
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
            <dd className="font-light text-zinc-500 dark:text-zinc-400">
              contributors??
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
            <dd className="font-light text-zinc-500 dark:text-zinc-400">
              organizations??
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProofSection;
