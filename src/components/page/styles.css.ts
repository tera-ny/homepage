import { style } from "styled-vanilla-extract/qwik";

export const main = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 80px",
  gap: "40px",
  "@media": {
    "(max-width: 700px)": {
      padding: "12px 20px",
      gap: "32px"
    }
  }
});

export const container = style({
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto",
  alignItems: "center",
  gap: "20px",
  "@media": {
    "(max-width: 700px)": {
      gridTemplateColumns: "auto",
      gridTemplateRows: "auto auto",
      gap: 0
    }
  }
});

export const profile = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px"
});

export const image = style({
  borderRadius: "50%",
  overflow: "hidden"
});


export const secondary = style({
  display: "flex",
  flexDirection: "column",
  justifySelf: "center",
  gap: "20px",
  "@media": {
    "(max-width: 700px)": {
      padding: "20px 0",
      width: "100%",
      gap: "16px"
    }
  }
});

export const secondaryItems = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "@media": {
    "(max-width: 700px)": {
      fontWeight: 300
    }
  }
});

export const section = style({
  width: "100%",
  maxWidth: "1200px"
});

export const histories = style({
  margin: "20px auto",
  width: "fit-content",
})

export const history = style({
  padding: "8px 0",
});

export const portfolios = style({
  width: "100%",
  paddingTop: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 250px)",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
  "@media": {
    "(max-width: 700px)": {
      maxWidth: "400px"
    }
  }
});

export const portfolio = style({
  backgroundColor: "white",
  position: "relative",
  padding: "8px",
  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))"
});

export const footer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: 300
});

export const sectionTitle = style({
  padding: "8px",
  color: "#2e2e2e",
  fontSize: "20px",
  "@media": {
    "(max-width: 700px)": {
      fontWeight: 300,
      padding: "0",
      color: "#2e2e2e"
    }
  }
});

export const body = style({
  padding: "20px",
  "@media": {
    "(max-width: 700px)": {
      padding: "12px"
    }
  }
});

export const subTitle = style({
  "@media": {
    "(max-width: 700px)": {
      fontSize: "20px"
    }
  }
});

export const title = style({
  textAlign: "center"
});
