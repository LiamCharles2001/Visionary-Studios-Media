import { JSX, SVGProps } from "react" 
{ /*Junk */}

export default function ServiceSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Video Services</h2>
      <p className="mb-8">We focus highly on our storytelling and making videos that are engaging the entire time!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Long Form Content:</h3>
          <p className="mb-6">We offer editing on any video such as Vlogs, Educational, Reviews, Challenges etc. You send us your footage and we will create a captivating video.</p>
          <YoutubeIcon className="w-8 h-8 mb-2" />
          <div className="grid grid-cols-2 gap-4">
            <a className="block" href="#">
              <p>Video Title 1</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/o7WtYvY5zak?si=R-yhQFpNxE1Qj-V3"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
            <a className="block" href="#">
              <p>Video Title 2</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/-qU4qyI4z-4?si=CZZgtMAIOD529cKl"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
            <a className="block" href="#">
              <p>Video Title 3</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/ZVWIfYXK_mM?si=yIOa6yKrP66Im_8_"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
            <a className="block" href="#">
              <p>Video Title 4</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/zmqFm75VXEA?si=OBsbx_WLjTU3NPCd"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Short Form Content:</h3>
          <p className="mb-6">We can make your TikToks, Shorts, Reels, etc, that are built to have the highest retention custom to your liking.</p>
          <YoutubeIcon className="w-8 h-8 mb-2" />
          <div className="grid grid-cols-2 gap-4">
            <a className="block" href="#">
              <p>Video Title 5</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/m8t8NqaUkjA"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
            <a className="block" href="#">
              <p>Video Title 6</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/JmHRJ5nAoRw"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
            <a className="block" href="#">
              <p>Video Title 7</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/bTIo4aNgV-A"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
            <a className="block" href="#">
              <p>Video Title 8</p>
              <iframe width="100%" height="200" src={"https://www.youtube.com/embed/biyz_t9olQo"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Commercial Editing</h3>
        <p className="mb-6">If you need us to edit a promotional video, music video, events video, we do it all! 2 commercial videos:</p>
        <div className="grid grid-cols-2 gap-4">
          <a className="block" href="#">
            <p>Video Title 9</p>
            <iframe width="100%" height="200" src={"https://www.youtube.com/embed/V4ohNwQSw0k?si=iZ1UGnKsYNkcDqmQ"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </a>
          <a className="block" href="#">
            <p>Video Title 10</p>
            <iframe width="100%" height="200" src={"https://www.youtube.com/embed/Ip9zoA8g1pg?si=TcB-mdpH6u14SnUJ"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </a>
        </div>
      </div>
    </section>
  )
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
  )
}
