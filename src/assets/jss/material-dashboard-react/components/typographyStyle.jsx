import {
  defaultFont,
  grayColor
} from "assets/jss/material-dashboard-react.jsx";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  mutedText: {
    color: grayColor[1]
  }
};

export default typographyStyle;
