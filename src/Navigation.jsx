import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const navList = ["sport", "music", "nature"];

  const renderNavigation = (content) => {
    const navId = content.toLowerCase();

    const navLink = () => {
      document.getElementById(navId).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <li onClick={navLink} key={content} className="navigation-item">
        {content}
      </li>
    );
  };

  return (
    <div className="navigation">
      <ul>{navList.map((nav) => renderNavigation(nav))}</ul>
    </div>
  );
};

export default Navigation;
