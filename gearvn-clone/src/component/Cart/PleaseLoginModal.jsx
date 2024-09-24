import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function PleaseLoginModal({
  open,
  handleOpen,
  content,
  onClickFunction,
}) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>CHƯA ĐĂNG NHẬP</DialogHeader>
      <DialogBody>{content}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="green"
          onClick={
            onClickFunction ? () => onClickFunction() : () => handleOpen(false)
          }
          className="mr-1"
        >
          <span>ĐỒNG Ý</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
