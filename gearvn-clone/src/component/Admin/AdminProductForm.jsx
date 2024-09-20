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

export default function AdminProductForm({
  open,
  handleOpen,
  product,
  selectedCategories,
}) {
  const { updateProduct, isLoading } = useData();

  const initialState = {
    title: product.title,
    price: product.price,
    image: product.image,
    sale: product.sale,
    components: product.components,
    detail: product.detail,
    desc_image: product.desc_image,
  };

  const [change, setChange] = useState(initialState);

  const handleConfirmUpdateProduct = async () => {
    const response = await updateProduct(
      change,
      selectedCategories,
      product.id
    );
    console.log(response);
  };

  return (
    <Dialog open={open} size={"xl"}>
      <DialogHeader className="border-b border-slate-800 text-xl">
        EDIT PRODUCT
      </DialogHeader>
      <DialogBody className="flex gap-8 ml-3">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="w-1/4">
              <Typography className="mb-1 mt-2" variant="h6">
                Title
              </Typography>
              <Input
                label="Title"
                size="md"
                value={change.title}
                onChange={(e) =>
                  setChange({ ...change, title: e.target.value })
                }
              />
              <Typography className="mb-1 mt-2" variant="h6">
                Price (VND)
              </Typography>
              <Input
                label="Price"
                size="md"
                value={change.price}
                onChange={(e) =>
                  setChange({ ...change, price: e.target.value })
                }
              />
              <Typography className="mb-1 mt-2" variant="h6">
                Sale (%)
              </Typography>
              <Input
                label="Sale"
                size="md"
                value={change.sale}
                onChange={(e) => setChange({ ...change, sale: e.target.value })}
              />
              <Typography className="mb-1 mt-2" variant="h6">
                Components
              </Typography>
              {Object.keys(change.components).map((key) => {
                const value = change.components[key];
                return (
                  <div key={key} className="mb-2">
                    <Input
                      label={key}
                      size="md"
                      value={value}
                      onChange={(e) =>
                        setChange({
                          ...change,
                          components: {
                            ...change.components,
                            [key]: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-1/4">
              <Typography className="mb-1 mt-2" variant="h6">
                Image (URL)
              </Typography>
              {Object.keys(change.image).map((key) => {
                const value = change.image[key];
                return (
                  <div key={key} className="mb-2">
                    <Input
                      label={key}
                      size="md"
                      value={value}
                      onChange={(e) =>
                        setChange({
                          ...change,
                          image: {
                            ...change.image,
                            [key]: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                );
              })}
              <Typography className="mb-1 mt-2" variant="h6">
                Description Image (URL)
              </Typography>
              <Input
                label="Desc Img"
                size="md"
                value={change.desc_image}
                onChange={(e) =>
                  setChange({ ...change, desc_image: e.target.value })
                }
              />
            </div>
            <div className="w-2/4">
              <Typography className="mb-1 mt-2" variant="h6">
                Detail
              </Typography>
              <div className="flex flex-wrap gap-2">
                {Object.keys(change.detail).map((key) => {
                  const value = change.detail[key];
                  return (
                    <div key={key} className="mb-2">
                      <Input
                        className="w-72"
                        label={key}
                        size="md"
                        value={value}
                        onChange={(e) =>
                          setChange({
                            ...change,
                            detail: {
                              ...change.detail,
                              [key]: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="green"
          onClick={() => handleConfirmUpdateProduct()}
        >
          <span>Confirm</span>
        </Button>
        <Button variant="text" color="red" onClick={() => handleOpen(false)}>
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
