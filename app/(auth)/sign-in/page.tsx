"use client";

import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/icons/logo.svg"
            alt="Nexora Logo"
            width={32}
            height={32}
          />
          <h1>Nexora</h1>
        </Link>

        <div className="description">
          <section>
            <figure className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Nexora makes screen recording easy. From quick walkthroughs to
              full presentations, it&apos;s fast, smooth, and shareable in
              seconds
            </p>
            <article className="flex items-center gap-3 mt-4">
              <Image
                src="/assets/images/neaz.png"
                width={64}
                height={64}
                alt="Neaz"
                className="rounded-full"
              />
              <div>
                <h2>Neaz Morshed</h2>
                <p>Web Developer, Prographr</p>
              </div>
            </article>
          </section>
        </div>

        {/* Dynamic Year */}
        <p>© Nexora {currentYear}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/icons/logo.svg"
              alt="Nexora Logo"
              width={40}
              height={40}
            />
            <h1>Nexora</h1>
          </Link>
          <p>
            Create and share your very first <span>Nexora video</span> in no
            time!
          </p>

          <button
            
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>

      <div className="overlay" />
    </main>
  );
};

export default SignIn;
