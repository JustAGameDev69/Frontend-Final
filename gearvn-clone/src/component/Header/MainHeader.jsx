import { Link, useNavigate } from "react-router-dom";
import ActionLink from "./ActionLink";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LoginSignup from "../LoginSignup";
import { useAccount } from "../../context/AccountContext";

function MainHeader() {
  const [open, handleOpen] = useState(false);
  const { account } = useAccount();
  const navigate = useNavigate();

  const handleOnClickAccount = () => {
    if (account) {
      navigate("/account");
    } else {
      handleOpen(true);
    }
  };

  return (
    <div className="w-full bg-[#E30019] h-auto sticky top-0 z-20">
      <div className="content-container justify-between flex items-center text-base text-white text-nowrap w-full font-medium">
        <div className="flex py-4 items-center gap-2 pr-2 w-3/12 hover:cursor-pointer">
          <Link to="/">
            <img
              className="h-9 mr-3"
              src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg"
              alt=""
            />
          </Link>
          <div className="flex items-center bg-[#BE1529] h-11 px-2 rounded hover:cursor-pointer">
            <span className="mr-2">
              {" "}
              <svg
                width="22"
                height="18"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.00012207"
                  y="0.000190735"
                  width="18"
                  height="2"
                  rx="1"
                  fill="white"
                ></rect>
                <rect
                  x="-0.00012207"
                  y="5.99999"
                  width="18"
                  height="2"
                  rx="1"
                  fill="white"
                ></rect>
                <rect
                  x="-0.00012207"
                  y="12.0001"
                  width="18"
                  height="2"
                  rx="1"
                  fill="white"
                ></rect>
              </svg>
            </span>
            <span>Danh mục</span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-9/12">
          <SearchBar />
          <div className="flex gap-6 items-center w-7/12">
            <ActionLink
              content={"Hotline: 1900.5301"}
              textWidth={"w-14"}
              link={"tel:19005301"}
            >
              <svg
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.37476 11.9262H3.24976C2.00711 11.9262 0.999756 12.9386 0.999756 14.1876V17.5797C0.999756 18.8286 2.00711 19.8411 3.24976 19.8411H4.37476C5.6174 19.8411 6.62475 18.8286 6.62475 17.5797V14.1876C6.62475 12.9386 5.6174 11.9262 4.37476 11.9262Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16.7497 11.9264H15.6247C14.3821 11.9264 13.3747 12.9389 13.3747 14.1878V17.5799C13.3747 18.8289 14.3821 19.8413 15.6247 19.8413H16.7497C17.9923 19.8413 18.9997 18.8289 18.9997 17.5799V14.1878C18.9997 12.9389 17.9923 11.9264 16.7497 11.9264Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 14.1876V10.7955C1 8.39644 1.94821 6.09564 3.63604 4.39925C5.32387 2.70287 7.61305 1.74985 10 1.74985C12.3869 1.74985 14.6761 2.70287 16.364 4.39925C18.0518 6.09564 19 8.39644 19 10.7955V14.1876"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.19063 23.9014C5.34558 24.0148 1.68793 22.801 1.86299 19.2078L3.79676 19.2078C3.79676 21.729 5.88816 22.4163 8.19063 22.2935C8.25136 21.9719 8.52587 21.729 8.85602 21.729H11.7511C12.1258 21.729 12.3484 22.2388 12.3484 22.6244V23.5522C12.3484 23.9377 12.0447 24.2502 11.67 24.2502H8.77488C8.5245 24.2502 8.30818 24.1093 8.19063 23.9014Z"
                  fill="white"
                ></path>
              </svg>
            </ActionLink>
            <ActionLink
              content={"Hệ thống showroom"}
              textWidth={"w-14"}
              link={"https://gearvn.com/pages/he-thong-showroom-gearvn"}
            >
              <svg
                width="18"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00012 12.211C9.61888 12.211 10.1488 11.9904 10.5898 11.5491C11.03 11.1086 11.2502 10.5788 11.2502 9.95968C11.2502 9.34056 11.03 8.81037 10.5898 8.36911C10.1488 7.9286 9.61888 7.70835 9.00012 7.70835C8.38136 7.70835 7.85186 7.9286 7.4116 8.36911C6.97059 8.81037 6.75009 9.34056 6.75009 9.95968C6.75009 10.5788 6.97059 11.1086 7.4116 11.5491C7.85186 11.9904 8.38136 12.211 9.00012 12.211ZM9.00012 20.4847C11.2877 18.3834 12.9846 16.4743 14.0908 14.7573C15.1971 13.041 15.7502 11.5169 15.7502 10.1848C15.7502 8.13985 15.0985 6.46523 13.7949 5.16096C12.4922 3.85744 10.8939 3.20568 9.00012 3.20568C7.10635 3.20568 5.5077 3.85744 4.20418 5.16096C2.90141 6.46523 2.25003 8.13985 2.25003 10.1848C2.25003 11.5169 2.80316 13.041 3.90943 14.7573C5.01569 16.4743 6.71259 18.3834 9.00012 20.4847ZM9.00012 23.0456C8.85012 23.0456 8.70012 23.0174 8.55012 22.9611C8.40011 22.9048 8.26886 22.8298 8.15636 22.736C5.41882 20.3158 3.37505 18.0694 2.02503 15.9966C0.675009 13.9232 0 11.9859 0 10.1848C0 7.37065 0.904887 5.12869 2.71466 3.45895C4.52369 1.78922 6.61884 0.954346 9.00012 0.954346C11.3814 0.954346 13.4766 1.78922 15.2856 3.45895C17.0954 5.12869 18.0002 7.37065 18.0002 10.1848C18.0002 11.9859 17.3252 13.9232 15.9752 15.9966C14.6252 18.0694 12.5814 20.3158 9.84388 22.736C9.73138 22.8298 9.60013 22.9048 9.45013 22.9611C9.30013 23.0174 9.15012 23.0456 9.00012 23.0456Z"
                  fill="white"
                ></path>
              </svg>
            </ActionLink>
            <ActionLink content={"Tra cứu đơn hàng"} textWidth={"w-16"}>
              <svg
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9637 2.95195H10.7919C10.373 1.79337 9.27584 0.954399 7.97918 0.954399C6.68252 0.954399 5.58535 1.79337 5.16643 2.95195H1.99461C0.897441 2.95195 -0.000244141 3.85085 -0.000244141 4.9495L0.0462926 21.0481C0.0462926 22.1467 0.943978 23.0456 2.04115 23.0456H8.13543C7.54533 22.4721 7.32914 22.1792 6.98295 21.4322H1.67845L1.63191 4.58457H3.98947V5.39127C3.98947 6.48992 4.88715 7.38882 5.98432 7.38882H9.97404C11.0712 7.38882 11.9689 6.48992 11.9689 5.39127V4.58457H14.2811V10.4389C14.9893 10.5388 15.3402 10.7486 15.9586 11.0382V4.9495C15.9586 3.85085 15.0609 2.95195 13.9637 2.95195ZM7.97918 5.39127C7.34445 5.39127 6.52838 4.98792 6.52838 3.95073C6.52838 3.37451 6.93641 2.56781 7.97918 2.56781C8.52777 2.56781 9.38465 2.98544 9.38465 3.95073C9.38465 4.91601 8.65794 5.39127 7.97918 5.39127ZM13.0129 13.0579C10.26 13.0579 8.02572 15.2951 8.02572 18.0517C8.02572 20.8084 10.26 23.0456 13.0129 23.0456C15.7658 23.0456 18 20.8084 18 18.0517C18 15.2951 15.7658 13.0579 13.0129 13.0579ZM14.2995 20.0493L12.6538 18.4013C12.5607 18.3085 12.5071 18.1832 12.5042 18.0517V15.5648C12.5042 15.2851 12.7236 15.0654 13.0029 15.0654C13.2822 15.0654 13.5016 15.2851 13.5016 15.5648V17.852L14.9977 19.3501C15.0443 19.3959 15.0814 19.4504 15.1069 19.5106C15.1323 19.5708 15.1456 19.6354 15.1459 19.7007C15.1462 19.7661 15.1336 19.8308 15.1088 19.8913C15.084 19.9517 15.0474 20.0066 15.0013 20.0528C14.9551 20.099 14.9003 20.1356 14.84 20.1605C14.7796 20.1853 14.7149 20.198 14.6497 20.1976C14.5844 20.1973 14.5199 20.184 14.4598 20.1586C14.3997 20.1331 14.3452 20.096 14.2995 20.0493Z"
                  fill="white"
                ></path>
              </svg>
            </ActionLink>
            <div className="relative">
              {account && (
                <p className="absolute top-0 left-0 bg-[#FDD835] text-black rounded-full w-4 h-4 flex items-center justify-center text-xs border-2 border-white">
                  {account.cart.length}
                </p>
              )}
              <Link to="/user/cart">
                <ActionLink content={"Giỏ hàng"} textWidth={"w-10"}>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.22111 3L3.84216 1H1M4.22111 3H19L15.2105 12.0455H5.73689M4.22111 3L5.73689 12.0455M5.73689 12.0455L3.56458 13.293C2.96774 13.923 3.5309 14.9091 4.375 14.9091H9.625H12.25L15.2105 15M15.2105 15C14.708 15 14.2261 15.2107 13.8708 15.5858C13.5154 15.9609 13.3158 16.4696 13.3158 17C13.3158 17.5304 13.5154 18.0391 13.8708 18.4142C14.2261 18.7893 14.708 19 15.2105 19C15.7131 19 16.195 18.7893 16.5503 18.4142C16.9056 18.0391 17.1053 17.5304 17.1053 17C17.1053 16.4696 16.9056 15.9609 16.5503 15.5858C16.195 15.2107 15.7131 15 15.2105 15ZM7.63162 17C7.63162 17.5304 7.432 18.0391 7.07667 18.4142C6.72134 18.7893 6.2394 19 5.73689 19C5.23438 19 4.75245 18.7893 4.39711 18.4142C4.04178 18.0391 3.84216 17.5304 3.84216 17C3.84216 16.4696 4.04178 15.9609 4.39711 15.5858C4.75245 15.2107 5.23438 15 5.73689 15C6.2394 15 6.72134 15.2107 7.07667 15.5858C7.432 15.9609 7.63162 16.4696 7.63162 17Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </ActionLink>
              </Link>
            </div>
            <button className="p-0" onClick={() => handleOnClickAccount()}>
              <ActionLink
                content={account ? account.fullName : "Đăng nhập"}
                textWidth={"w-10"}
                otherStyle={
                  account
                    ? "text-nowrap p-1 rounded"
                    : "bg-[#BE1529] p-1 rounded"
                }
              >
                {account ? (
                  <img
                    className="rounded"
                    src={
                      account.avatar
                        ? account.avatar
                        : "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    }
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 11.9091C10.5412 11.9091 9.14224 11.3344 8.11079 10.3115C7.07934 9.28857 6.49988 7.90118 6.49988 6.45455C6.49988 5.00791 7.07934 3.62052 8.11079 2.5976C9.14224 1.57467 10.5412 1 11.9999 1C13.4586 1 14.8575 1.57467 15.889 2.5976C16.9204 3.62052 17.4999 5.00791 17.4999 6.45455C17.4999 7.90118 16.9204 9.28857 15.889 10.3115C14.8575 11.3344 13.4586 11.9091 11.9999 11.9091Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M0.999878 25.0001V23.5975C0.999878 20.7923 4.49988 15.1819 11.9999 15.1819C19.4999 15.1819 22.9999 20.7923 22.9999 23.5975V25.0001"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                )}
              </ActionLink>
            </button>
            <LoginSignup handleOpen={handleOpen} open={open} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
