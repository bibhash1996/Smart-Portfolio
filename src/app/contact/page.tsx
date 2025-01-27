import { H1 } from "@/components/ui/H1";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.instagram.com/mrbibhashwa?igsh=MWt2OXZyMDFxZ3Jidw%3D%3D&utm_source=qr"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/bibhash.singh.92"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bibhash1996"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bibhash-singh-91999b114/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-6">
        <H1>Contact Me</H1>
        <section className="space-y-3">
          <H3>Email : </H3> bibhash1996@gmail.com
          <H3>Phone : </H3> +91-8971905616
        </section>
      </section>
    </section>
  );
}
