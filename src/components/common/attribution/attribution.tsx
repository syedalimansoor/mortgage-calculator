import { CSSProperties } from "react";
import profileImage from "./assets/profile.jpg";
import githubLogo from "./assets/github.svg";
import linkedInLogo from "./assets/linkedin.png";
import instagramLogo from "./assets/instagram.svg";

const footerStyles: CSSProperties = {
  display: "flex",

  alignItems: "center",
  flexWrap: "nowrap",
  gap: "20px",

  padding: "20px",
};

const imageStyles: CSSProperties = {
  height: "60px",
};

const socialIconStyles: CSSProperties = {
  height: "25px",
};

const textStyles: CSSProperties = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const profileStyles: CSSProperties = {
  flexGrow: 1,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
  height: "100%",
  rowGap: "5px",
};

const socialMediaStyles: CSSProperties = {
  display: "flex",
  flexWrap: "nowrap",
  gap: "15px",
  padding: "7px 0",
};

const linkStyles: CSSProperties = {
  textDecoration: "none",
  display: "contents",
};

function Attribution() {
  return (
    <footer style={footerStyles}>
      <img src={profileImage} alt="Profile" style={imageStyles} />
      <div style={profileStyles}>
        <span style={textStyles}>
          Developed by <strong>Syed Ali Mansoor</strong>
        </span>
        <div style={socialMediaStyles}>
          <a
            href="https://www.github.com/syedalimansoor"
            target="_blank"
            style={linkStyles}
          >
            <img src={githubLogo} alt="GitHub" style={socialIconStyles} />
          </a>
          <a
            href="https://www.instagram.com/alimansoor.dev"
            target="_blank"
            style={linkStyles}
          >
            <img src={instagramLogo} alt="Instagram" style={socialIconStyles} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-ali-mansoor/"
            target="_blank"
            style={linkStyles}
          >
            <img src={linkedInLogo} alt="LinkedIn" style={socialIconStyles} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Attribution;
