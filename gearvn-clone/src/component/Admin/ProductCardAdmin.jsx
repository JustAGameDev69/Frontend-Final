import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import AdminProductForm from "./AdminProductForm";
import { useData } from "../../context/DataContext";

export default function ProductCardAdmin({ product, selectedCategories }) {
  const { deleteProduct } = useData();
  const { image_2 } = product.image;
  const [open, handleOpen] = useState(false);

  return (
    <>
      <Card className="w-80">
        <CardHeader shadow={false} floated={false} className="h-80">
          <img
            src={image_2}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody className="h-40">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {product.price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mb-2 mt-2"
            onClick={() => handleOpen((i) => !i)}
          >
            Edit
          </Button>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-[#E30019] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mb-2 mt-2"
            onClick={() => deleteProduct(selectedCategories, product.id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
      <AdminProductForm
        open={open}
        handleOpen={handleOpen}
        product={product}
        selectedCategories={selectedCategories}
      />
    </>
  );
}
