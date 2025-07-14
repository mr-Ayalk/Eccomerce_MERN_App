
import { Link } from "react-router-dom";
import logo from "../../assets/logo-dark-transparent.png";
import Search from "../Search/Search";
function Header() {
  return (
    <header>
      <div className="top-strip py-2 boarder-t-[1px] border-gray-250 border-b-[1px] ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles,limited time only
              </p>
            </div>

            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[13px] link font-[500] transition "
                  >
                    Help Center{" "}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link font-[500] transition "
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-6">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-12" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search/>
          </div>
          <div className="col3 w-[30%]"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
