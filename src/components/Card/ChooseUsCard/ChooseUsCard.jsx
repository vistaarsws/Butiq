import chooseUs_1 from "../../../assets/images/fast-delivery-truck-van-svgrepo-com.svg";
import "./ChooseUsCard.css";

export default function ChooseUsCard() {
  return (
    <>
      <div className="chooseUsCardContainer">
        <img src={chooseUs_1} alt="" />
        <h2 className="text-[var(--theme-red)] font-medium">
          Fast & Free Shipping
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          quibusdam qui quisquam suscipit iusto pariatur perferendis odio, quasi
          maiores vero optio nostrum earum sit? Esse?
        </p>
      </div>
    </>
  );
}
