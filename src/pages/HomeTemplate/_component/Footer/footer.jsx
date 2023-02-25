import React, { Component } from "react";

export default class Footer extends Component {
  footerElements = [
    {
      // heading: "",
      elements: [
        {
          to: "",
          content: (
            <img
              className="footer__logo"
              src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
              alt="logo"
            />
          ),
        },
        {
          to: "",
          content: "Xem phim mới nhất tại domain.xyz",
        },
        {
          to: "",
          content: "Copyright by xxx & yyy",
        },
        {
          to: "",
          content: "Product in 2023.",
        },
      ],
    },
    {
      heading: "Quốc Gia",
      elements: [
        {
          to: "",
          content: "Việt Nam",
        },
        {
          to: "",
          content: "Trung Quốc",
        },
        {
          to: "",
          content: "Hàn Quốc",
        },
        {
          to: "",
          content: "Mỹ",
        },
        {
          to: "",
          content: "Các nước khác...",
        },
      ],
    },
    {
      heading: "Thể loại",
      elements: [
        {
          to: "",
          content: "Gia Đình",
        },
        {
          to: "",
          content: "Phim Hài",
        },
        {
          to: "",
          content: "Bom Tấn",
        },
        {
          to: "",
          content: "Kinh Dị",
        },
        {
          to: "",
          content: "Zombie",
        },
      ],
    },
    {
      heading: "Tài khoản",
      elements: [
        {
          to: "",
          content: "Tài khoản của bạn",
        },
        {
          to: "",
          content: "Nạp Tiền",
        },
        {
          to: "",
          content: "Đặt vé",
        },
        {
          to: "",
          content: "Dịch vụ khác",
        },
        {
          to: "",
          content: "Lorem Sum",
        },
      ],
    },
  ];
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {this.footerElements.map((element, index) => {
              return (
                <div key={index} className="col-6 col-md-3">
                  {element.heading ? (
                    <h5 className="footer__heading">{element.heading}</h5>
                  ) : (
                    ""
                  )}
                  <div className="footer__link">
                    {element.elements.map((nestedElement, index) => {
                      return (
                        <a
                          className="footer__item"
                          key={index}
                          href={nestedElement.to}
                        >
                          <p>{nestedElement.content}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer__bottom">Capstone CyberSoft Movie App 2023.</div>
      </footer>
    );
  }
}
