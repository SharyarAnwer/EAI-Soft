import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "Home", current: true },
  { name: "About Us", href: "About", current: false },
  { name: "Services", href: "Service", current: false },
  { name: "Portfolio", href: "Portfolio", current: false },
  { name: "Contact Us", href: "Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="relative">
      <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                  <a
                    className="flex flex-shrink-0 items-center cursor-pointer"
                    
                    onClick={() => {
                      const targetElement = document.getElementById("Home");

                      if (targetElement) {
                        targetElement.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <img
                      alt="logo"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 w-8"
                      style={{ color: "transparent" }}
                      srcset="https://eaisoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.75e475c4.png&w=64&q=75 1x, https://eaisoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.75e475c4.png&w=128&q=75 2x"
                      src="https://eaisoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.75e475c4.png&w=128&q=75"
                    />
                    <h1 class="justify-self-center pl-2 text-2xl font-extrabold text-primary text-[#007aff]">
                      Eaisoft
                    </h1>
                  </a>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          // href={item.href}
                          onClick={() => {
                            const targetElement = document.getElementById(
                              item.href
                            );

                            if (targetElement) {
                              targetElement.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    // href={item.href}
                    onClick={() => {
                      const targetElement = document.getElementById(
                        item.href
                      );

                      if (targetElement) {
                        targetElement.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
