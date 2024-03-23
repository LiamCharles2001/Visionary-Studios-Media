import Link from "next/link"

export default function Test() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="inline-flex h-9 items-center rounded-md px-4" href="#">
        <div className="h-6 w-6">
        <svg
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
        </div>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="flex flex-1 items-center justify-center gap-4 text-sm font-medium md:gap-6 lg:gap-10">
        <Link className="flex h-9 items-center rounded-md hover:underline" href="#">
          Features
        </Link>
        <Link className="flex h-9 items-center rounded-md hover:underline" href="#">
          Solutions
        </Link>
        <Link className="flex h-9 items-center rounded-md hover:underline" href="#">
          Customers
        </Link>
        <Link className="flex h-9 items-center rounded-md hover:underline" href="#">
          Resources
        </Link>
        <Link className="flex h-9 items-center rounded-md hover:underline" href="#">
          Pricing
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <Link
          className="inline-flex h-9 items-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Contact Sales
        </Link>
      </div>
    </header>
  )
}


