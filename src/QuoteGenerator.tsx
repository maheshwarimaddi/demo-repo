import axios from "axios";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// interface Props {
//   content: string;
//   author: string;
// };

const QuoteGenerator = () => {
  const { t } = useTranslation();
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const handleRefresh = () => {
    axios.get("https://api.quotable.io/random").then((response: any) => {
      setQuote(response.content);
      setAuthor(response.author);
    });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div className="parent-div">
      <div className="container">
        <div className="quote-container">
          <div>
            <FaQuoteLeft className="icon" size={50} />
          </div>
          <span className="quote">{quote}</span>
          <div>
            <FaQuoteRight className="icon" size={50} />
          </div>
        </div>
        <div className="author">- {author}</div>
      </div>
      <button onClick={handleRefresh} className="refresh">
        {t("refresh_btn")}
      </button>
    </div>
  );
};

export default QuoteGenerator;
