import Beginning from "../../components/About/Beginning";
import Vision from "../../components/About/Vision";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: "black",
  },
}));

function About() {
  const styles = useStyles();
  return (
    <div>
      <Beginning />
      <Vision />
    </div>
  );
}

export default About;
