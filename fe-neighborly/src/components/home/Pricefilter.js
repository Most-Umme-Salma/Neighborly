import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}€`;
}

export default function Pricefilter() {
  const [value, setValue] = React.useState([1, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => ""}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={2000}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
{
  /*const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: "rgba(0,0,0,0.26)",
  },
  track: {
    color: "000",
  },
});

export default function Pricefilter(value, changedPrice) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="on"
        min={1}
        max={2000}
        classes={{
          thumb: classes.thumb,
          rail: classes.root,
          track: classes.track,
        }}
      />
    </div>
  );
}*/
}
