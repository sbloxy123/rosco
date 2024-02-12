import React from "react";

interface FilterButtonProps {
  text: string;
  selected: boolean;
  onClick: () => void; // Add onClick to the type definition
}

const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  onClick,
  selected,
}: FilterButtonProps) => {
  return (
    <div
      className={`${
        selected
          ? "bg-theme-purple text-white border-theme-purple "
          : "bg-transparent text-white border-white"
      } block rounded-sm border-solid py-[1.1rem] w-full border-[2px] transition hover:duration-300 group cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-6 mx-auto min-w-[176px] px-11">
        <h5 className="uppercase text-center">{text}</h5>
      </div>
    </div>
  );
};

export default FilterButton;
