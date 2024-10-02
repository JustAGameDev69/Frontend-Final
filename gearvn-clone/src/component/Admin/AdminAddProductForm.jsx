import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import { Loading } from "../Loading";

const initialState = {
  title: "",
  manufacturer: "",
  sale: "",
  price: "",
  image: {},
  components: {},
  detail: {},
  desc_image: "",
};

export default function AdminAddProductForm({
  open,
  handleOpen,
  selectedCategories,
}) {
  const { isLoading, AddProduct } = useData();
  const [newProduct, setNewProduct] = useState(initialState);

  let MAX_ITEMS = 5;

  const handleAddItem = (section) => {
    if (section === "detail") {
      MAX_ITEMS = 10;
    }

    if (section === "image") {
      MAX_ITEMS = 6;
    }

    if (Object.keys(newProduct[section]).length < MAX_ITEMS) {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        [section]: {
          ...prevProduct[section],
          [`${section}_${Object.keys(prevProduct[section]).length + 1}`]: "",
        },
      }));
    }
  };

  const handleInputChange = (section, index, type, newValue) => {
    const updatedSection = { ...newProduct[section] };

    if (type === "key") {
      const currentValue = updatedSection[index];
      delete updatedSection[index];
      updatedSection[newValue] = currentValue;
    } else {
      updatedSection[index] = newValue;
    }

    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [section]: updatedSection,
    }));
  };

  const handleSaveProduct = () => {
    let sanitizedProduct = { ...newProduct };

    const removeEmptyValues = (section) => {
      const filteredSection = Object.entries(sanitizedProduct[section])
        .filter(([key, value]) => value.trim() !== "")
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      sanitizedProduct[section] = filteredSection;
    };

    removeEmptyValues("components");
    removeEmptyValues("detail");
    removeEmptyValues("image");

    if (sanitizedProduct.sale) {
      sanitizedProduct.sale = Number(sanitizedProduct.sale);
    }

    console.log(sanitizedProduct, selectedCategories);
    AddProduct(sanitizedProduct, selectedCategories);
  };

  const renderDynamicFields = (section, label, maxItem) => (
    <div className="w-ful flex flex-col mb-4">
      <Typography className="mb-1 mt-2" variant="h6">
        {label}
      </Typography>
      <div className="flex flex-col gap-4">
        {Object.entries(newProduct[section]).map(([key, value], index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={key}
              onChange={(e) =>
                handleInputChange(section, key, "key", e.target.value)
              }
              className="w-1/2 text-sm px-2 py-1 border border-blue-gray-200 rounded focus:outline-none focus:border-blue-gray-700"
            />
            <input
              type="text"
              value={value}
              onChange={(e) =>
                handleInputChange(section, key, "value", e.target.value)
              }
              className="w-1/2 text-sm px-4 py-1 border border-blue-gray-200 rounded focus:outline-none focus:border-blue-gray-700"
            />
          </div>
        ))}
      </div>
      {Object.keys(newProduct[section]).length < maxItem && (
        <button
          type="button"
          className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddItem(section)}
        >
          + Add {label}
        </button>
      )}
    </div>
  );

  return (
    <Dialog open={open} size={"xxl"}>
      <DialogHeader className="border-b border-slate-800 text-xl">
        ADD {selectedCategories.toUpperCase()} PRODUCT
      </DialogHeader>
      <DialogBody className="flex flex-wrap gap-4 ml-3">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="w-full flex mb-4 gap-4">
              <div className="w-1/5 flex-col">
                <Typography className="mb-1 mt-2" variant="h6">
                  Title
                </Typography>
                <Input
                  label="Title"
                  size="md"
                  value={newProduct.title}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, title: e.target.value })
                  }
                />
                <Typography className="mb-1 mt-2" variant="h6">
                  Manufacturer
                </Typography>
                <Input
                  label="Manufacturer"
                  size="md"
                  value={newProduct.manufacturer}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      manufacturer: e.target.value,
                    })
                  }
                />
                <Typography className="mb-1 mt-2" variant="h6">
                  Sale (%)
                </Typography>
                <Input
                  label="Sale (%)"
                  size="md"
                  value={newProduct.sale}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      sale: e.target.value,
                    })
                  }
                />
                <Typography className="mb-1 mt-2" variant="h6">
                  Price (VND)
                </Typography>
                <Input
                  label="Price"
                  size="md"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
                <Typography className="mb-1 mt-2" variant="h6">
                  Description Image (URL)
                </Typography>
                <Input
                  label="Description Image"
                  size="md"
                  value={newProduct.desc_image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, desc_image: e.target.value })
                  }
                />
              </div>
              <div className="w-2/5">
                {renderDynamicFields("components", "Components", MAX_ITEMS)}
                {renderDynamicFields("image", "Image(URL)", 6)}
              </div>
              <div className="w-2/5">
                {renderDynamicFields("detail", "Detail", 10)}
              </div>
            </div>
          </>
        )}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="green" onClick={handleSaveProduct}>
          <span>Confirm</span>
        </Button>
        <Button
          variant="text"
          color="red"
          onClick={() => {
            handleOpen((i) => !i);
            setNewProduct(initialState);
          }}
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
