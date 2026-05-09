function Footer() {
  return (
    <footer className="w-full flex items-center justify-center">
      <div className="w-6xl flex flex-col md:flex-row justify-between items-center mx-auto p-6! gap-4">
        <div className="jetBrains text-muted dark:text-muted text-center md:text-left text-[rgb(90,90,90)] ">
          © 2026 ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          {/* <a
            className="jetBrains text-muted dark:text-muted hover:text-accent dark:hover:text-accent transition-colors duration-200"
            href="#"
          >
            Github
          </a> */}
          <a
            className="jetBrains text-[rgb(90,90,90)] hover:text-[#e39c43] transition-colors duration-200"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="jetBrains text-[rgb(90,90,90)]  hover:text-[#e39c43] transition-colors duration-200"
            href="#"
          >
            Read.cv
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
