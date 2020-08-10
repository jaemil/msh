module.exports = {
  src_folders: ["tests"],

  webdriver: {
    start_process: true,
    server_path: require("chromedriver").path,
    port: 9515,
  },
  test_workers: {
    enabled: false,
    workers: "auto",
  },
  detailed_output: false,
  live_output: false,

  selenium: {
    start_process: false,
  },

  test_settings: {
    default: {
      silent: true,
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
