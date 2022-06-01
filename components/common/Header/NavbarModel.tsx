const Links = [
  { name: "Baby & Mom", link: "/" },
  { name: "Personal Care", link: "/about" },
  { name: "Female Hygiene", link: "/" },
  { name: "Baby & Mom", link: "/" },
  { name: "Personal Care", link: "/about" },
  { name: "Female Hygiene", link: "/" },
  { name: "Personal Care", link: "/about" },
  { name: "Female Hygiene", link: "/" },
];

const NavbarModel = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div
          style={{
            top: "0px",
            minHeight: "500px",
            marginLeft: "-26px",
            borderRadius: "unset",
          }}
          className="modal-box relative"
        >
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="py-4 mt-4">
            <div className="flex justify-center bg-sky-400">
              <h2 className={` p-2 text-xl text-white font-bold`}>Medicine</h2>
            </div>

            <ul
              className={`  md:pb-0 pb-12  md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in `}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-base md:my-0 py-2">
                  <a
                    href={link.link}
                    className="text-black font-bold text-sm  duration-500"
                  >
                    {link.name}
                  </a>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModel;
