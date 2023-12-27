import { useTranslation } from "react-i18next";
const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="err-container">
      <img src="/images/circle-scatter-haikei.png" alt="404 error" />
      <div className="errorMsg">
        <h1>{t("error_404")}</h1>
        <h3>{t("page_not_found")}</h3>
        <small>{t("error_msg")}</small>
        <br />
        <button className="errorBtn">{t("back_btn")}</button>
      </div>
    </div>
  );
};
export default ErrorPage;
