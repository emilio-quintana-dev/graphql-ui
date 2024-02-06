import Section from "./Section";

const Menu = ({ menu }) => {
  if (menu.sections.length === 0) {
    return <p>This menu doesn't have any sections yet.</p>;
  }

  return (
    <>
      {menu.sections.map((section) => {
        return <Section key={section.id} section={section} />;
      })}
    </>
  );
};

export default Menu;
