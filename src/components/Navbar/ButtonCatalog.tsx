import Burger from "../../assets/icons/Бургер.svg";

// type Props = {};

const ButtonCatalog = () => {
  return (
    <button className="h-9 rounded-full bg-transparent px-4 border-[1px] border-primary-500">
      <div className="flex gap-4 justify-between items-center">
        <img src={Burger} alt="burger" />
        <div className="text-base tracking-tight">Каталог</div>
      </div>
    </button>
  );
};
export default ButtonCatalog;
