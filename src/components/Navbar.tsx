import logo from "../../public/images/logo.png";

function Navbar() {

  return (
    <nav className="fixed z-50 w-full bg-transparent backdrop-blur-[10px]">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Valvet Pour Logo" />
          <p className="font-modern-negra text-3xl -mb-2">Valvet pour</p>
        </a>
        <ul className="flex justify-center items-center lg:gap-12 gap-7">
          {[
            { id: "cocktails", title: "Cocktails" },
            { id: "about", title: "About Us" },
            { id: "work", title: "The Art" },
            { id: "contact", title: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="cursor-pointer text-nowrap md:text-base text-sm"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
