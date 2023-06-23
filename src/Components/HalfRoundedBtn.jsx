export const HalfRoundedBtn = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border-t border-x rounded-t-full bg-transparent border-[#270722] dark:border-[#ECCE8E] hover:bg-[#270722] hover:dark:bg-[#ECCE8E] hover:text-[#ECCE8E]  hover:dark:text-[#270722] hover:font-bold">
      {label}
    </button>
  );
};
