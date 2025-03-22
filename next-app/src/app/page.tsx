"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const divElement = document.getElementById("viz1742603944456");
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "1300px";
    vizElement.style.height = "977px";

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] items-start justify-items-center min-h-screen m-0 p-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-start row-start-1 p-0 m-0">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Title at the Top, no space above */}
        <h2 className="text-3xl font-bold text-center mt-0 mb-4">
          Customer Analysis Dashboard
        </h2>

        {/* Scaled Dashboard Properly */}
        <div
          className="tableauPlaceholder"
          id="viz1742603944456"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Exec Overview"
                src="https://public.tableau.com/static/images/Su/SuperStoreFinancialInsights/ExecOverview/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: "none" }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="SuperStoreFinancialInsights/ExecOverview" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/Su/SuperStoreFinancialInsights/ExecOverview/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="ignore_sticky_session" value="yes" />
          </object>
        </div>
      </main>

      {/* Footer with Extra Space from the Bottom */}
      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center mt-32 mb-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
