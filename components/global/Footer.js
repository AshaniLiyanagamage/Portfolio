import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="max-w-4xl mx-auto">
        {footer.columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full mb-5 sm:mb-0">
            <h4 className="uppercase text-fun-gray text-sm font-bold text-center">
              {column.title}
            </h4>
            <div className="flex flex-col sm:flex-row justify-center">
              {column.links.map((link, linkIndex) => (
                <div key={linkIndex} className="my-4 mx-2 text-center sm:text-left">
                  <div className="flex flex-col items-center">
                    {link.leavesWebsite ? (
                      <a
                        href={link.link}
                        target="_blank"
                        className="flex items-center"
                      >
                        {link.icon && (
                          <span className="pr-2 -mb-1">
                            <Image src={link.icon} width={20} height={20} />
                          </span>
                        )}
                        <span className="hidden sm:inline">{link.name}</span>
                      </a>
                    ) : (
                      <Link href={link.link}>
                        <a className="">{link.name}</a>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/buy-me-a-coffee.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/paypal.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div> */}
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
          {/* <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div> */}
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="text-fun-gray-light font-medium"
            >
              Ashani Liyanagamage
            </a>
            . All rights reserved.
          </div>
        </p>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-purple px-4 py-2 rounded-xl text-fun-purple cursor-pointer opacity-50"
          href="https://github.com/AshaniLiyanagamage/Portfolio"
          target="_blank"
          rel="nooreferrer"
        >
          <img
            src="https://res.cloudinary.com/dsqosc2ig/image/upload/v1703236137/portfolio/github-mark_veb865.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
