import React, { useState } from "react";
import { Container } from "~/components/ui";
import { NavigationMenu, NavigationSocialMenu } from "~/components/layout";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";

const PageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed lg:relative top-0 left-0 z-50 w-full h-16 flex items-center border-b bg-gray-50 border-gray-200">
      <Container>
        <nav className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <div>Logo</div>
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden w-8 h-8 inline-flex items-center justify-center text-lg transition-all duration-150 focus:outline-none active:scale-90"
            >
              <IoMenu />
            </button>
          </div>

          <div
            className={clsx(
              "lg:static fixed z-50 top-0 lg:right-0 w-full min-h-screen lg:min-h-0 px-6 lg:px-0 lg:py-0 bg-white sm:bg-gray-50 transition-all duration-300 ",
              isOpen ? "right-0" : "-right-full"
            )}
          >
            <div className="flex flex-col justify-between">
              {/* Menu */}
              <div className="lg:hidden h-16 flex items-center justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 inline-flex items-center justify-center text-lg transition-all duration-150 focus:outline-none active:scale-90"
                >
                  <IoClose />
                </button>
              </div>
              <NavigationMenu className="flex flex-col lg:flex-row items-center h-[80vh] lg:h-0 justify-center gap-x-4 gap-y-6" />
              <NavigationSocialMenu className="h-16 lg:hidden flex flex-row items-center justify-center gap-x-4" />
            </div>
          </div>

          <div className="hidden lg:flex flex-row w-full justify-end">
            <NavigationSocialMenu className="hidden lg:flex flex-row gap-x-4" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default PageHeader;
