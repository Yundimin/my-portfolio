import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "../../locales/i18n";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

interface LanguageChecked {
  en: boolean;
  ko: boolean;
}

function ChangeLanguageModal() {
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
      en: lang === "en" ? !languagesChecked.en : false,
      ko: lang === "ko" ? !languagesChecked.ko : false,
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
          <Modal.Title>Language Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type="checkbox"
              id="en"
              label="영어"
              checked={languagesChecked["en"]}
              onChange={() => handleLanguageToggle("en")}
            />
            <Form.Check
              type="checkbox"
              id="ko"
              label="한국어"
              checked={languagesChecked["ko"]}
              onChange={() => handleLanguageToggle("ko")}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleLanguageChange(selectedLanguage)}
          >
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeLanguageModal;
