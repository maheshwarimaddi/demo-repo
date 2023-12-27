import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return <h1 className="home">{t("home_page")}</h1>;
};
export default HomePage;
