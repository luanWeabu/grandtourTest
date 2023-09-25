import MenuItems from "./MenuItem";

const Dropdown = ({ submens, dropdown, depthlevel }: any) => {
  depthlevel = depthlevel + 1;
  const dropdownClass = depthlevel > 1 ? "dropdown-children" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submens.map((chidren: any, index: any) => (
        <MenuItems items={submens} key={index} depthlevel={depthlevel} />
      ))}
    </ul>
  );
};
export default Dropdown;
