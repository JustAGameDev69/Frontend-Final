import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function AdminNoAccessModal({ open, handleOpen }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Không được phép truy cập</DialogHeader>
      <DialogBody>
        Bạn không có quyền truy cập vào trang này! Vui lòng không cố gắng truy
        cập lại, chúng tôi sẽ đưa bạn về trang chủ!
      </DialogBody>
      <DialogFooter>
        <Link to={"/"}>
          <Button variant="text" color="green" className="mr-1">
            <span>ĐỒNG Ý</span>
          </Button>
        </Link>
      </DialogFooter>
    </Dialog>
  );
}
