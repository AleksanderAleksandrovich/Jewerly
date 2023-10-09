import Search from "../../assets/icons/Сковородка.svg";

// type Props = {}

const InputSearch = () => {
  return (
    <div className="flex h-9 justify-between items-center gap-5 border-[1px] border-primary-500 rounded-full bg-transparent px-4 ">
      <input
        className="bg-transparent font-geoItal text-sm tracking-tight text-primary-500  focus:outline-none w-[50px] h-[20px]"
        placeholder="Поиск"
      />
      <button >
        <img src={Search} alt="search" />
      </button>
    </div>
  );
};

export default InputSearch;
