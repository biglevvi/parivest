import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  config,
  components: {
    Text: {
      baseStyle: {
        fontSize: "16px",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 10,
        // color: "white",
        // bg: "black",
      },
      defaultProps: {
        size: "sm", // default is md
        variant: "ghost", // default is solid
        fontSize: "15px",
        // colorScheme: 'green', // default is gray
      },
    },
    Heading: {
      defaultProps: {
        size: "md",
      },
    },
    Input: {
      defaultProps: {
        size: "sm",
        bg: "whitesmoke",
        borderRadius: 20,
        // _invalid: { border: "1px solid red" },
      },
      baseStyle: {
        rounded: "md",
        borderRadius: 20,
        bg: "whitesmoke",
      },
    },
    Textarea: {
      defaultProps: {
        size: "sm",
      },
    },
    Checkbox: {
      baseStyle: {
        icon: {
          color: "white",
        },
        control: {
          border: "1px",
          borderColor: "gray.300",
          borderRadius: "50%",
          _disabled: {
            borderColor: "gray.300",
            bg: "gray.200",
          },
        },
        label: {
          fontWeight: "medium",
          color: "gray.900",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        "fontSize": "16px",
        "fontWeight": "500",
        "letterSpacing": "0.374px",
        "&::-webkit-scrollbar": {
          width: "6px",
          backgroundColor: "transparent",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          width: "6px",
          backgroundColor: "gray",
          borderRadius: "10px",
        },
        "bg": "#f2f2f7ff",
      },
    },
  },
});

export default theme;
