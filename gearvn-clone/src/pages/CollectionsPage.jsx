import { useParams } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { useData } from "../context/dataContext";
import { useEffect } from "react";
import CollectionsBody from "../component/Body/CollectionsPage/CollectionsBody";

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
      <Header />
      <CollectionsBody products={collections} categories={id} />
      <Footer />
    </>
  );
}
