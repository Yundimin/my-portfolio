import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "../../locales/i18n";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import {
  ApplyButton,
  FormCheck,
} from "../../styles/ChangeLanguageModal.modules";
import { useTranslation } from "react-i18next";

interface LanguageChecked {
  en: boolean;
  ko: boolean;
}

function ChangeLanguageModal() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [languagesChecked, setLanguagesChecked] = useState<LanguageChecked>({
    en: i18n.language === "en",
    ko: i18n.language === "ko",
  });

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLanguageToggle = (lang: keyof LanguageChecked) => {
    setLanguagesChecked({
      en: lang === "en" ? true : false,
      ko: lang === "ko" ? true : false,
    });
    if (languagesChecked[lang]) {
      setSelectedLanguage("");
    } else {
      setSelectedLanguage(lang);
    }
  };

  return (
    <>
      <div className="icon">
        <FontAwesomeIcon icon={faGlobe} onClick={handleShow} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>{t("language-change.title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormCheck
              type="checkbox"
              id="en"
              label={t("language-change.en")}
              checked={languagesChecked["en"]}
              onChange={() => handleLanguageToggle("en")}
            />
            <FormCheck
              type="checkbox"
              id="ko"
              label={t("language-change.ko")}
              checked={languagesChecked["ko"]}
              onChange={() => handleLanguageToggle("ko")}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose} className="applyBtn">
            {t("language-change.cancel")}
          </Button>
          <ApplyButton
            variant="secondary"
            onClick={() => handleLanguageChange(selectedLanguage)}
          >
            {t("language-change.change")}
          </ApplyButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeLanguageModal;
