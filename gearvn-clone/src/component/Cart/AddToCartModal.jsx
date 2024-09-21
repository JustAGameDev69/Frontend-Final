import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function AddToCartModal({ open, handleOpen }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>CHƯA ĐĂNG NHẬP</DialogHeader>
      <DialogBody>BẠN HÃY VUI LÒNG ĐĂNG NHẬP ĐỂ MUA HÀNG NHÉ!</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="green"
          onClick={() => handleOpen(false)}
          className="mr-1"
        >
          <span>ĐỒNG Ý</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
