/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: " #7ce609",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "70%" },
        },
        popout: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        animasilogo: {
          "0%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(7px) rotateY(360deg)",
          },
          "50%": {
            transform: "translateY(-7px)",
          },
          "75%": {
            transform: "translateY(7px)",
          },
        },
        cahaya: {
          "0%": {
            transform: "translateY(0px) rotate(160deg)",
            animationDelay: "5s",
            opacity: "0",
          },
          "20%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0",
          },
          "30%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0",
          },
          "40%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translateY(150px) rotate(160deg)",
          },
          "60%": {
            transform: "translateY(160px) rotate(160deg)",
            opacity: "0",
          },
          "70%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0",
          },
          "80%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0",
          },
          "90%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px) rotate(160deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        progress: "progress 3s ease-in-out",
        popout: "popout 1.5s ease-in-out",
        animasilogo: "animasilogo 5s infinite ease-in-out",
        cahaya: "cahaya 2s infinite ease-in-out",
      },
      fontFamily: {
        josefinsans: "Josefin Sans",
        rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
