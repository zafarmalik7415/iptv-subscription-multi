export const devices = [
  {
    id: "firestick",
    name: "Amazon Firestick",
    icon: "🔥",
    steps: [
      "Enable third-party app installs: go to Settings → My Fire TV → Developer options and turn on \"Apps from Unknown Sources\".",
      "Install the free Downloader app from your Fire TV home screen.",
      "Open Downloader and enter the IPTV Smarters Pro download URL we sent you in your activation email.",
      "Open the installed app, select \"Login with Xtream Codes API\" and enter your username, password and server URL.",
      "Wait a minute or two while the channels load. You're ready to watch.",
    ],
  },
  {
    id: "android-tv",
    name: "Android TV / Box",
    icon: "📦",
    steps: [
      "Open Google Play Store on your Android TV or Box.",
      "Search for and install \"IPTV Smarters Pro\" or \"TiviMate\".",
      "Open the app and choose \"Xtream Codes API\", or load your M3U playlist directly.",
      "Enter the credentials you received in your activation email.",
      "Save and wait for the channel list to sync.",
    ],
  },
  {
    id: "android",
    name: "Android Phone",
    icon: "📱",
    steps: [
      "Download \"IPTV Smarters Pro\" from the Google Play Store.",
      "Open the app and tap \"Add New User\".",
      "Select \"Load Your IPTV Code (Xtream Codes API)\".",
      "Enter your username, password and server URL.",
      "Tap \"Add User\" and wait for the channels to load.",
    ],
  },
  {
    id: "ios",
    name: "iPhone / iPad",
    icon: "🍎",
    steps: [
      "Download \"IPTV Smarters Pro\" or \"GSE Smart IPTV\" from the App Store.",
      "Open the app and select \"Xtream Codes API\".",
      "Enter your credentials: username, password and server URL.",
      "Confirm and wait for the channel list to load.",
      "Turn on \"Background Playback\" if you only want to listen to the audio.",
    ],
  },
  {
    id: "samsung",
    name: "Samsung Smart TV",
    icon: "📺",
    steps: [
      "Open Samsung Apps or Smart Hub on your TV.",
      "Search for and install \"IPTV Smarters\" or \"Smart IPTV\".",
      "If using Smart IPTV, activate the app at smartiptv.app with your TV's MAC address (we'll send it over WhatsApp).",
      "Load your M3U playlist or Xtream Codes credentials.",
      "Save your changes and restart the app to see the channels.",
    ],
  },
  {
    id: "lg",
    name: "LG Smart TV",
    icon: "🖥️",
    steps: [
      "Open the LG Content Store from your remote.",
      "Search for \"SS IPTV\" or \"IPTV Smarters\" depending on availability in your region.",
      "Install the app and open it.",
      "Enter your M3U link or Xtream Codes credentials.",
      "Wait for the channels to sync.",
    ],
  },
  {
    id: "windows",
    name: "Windows PC",
    icon: "💻",
    steps: [
      "Download \"IPTV Smarters Pro\" for Windows from the link we sent you or from the Microsoft Store.",
      "Install and open the application.",
      "Select \"Load Your IPTV Code (Xtream Codes API)\".",
      "Enter the credentials from your activation email.",
      "Tap \"Add User\" and enjoy in full screen.",
    ],
  },
  {
    id: "mac",
    name: "Mac",
    icon: "🖥️",
    steps: [
      "Download \"IPTV Smarters Player\" from the Mac App Store.",
      "Open the app and select \"Xtream Codes API\" or \"M3U URL\".",
      "Enter your login details.",
      "Confirm and wait for the channels to load.",
      "Adjust video quality from the settings menu if needed.",
    ],
  },
  {
    id: "formuler",
    name: "Formuler Box",
    icon: "🎛️",
    steps: [
      "From the home screen, open the apps section.",
      "Install \"IPTV Smarters\" or use the built-in Stalker/Xtream player.",
      "Enter your portal or Xtream Codes credentials.",
      "Save the configuration.",
      "Wait for the channel list to load.",
    ],
  },
  {
    id: "mag",
    name: "MAG Box",
    icon: "📡",
    steps: [
      "Turn on your MAG Box and go to \"System settings\".",
      "Go to \"Servers\" and set the \"Portal URL\" we provided you.",
      "Restart the device.",
      "Wait for the portal to load and select \"Live TV\".",
      "If it doesn't load, check that your MAC address is activated on our panel by messaging us on WhatsApp.",
    ],
  },
];

export const prerequisites = [
  {
    title: "Your Activation Email",
    description:
      "Includes your Xtream Codes username, password and server URL, plus a backup M3U link.",
    icon: "📧",
  },
  {
    title: "A Player App",
    description:
      "IPTV Smarters Pro, TiviMate, Smart IPTV or IBO Player, depending on your device.",
    icon: "▶️",
  },
  {
    title: "A Stable Connection",
    description:
      "About 15 Mbps per stream for Full HD and 25 Mbps or more for 4K content.",
    icon: "📶",
  },
];

export const tips = [
  "Buffering on just a few channels? Switch the player's decoder from \"Hardware\" to \"Software\" in the app settings.",
  "Use a 5 GHz WiFi network or an Ethernet adapter when watching live sports.",
  "Restart your device (Firestick, TV or box) once a week to keep playback smooth.",
];
