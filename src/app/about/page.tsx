import gym from "@/assets/gym.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bibhash and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Bibhash Singh and I am a software developer from India. I
          started programming in 2014, just after entering college, and since
          then I have created many web apps and projects, and also have helped
          few small sized start ups with their projects.
        </p>
        <p>I&apos;m passionate about building cool apps and webapps.</p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>MERN stack</strong>.
        </p>
        <p>
          I also have experience with App development but have stopped working
          with it a few years ago. I prefer web development because you can use
          a modern website on almost every device and reach the whole world with
          it.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <strong>Omegle Like</strong> - Connect with similar interest people
            near you over a video call
          </li>
          <li>
            <strong>Smart portfolio</strong> - An AI backed smart portfolio
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          When I&apos;m not immersed in lines of code, you can find me at the
          gym, where I enjoy working out and pushing my physical limits. Fitness
          is an essential part of my life, as it keeps me energized and focused.
          I also have a deep appreciation for travel, exploring the diverse
          beauty of India. From the serene beaches of Goa to the majestic
          mountains of Himachal Pradesh, I relish experiencing new cultures,
          cuisines, and landscapes. Whether it&apos;s hiking in the hills or
          discovering hidden gems in bustling cities, I believe that every
          journey enriches my perspective and inspires my creativity. Feel free
          to modify any part of this introduction to better suit your style!
        </p>
        <p>I&apos;m also very much into self-improvement and nutrition.</p>
        <Image src={gym} alt="Gym photo" className="rounded-md" />
      </section>
    </section>
  );
}
