import { useState } from "react";
import ProductCardAdmin from "./ProductCardAdmin";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import AdminAddProductForm from "./AdminAddProductForm";

export default function ProductListAdmin({
  data,
  selectedCategories,
  setSelectedCategories,
}) {
  const [open, handleOpen] = useState(false);

  return (
    <>
      <button
        className="w-20 h-10 bg-gray-600 text-white mb-2 rounded hover:bg-gray-700"
        onClick={() => setSelectedCategories("")}
      >
        RETURN
      </button>
      <div className="flex flex-wrap gap-4">
        <div>
          <Card
            className="w-80 hover:cursor-pointer"
            onClick={() => handleOpen(true)}
          >
            <CardHeader shadow={false} floated={false} className="h-80">
              <img
                src={
                  "data:image/png;base64,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"
                }
                alt="card-image"
                className="h-full w-full object-contain"
              />
            </CardHeader>
            <CardBody className="h-72">
              <div className="mb-2 flex items-center justify-between">
                <Typography
                  color="blue-gray"
                  className="font-bold text-3xl mx-auto py-10"
                >
                  ADD PRODUCT
                </Typography>
              </div>
            </CardBody>
          </Card>
          <AdminAddProductForm
            open={open}
            handleOpen={handleOpen}
            selectedCategories={selectedCategories}
          />
        </div>
        {data.map((product) => (
          <ProductCardAdmin
            key={product.id}
            product={product}
            selectedCategories={selectedCategories}
          />
        ))}
      </div>
    </>
  );
}
