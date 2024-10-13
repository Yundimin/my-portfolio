import { AboutMeWrapper, Loading } from "../../styles/AboutMe.modules";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

async function getImageUrl(img: string) {
  try {
    const storageRef = ref(storage, `assets/aboutMe/${img}`);

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL", error);
    return null;
  }
}

async function getJson(): Promise<Record<string, any> | null> {
  try {
    const storageRef = ref(storage, "AboutMe/aboutMe2.json");
    const url = await getDownloadURL(storageRef);
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error getting JSON file", error);
    return null;
  }
}

const AboutMe = () => {
  const [aboutMeImg, setAboutMeImg] = useState<string>("");
  const [bgImg, setBgImg] = useState<string>("");
  const [chooImg, setChooImg] = useState<string>("");
  const [jsonObject, setJsonObject] = useState<Record<string, any> | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function fetchResources() {
      const [imageUrl1, imageUrl2, imageUrl3, data] = await Promise.all([
        getImageUrl("aboutMe.png"),
        getImageUrl("aboutMeBg.png"),
        getImageUrl("choo.png"),
        getJson(),
      ]);

      if (imageUrl1) setAboutMeImg(imageUrl1);
      if (imageUrl2) setBgImg(imageUrl2);
      if (imageUrl3) setChooImg(imageUrl3);
      if (data) setJsonObject(data);

      if (imageUrl1 && imageUrl2 && data) {
        setIsLoaded(true);
      }
    }

    fetchResources();
  }, []);

  if (!isLoaded) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <div
      style={{
        width: "100%",
        background: "black",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <AboutMeWrapper>
        <div className="about-me-box">
          <div className="about-img-box">
            <img className="about-img" src={aboutMeImg} alt="About Me" />
          </div>

          <div className="choo-img-box">
            <img className="choo-img" src={chooImg} alt="Choo" />
            <div className="choo-text-box">
              <div className="choo-title-box">
                <div className="choo-title">추우주</div>
                <div className="choo-birth">(1997.10.17)</div>
              </div>
              <div className="choo-info-box">
                <div className="choo-info-name">연락처</div>
                {jsonObject?.contact_info.phone}
              </div>
              <div className="choo-info-box">
                <div className="choo-info-name">이메일</div>
                {jsonObject?.contact_info.email}
              </div>
              <div className="choo-info-box">
                <div className="choo-info-name">주소</div>
                {jsonObject?.contact_info.address}
              </div>
            </div>
          </div>

          <div className="about-text-box">
            <div className="text-title">{jsonObject?.greeting}</div>
            <div className="text-content-box">
              {jsonObject?.introduction?.map((intro: string, index: number) => (
                <div key={index}>{intro}</div>
              ))}
            </div>
          </div>
          <div className="edu-contact-wrapper">
            <div className="school-title">학력</div>
            <div className="school-wrapper">
              <div className="school-box">
                <div className="school-name">
                  {jsonObject?.education[0].school}
                </div>
                <div className="school-info">
                  <div className="school-major">
                    <div>{jsonObject?.education[0].major}</div>
                  </div>
                  <div className="school-honor-education-box">
                    <div style={{ minWidth: "60px" }}>
                      <div>{jsonObject?.education[0].honors}</div>
                    </div>
                    <div>
                      <div>{jsonObject?.education[0].graduation_date}</div>
                    </div>
                  </div>
                </div>
                <div className="school-info">
                  <div className="school-major">
                    {jsonObject?.education[1].major}
                  </div>
                  <div className="school-honor-education-box">
                    <div style={{ minWidth: "60px" }}>
                      <div>{jsonObject?.education[1].honors}</div>
                    </div>
                    <div>
                      <div>{jsonObject?.education[1].graduation_date}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="school-box">
                <div className="school-name">
                  {jsonObject?.education[2].school}
                </div>
                <div className="school-info">
                  <div className="school-major">
                    <div>{jsonObject?.education[2].major}</div>
                  </div>
                  <div className="school-honor-education-box">
                    <div style={{ minWidth: "60px" }}>
                      <div>{jsonObject?.education[2].honors}</div>
                    </div>
                    <div>
                      <div>{jsonObject?.education[2].graduation_date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="company-wrapper">
            <div className="title">직무경력</div>
            <div style={{ margin: "auto", paddingLeft: "15px" }}>
              {jsonObject?.companies.map((company: any, index: any) => (
                <div key={index} className="company">
                  <div className="company-name"> {company.name}</div>
                  <div className="company-position">{company.position}</div>
                  <div className="company-project">
                    {company.project.map((proj: any, idx: any) => (
                      <div key={idx} className="project">
                        {proj.title}
                        <ul style={{ marginLeft: "10px" }}>
                          {proj.values.map((value: any, i: any) => (
                            <li key={i}>
                              {value.subtitle && <div>{value.subtitle}</div>}
                              <ul>
                                {value.description.map((desc: any, j: any) => (
                                  <li key={j}>{desc}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="project-wrapper">
            <div className="title">프로젝트</div>
            <div className="project-box">
              {jsonObject?.projects.map((project: any, index: any) => (
                <div key={index} className="project">
                  <div className="project-title">{project.project}</div>
                  {project.content.map((content: any, idx: any) => (
                    <div key={idx} className="project-description">
                      <div>{content}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="lecture-wrapper">
            <div className="title">강의</div>
            <div className="lecture-box">
              {jsonObject?.lectures[0].lecture.map(
                (lecture: any, index: any) => (
                  <div key={index} className="project">
                    <div className="project-title">{lecture.title}</div>
                    {lecture.values.map((content: any, idx: any) => (
                      <div key={idx} className="project-description">
                        <li style={{ marginLeft: "10px" }}>{content}</li>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="award-wrapper">
            <div className="title">수상실적</div>
            {jsonObject?.prize.map((prize: any, index: any) => (
              <div key={index} className="award">
                <div>{prize.event}</div>
                <div style={{ minWidth: "190px" }}>{prize.award}</div>
              </div>
            ))}
          </div>
          <div className="display-wrapper">
            <div className="title">전시경력</div>
            {jsonObject?.display.map((display: any, index: any) => (
              <div key={index} className="display">
                {display}
              </div>
            ))}
          </div>
          <div className="extra-wrapper">
            <div className="title">기타</div>
            <div className="extra-box">
              <div className="exam-non-profit-box">
                <div className="exam-art-title">
                  {jsonObject?.lectures[1].name}
                </div>
                {jsonObject?.lectures[1].project.map(
                  (project: any, index: any) => (
                    <div key={index} className="project-box">
                      <h2>{project.title}</h2>
                      {project.values.map((content: any, idx: any) => (
                        <div key={idx} className="project">
                          <li style={{ marginLeft: "10px" }}>{content}</li>
                        </div>
                      ))}
                    </div>
                  )
                )}

                <div className="non-profit-title">
                  {jsonObject?.lectures[2].name}
                </div>
                {jsonObject?.lectures[2].project.map(
                  (project: any, index: any) => (
                    <div key={index} className="project-box">
                      <h2>{project.title}</h2>
                      {project.values.map((content: any, idx: any) => (
                        <div key={idx} className="project">
                          <li style={{ marginLeft: "10px" }}>{content}</li>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </AboutMeWrapper>
    </div>
  );
};

export default AboutMe;
