import { useParams } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { useData } from "../context/dataContext";
import { useEffect } from "react";
import CollectionsBody from "../component/Body/CollectionsPage/CollectionsBody";
import AdsComponent from "../component/Body/AdsComponent";

export default function CollectionsPage() {
  const { id } = useParams();

  const { getData, collections } = useData();

  useEffect(
    function () {
      getData(id);
    },
    [id]
  );

  return (
    <>
      <AdsComponent
        leftImageUrl="https://file.hstatic.net/200000722513/file/side_web_pc_gearvn_tra_gop_0_.png"
        rightImageUrl="https://file.hstatic.net/200000722513/file/banner_side_web_laptop_gaming.jpg"
      />
      <Header />
      <CollectionsBody products={collections} categories={id} />
      <Footer />
    </>
  );
}
