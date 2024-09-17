import { Progress } from "@material-tailwind/react";

const ratingBarStyle = "flex items-center gap-2";

export default function ProductDetailPageRating({ name = "" }) {
  return (
    <div className="w-full mb-3 mt-3">
      <div className="content-container bg-white rounded pb-5">
        <h1 className="text-2xl pt-2 pb-2 pl-2 font-medium">{`Đánh giá & Nhận xét ${name}`}</h1>
        <div className="flex">
          <div className="w-1/3 text-center mb-auto mt-auto">
            <h1 className="text-4xl font-medium text-[#E30019]">0/5</h1>
            <p className="text-normal">
              <span className="font-semibold">0</span> đánh giá & nhận xét
            </p>
          </div>
          <div className="w-2/3 flex flex-col gap-3 pr-5">
            <div className={ratingBarStyle}>
              <p>5⭐</p>
              <Progress value={0} size="medium" color="red" />
              <p className="w-24">
                <span>0</span> đánh giá
              </p>
            </div>
            <div className={ratingBarStyle}>
              <p>4⭐</p>
              <Progress value={0} size="medium" color="red" />
              <p className="w-24">
                <span>0</span> đánh giá
              </p>
            </div>
            <div className={ratingBarStyle}>
              <p>3⭐</p>
              <Progress value={0} size="medium" color="red" />
              <p className="w-24">
                <span>0</span> đánh giá
              </p>
            </div>
            <div className={ratingBarStyle}>
              <p>2⭐</p>
              <Progress value={0} size="medium" color="red" />
              <p className="w-24">
                <span>0</span> đánh giá
              </p>
            </div>
            <div className={ratingBarStyle}>
              <p>1⭐</p>
              <Progress value={0} size="medium" color="red" />
              <p className="w-24">
                <span>0</span> đánh giá
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
