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
    const storageRef = ref(storage, "AboutMe/aboutMe.json");
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
  const [jsonObject, setJsonObject] = useState<Record<string, any> | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function fetchResources() {
      const [imageUrl1, imageUrl2, data] = await Promise.all([
        getImageUrl("aboutMe.png"),
        getImageUrl("aboutMeBg.png"),
        getJson(),
      ]);

      if (imageUrl1) setAboutMeImg(imageUrl1);
      if (imageUrl2) setBgImg(imageUrl2);
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

          <div className="about-text-box">
            <div className="text-title">{jsonObject?.greeting}</div>
            <div className="text-summary">{jsonObject?.summary}</div>
            <div className="text-content-box">
              {jsonObject?.introduction?.map((intro: string, index: number) => (
                <div key={index}>{intro}</div>
              ))}
            </div>
          </div>
          <div className="edu-contact-wrapper">
            <div className="school-box">
              <div className="school-title">학력</div>
              {jsonObject?.education
                ?.reduce((acc: any, edu: any) => {
                  const existingSchool = acc.find(
                    (item: any) => item.school === edu.school
                  );
                  if (existingSchool) {
                    existingSchool.majors.push(
                      edu.major + " " + edu.degree + " " + edu.honors
                    );
                    existingSchool.date.push(edu.graduation_date);
                  } else {
                    acc.push({
                      school: edu.school,
                      majors: [edu.major + " " + edu.degree + " " + edu.honors],
                      date: [edu.graduation_date],
                    });
                  }
                  return acc;
                }, [])
                .map((edu: any, index: any) => (
                  <div key={index}>
                    <div className="school-name">{edu.school}</div>
                    <div className="school-info">
                      <div>
                        {edu.majors.map((major: any) => (
                          <div>{major}</div>
                        ))}
                      </div>
                      <div>
                        {edu.date.map((date: any) => (
                          <div>{date}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="contact-box">
              <div className="contact-title">연락처</div>
              <div className="contact-info">
                <div className="phone">{jsonObject?.contact_info.phone}</div>

                {jsonObject?.contact_info.emails.map((email: string) => (
                  <div className="email" key={email}>
                    {email}
                  </div>
                ))}

                <div className="phone">
                  instagram: {jsonObject?.contact_info.insta}
                </div>
              </div>
            </div>
          </div>
          <div className="company-wrapper">
            <div className="title">경력</div>
            {jsonObject?.companies.map((company: any, index: any) => (
              <div key={index} className="company">
                <h2>{company.name}</h2>
                {company.project.map((proj: any, idx: any) => (
                  <div key={idx} className="project">
                    <h3>{proj.title}</h3>
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
            ))}
          </div>
          <div className="project-wrapper">
            <div className="title">프로젝트</div>
            {jsonObject?.projects.map((project: any, index: any) => (
              <div key={index} className="project-box">
                <h2>{project.project}</h2>
                {project.content.map((content: any, idx: any) => (
                  <div key={idx} className="project">
                    <li style={{ marginLeft: "10px" }}>{content}</li>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="lecture-wrapper">
            <div className="title">강의</div>
            <div className="lecture-box">
              <div className="special-lecture-box">
                <div className="lecture-title">
                  {jsonObject?.lectures[0].name}
                </div>
                {jsonObject?.lectures[0].lecture.map(
                  (lecture: any, index: any) => (
                    <div key={index} className="project-box">
                      <h2>{lecture.title}</h2>
                      {lecture.values.map((content: any, idx: any) => (
                        <div key={idx} className="project">
                          <li style={{ marginLeft: "10px" }}>{content}</li>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
              <div className="exam-non-profit-box">
                <div className="lecture-title">
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

                <div className="lecture-title">
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
        </div>
      </AboutMeWrapper>
    </div>
  );
};

export default AboutMe;
