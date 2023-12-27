import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t("home_text")}</Link>
        </li>
        <li>
          <Link to="/quotes">{t("generate_quote")}</Link>
        </li>
        <li>
          <Link to="/newsletter">{t("newsletter_text")}</Link>
        </li>
        <li>
          <Link to="/recipe-finder">{t("recipe_text")}</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
