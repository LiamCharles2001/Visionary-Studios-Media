import { JSX, SVGProps } from "react";

const ContactSection = () => {
  return (
<div className="bg-gray-50/90 py-12 lg:py-24">
  <div className="container grid items-center gap-4 px-4 text-center md:px-6">
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Reach out to our team for support or sales inquiries.
      </p>
    </div>
    <div className="mx-auto grid max-w-sm gap-4 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="space-y-1.5 p-6 flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            className-linejoin="round"
            className="w-12 h-12"
          >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
          </svg>
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Email</h3>
        </div>
        <div className="p-6 text-center">
          <p className="font-semibold">Email Us</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours</p>
        </div>
        <div className="items-center p-6 flex justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Email
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="space-y-1.5 p-6 flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-12 h-12"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Call Us</h3>
        </div>
        <div className="p-6 text-center">
          <p className="font-semibold">+1 (123) 456-7890</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Call during business hours</p>
        </div>
        <div className="items-center p-6 flex justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Call
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"></div>
    </div>
  </div>
</div>

  );
};

export default ContactSection;

