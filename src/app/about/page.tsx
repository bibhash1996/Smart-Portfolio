import gym from "@/assets/gym.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bibhash and his work.",
};

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/about`, { cache: "no-store" });

  const leetcodeData = await res.json();

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
        <H2>Basic Details</H2>
        <p>
          <span className="font-bold">Date of Birth :</span> 11th December 1996
        </p>
        <p>
          <span className="font-bold">Education :</span> Undergraduate (B.E)
        </p>
        <p>
          <span className="font-bold">College :</span> University Visvesvaraya
          College of Engineering
        </p>
        <p>
          <span className="font-bold">Year :</span> 2014-2018
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>MERN stack</strong>.
        </p>
        I am a result-driven Full-Stack Engineer with expertise in the MERN
        stack, AWS, PostgreSQL, Redis, and AI-driven applications. Proven track
        record of architecting scalable systems, optimizing backend performance,
        and pioneering AI solutions with Retrieval-Augmented Generation (RAG)
        and agentic workflows. Adept at delivering enterprise-level
        applications, ensuring high availability, security, and seamless user
        experiences.
        <p>
          I also have experience wrting smart contracts and working on the
          Blockchain domain. I have worked on applications that deal with
          Ethereum based blockchains. Smart contracts written by me are
          currently deployed in production and can be viewed on Opensea.
        </p>
        <H3>Technologies</H3>
        <p>
          NodeJS, ReactJS, NextJS 14, Javascript, Typescriptm GraphQL,
          PostgresDB, MongoDB, Redis , Python3, FastAPI, Solidity,
          ElasticSearch, Langchain, Langraph, Agents, Model Context Protocol,
          OpenAI, Generative AI, Retrieval Augmented Generation(RAG), Voice
          Agents
        </p>
        <H3>Cloud Technologies</H3>
        <p>AWS</p>
        <hr className="border-muted" />
        <H2>Leetcode stats</H2>
        {/* <p>{JSON.stringify(leetcodeData)}</p> */}
        <p>
          <span className="font-bold">Total Problems Solved :</span>{" "}
          {leetcodeData?.data?.totalSolved || "nil"}
        </p>
        <p>
          <span className="font-bold">Easy Problems :</span>{" "}
          {leetcodeData?.data?.easySolved || "nil"}
        </p>
        <p>
          <span className="font-bold">Medium Problems :</span>{" "}
          {leetcodeData?.data?.mediumSolved || "nil"}
        </p>
        <p>
          <span className="font-bold">Hard Problems :</span>{" "}
          {leetcodeData?.data?.hardSolved || "nil"}
        </p>
        <hr className="border-muted" />
        <p>
          <span className="font-bold">Education :</span> Undergraduate (B.E)
        </p>
        <p>
          <span className="font-bold">College :</span> University Visvesvaraya
          College of Engineering
        </p>
        <p>
          <span className="font-bold">Year :</span> 2014-2018
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Work History</H2>
        <ul className="list-inside list-disc">
          <Work
            company="Comviva"
            role="Software Development Engineer"
            year="(Jun 2018 - Jul 2019)"
          />
          <Work
            company="Qikpod"
            role="Software Development"
            year="(Jun 2019 - Jan 2020)"
          />
          <Work
            company="Zelp Technologies Private Limited"
            role="Full Stack Developer"
            year="(Jan 2020 - Oct 2022)"
          />
          <Work
            company="Metasky (now Quboid)"
            role="Senior Software Developer"
            year="(Nov 2022 - Sept 2023)"
          />
          <Work
            company="Accolite"
            role="Lead Software Engineer"
            year="(Sept 2023 - Present)"
          />
        </ul>
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
            <strong>Proximeet (Coming Soon ....)</strong> - Connect with similar
            interest people near you over a video call
          </li>
          <li>
            <strong>Smart portfolio</strong> -{" "}
            <Link
              href={"https://bibhash.xyz"}
              className="text-blue-500 hover:underline"
            >
              https://bibhash.xyz
            </Link>
          </li>
          <li>
            <strong>NoteCraft</strong> - Your AI-Powered Note-Taking Wizard!
            📝✨
            <Link
              href={"https://notecraft.bibhash.xyz"}
              className="text-blue-500 hover:underline"
            >
              https://notecraft.bibhash.xyz
            </Link>
          </li>
          <li>
            <strong>Draw And Sign Pro</strong> - A Side project that let&apos;s
            you draw your sign and download it as pdf{" "}
            <Link
              href={"https://draw-and-sign.bibhash.xyz"}
              className="text-blue-500 hover:underline"
            >
              https://draw-and-sign.bibhash.xyz
            </Link>
          </li>
          <li>
            <strong>DB Whisperer</strong> - Designed an AI enabled web app agent
            for natural language to SQL conversion with LangGraph and OpenAI.
            <Link
              href={"https://db-whisperer.bibhash.xyz/"}
              className="text-blue-500 hover:underline"
            >
              https://db-whisperer.bibhash.xyz/
            </Link>
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Honors and Awards</H2>
        <H3>Cognizant Mastercode 2017</H3>
        <p>Nov 2017</p>
        <p>AIR-28 in Cognizant Mastercode 2017 </p>
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

function Work(props: { company: string; year: string; role: string }) {
  return (
    <li className="mt-4 text-lg font-semibold">
      {props.role} <br />
      <span className="ml-6 text-sm font-thin">
        <span className="text-sm font-semibold">{props.company}</span>{" "}
        {props.year} - Full Time
      </span>
    </li>
  );
}
