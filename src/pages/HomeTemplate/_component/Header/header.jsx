import React from "react";
import { NavLink } from "react-router-dom";

// export default class Header extends Component {

//   render() {
//     return (
//       <header>
//         <div className="header-main font-inter ">
//           <div id="header-top">
//             <div className="container">
//               <div className="d-flex justify-content-between ">
//                 <div className="header-left">
//                   <div className="header-contact">
//                     <ul>
//                       <li className="phone">
//                         <i className="fa-solid fa-phone"></i>
//                         <a href="#">(+00) 987 654 321</a>
//                       </li>
//                       <li className="email m-0">
//                         <i className="fa-regular fa-envelope"></i>
//                         <a href="#">demo@company.com</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="header-right">
//                   <ul>
//                     <li className="language">
//                       <i className="fa-solid fa-earth-americas"></i>
//                       <a href="#">Language</a>
//                     </li>
//                     <li className="wishlist">
//                       <i className="fa-regular fa-heart"></i>
//                       <a href="#">Wishlist</a>
//                     </li>
//                     <div className="account m-0">
//                       <i className="fa-regular fa-user"></i>
//                       <label
//                         htmlFor="account-checkbox"
//                         className="account-label"
//                       >
//                         My Account
//                       </label>
//                       <input
//                         type="checkbox"
//                         id="account-checkbox"
//                         className="account-checkbox"
//                       />
//                       <div className="account-dropdown position-relative">
//                         <div className="account-submenu position-absolute z-index-[]">
//                           <ul>
//                             <li>
//                               <NavLink to="">Cart</NavLink>
//                             </li>
//                             <li>
//                               <NavLink to="">Checkout</NavLink>
//                             </li>
//                             <li>
//                               <NavLink to="">My account</NavLink>
//                             </li>
//                             <li>
//                               <a href="">User Login</a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div id="header-middle">
//             <nav className="navbar navbar-expand-lg navbar-dark container">
//                 <img
//                   src="/assets/images/logo.png"
//                   alt="logo"
//                   className="mr-2"
//                   height={30}
//                 />
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarNavDropdown"
//                 aria-controls="navbarNavDropdown"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <div
//                 className="collapse navbar-collapse mr-auto"
//                 id="navbarNavDropdown"
//               >
//                 <ul className="navbar-nav mx-auto">
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdownMenuLink"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       PHIM
//                     </a>
//                     <div
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdownMenuLink"
//                     >
//                       <a className="dropdown-item" href="#">
//                         Phim Đang Chiếu
//                       </a>
//                       <a className="dropdown-item" href="#">
//                         Phim Sắp Chiếu
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdownMenuLink"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       RẠP
//                     </a>
//                     <div
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdownMenuLink"
//                     >
//                       <a className="dropdown-item" href="#">
//                         Tất Cả Các Rạp
//                       </a>
//                       <a className="dropdown-item" href="#">
//                         Rạp Đặc Biệt
//                       </a>
//                       <a className="dropdown-item" href="#">
//                         Rạp 3D
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdownMenuLink"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       THÀNH VIÊN
//                     </a>
//                     <div
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdownMenuLink"
//                     >
//                       <a className="dropdown-item" href="#">
//                         Tài Khoản
//                       </a>
//                       <a className="dropdown-item" href="#">
//                         Quyền Lợi
//                       </a>
//                     </div>
//                   </li>
//                   <div id="header-middle-right">
//                     <div className="header-bottom-inner d-flex justify-content-between">
//                       <div className="header-bottom-left ">
//                         <div className="header-search">
//                           <div>
//                             <div className="d-flex h-100">
//                               <div className="searchbar">
//                                 <input
//                                   className="search_input"
//                                   type="text"
//                                   placeholder="Tìm kiếm phim hoặc diễn viên"
//                                 />
//                                 <a href="#" className="search_icon">
//                                   <i className="fas fa-search" />
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="header-bottom-right"></div>
//                     </div>
//                   </div>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

export default function header() {

  const renderLogin = () => {
    if(localStorage.getItem("UserAdmin")){
      const user = JSON.parse(localStorage.getItem("UserAdmin"))
      return <span>
        {user.taiKhoan}
      </span>
    } else {
      return "My Account"
    }
  }

  return (
    <header>
      <div className="header-main font-inter ">
        <div id="header-top">
          <div className="container">
            <div className="d-flex justify-content-between ">
              <div className="header-left">
                <div className="header-contact">
                  <ul>
                    <li className="phone">
                      <i className="fa-solid fa-phone"></i>
                      <a href="#">(+00) 987 654 321</a>
                    </li>
                    <li className="email m-0">
                      <i className="fa-regular fa-envelope"></i>
                      <a href="#">demo@company.com</a>
                    </li>
                    <div className="account m-0">
                      <i className="fa-regular fa-user"></i>
                      <label
                        htmlFor="account-checkbox"
                        className="account-label"
                      >
                        My Account
                      </label>
                      <input
                        type="checkbox"
                        id="account-checkbox"
                        className="account-checkbox"
                      />
                      <div className="account-dropdown position-relative">
                        <div className="account-submenu position-absolute z-index-[]">
                          <ul>
                            <li>
                              <NavLink to="">Cart</NavLink>
                            </li>
                            <li>
                              <NavLink to="">Checkout</NavLink>
                            </li>
                            <li>
                              <NavLink to="">My account</NavLink>
                            </li>
                            <li>
                              <NavLink to="login">Login</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="header-right">
                <ul>
                  <li className="language">
                    <i className="fa-solid fa-earth-americas"></i>
                    <a href="#">Language</a>
                  </li>
                  <li className="wishlist">
                    <i className="fa-regular fa-heart"></i>
                    <a href="#">Wishlist</a>
                  </li>
                  <div className="account m-0">
                    <i className="fa-regular fa-user"></i>
                    <label htmlFor="account-checkbox" className="account-label">
                      {renderLogin()}
                    </label>
                    <input
                      type="checkbox"
                      id="account-checkbox"
                      className="account-checkbox"
                    />
                    <div className="account-dropdown position-relative">
                      <div className="account-submenu position-absolute z-index-[]">
                        <ul>
                          <li>
                            <NavLink to="">Cart</NavLink>
                          </li>
                          <li>
                            <NavLink to="">Checkout</NavLink>
                          </li>
                          <li>
                            <NavLink to="">My account</NavLink>
                          </li>
                          <li>
                            <a href="#">{localStorage.getItem("UserAdmin") ? "Logout" : "Login"}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="header-middle">
          <nav className="navbar navbar-expand-lg navbar-dark container">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="mr-2"
              height={30}
            />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse mr-auto"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    PHIM
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Phim Đang Chiếu
                    </a>
                    <a className="dropdown-item" href="#">
                      Phim Sắp Chiếu
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    RẠP
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Tất Cả Các Rạp
                    </a>
                    <a className="dropdown-item" href="#">
                      Rạp Đặc Biệt
                    </a>
                    <a className="dropdown-item" href="#">
                      Rạp 3D
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    THÀNH VIÊN
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Tài Khoản
                    </a>
                    <a className="dropdown-item" href="#">
                      Quyền Lợi
                    </a>
                  </div>
                </li>
                <div id="header-middle-right">
                  <div className="header-bottom-inner d-flex justify-content-between">
                    <div className="header-bottom-left ">
                      <div className="header-search">
                        <div>
                          <div className="d-flex h-100">
                            <div className="searchbar">
                              <input
                                className="search_input"
                                type="text"
                                placeholder="Tìm kiếm phim hoặc diễn viên"
                              />
                              <a href="#" className="search_icon">
                                <i className="fas fa-search" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header-bottom-right"></div>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
