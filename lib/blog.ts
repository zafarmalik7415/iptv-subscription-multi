import { h2, image, ol, p, table, ul } from "@/lib/portableTextBuilder";
import type { BlogPost, BlogPostSummary } from "@/lib/sanity/types";

// The static fallback posts use a couple of custom block types (image, table)
// that components/PortableText.tsx knows how to render but that don't match
// @portabletext/types' strict PortableTextBlock shape, so body is loosely
// typed here and cast back to BlogPost when it leaves this module.
type StaticPost = Omit<BlogPost, "body"> & { body: unknown[] };

const author = { name: "IPTV Pro Team", imageUrl: null };

const posts: StaticPost[] = [
  {
    title: "What Is an IPTV Portal URL? A Plain-English Guide",
    slug: "what-is-an-iptv-portal-url",
    excerpt:
      "Confused by 'server URL' or 'portal' when setting up IPTV? Here's what it actually means, where to find it, and how to fix the most common login errors.",
    publishedAt: "2026-08-14",
    mainImageUrl: "/blog/portal-url-cover.svg",
    author,
    categories: [{ title: "Setup", slug: "setup" }],
    seoTitle: "What Is an IPTV Portal URL? Setup Guide",
    seoDescription:
      "Learn what an IPTV portal URL is, how it differs from an M3U link, and how to fix the most common connection errors when setting up a new device.",
    faqs: [
      {
        question: "What is a portal URL in IPTV?",
        answer:
          "A portal URL is the web address of the server that delivers your IPTV channels. It's one of three login details, along with a username and password, that your player app needs to connect to your subscription.",
      },
      {
        question: "Is a portal URL the same as an M3U link?",
        answer:
          "Not exactly. A portal URL is just the server address by itself. An M3U link combines the server address, username and password into one long link. Both point to the same subscription.",
      },
      {
        question: "Where do I find my IPTV portal URL?",
        answer:
          "It's included in the activation email or message you get after buying a subscription, usually shown next to your username and password.",
      },
      {
        question: "Why is my portal URL not connecting?",
        answer:
          "The most common causes are an expired subscription, a typo in the address, a missing port number, or http and https not matching what your provider sent you.",
      },
      {
        question: "Can I use the same portal URL on more than one device?",
        answer:
          "Yes, you can enter the same details on multiple devices. How many can stream at the same time depends on your plan's connection limit.",
      },
    ],
    body: [
      p(
        "When you buy an IPTV subscription for the first time, the activation message can read like a different language. Along with a username and password, there's usually a line called \"server URL\" or \"portal URL\", and sometimes a completely separate M3U link on top of that. If you've never set up IPTV before, it's easy to assume you did something wrong. You didn't. This is just how most providers hand out login details, and once you know what each piece does, setting up a new device takes about two minutes."
      ),

      h2("What a portal URL actually is"),
      p(
        "A portal URL, also called a server URL (and occasionally just \"host\" in some apps), is simply the web address of the server that streams your channels. It's one of three pieces of information your provider gives you, alongside a username and password. Together they work the same way a normal website login does: the URL tells your device where to connect, and the username and password prove you're allowed in once you get there."
      ),
      p("Most portal URLs look something like this:"),
      p("http://yourserver.example.com:8080"),
      p(
        "The number after the colon is the port number, and it has to match exactly for the connection to work. If your provider gives you a URL without a port number, leave it out. Don't add one yourself, and don't remove one if it's there. Small details like this are the reason a login that looks correct on screen still fails to connect."
      ),

      h2("Is a portal URL the same as Xtream Codes or Stalker?"),
      p(
        "Not quite, though they're closely related and easy to mix up. Xtream Codes and Stalker (also called Ministra) are two different pieces of server software that IPTV providers use to manage and deliver subscriptions. Both hand out a portal URL as part of your login, but they organize things slightly differently."
      ),
      p(
        "Xtream Codes is the more common format today and is what most player apps expect when they ask for \"Xtream Codes API\" login. Stalker/Ministra middleware is older and is mostly associated with MAG boxes and some Enigma2 satellite receivers, where it's simply labelled \"Portal URL\" in the device settings with no separate username and password fields, since those get tied to the device's MAC address instead. If your device came with a portal URL and nothing else to type in, that's usually Stalker-based."
      ),

      h2("Portal URL vs M3U link: what's the difference"),
      p(
        "This is where most of the confusion starts. Depending on your provider, you might get two different formats and have to pick one."
      ),
      ...ul([
        "Xtream Codes format splits everything into three separate fields: server URL, username and password. You type each one into its own box in the app.",
        "M3U format bundles all of that into a single long link, with your username and password built right into the address, something like http://yourserver.example.com:8080/get.php?username=you&password=pass&type=m3u_plus.",
      ]),
      p(
        "Both connect to the exact same subscription and the exact same channels. The only real difference is how your player app expects the information typed in. Apps like IPTV Smarters Pro and TiviMate support both formats as separate login options, so use whichever one your provider actually sent you rather than trying to convert one into the other."
      ),

      h2("Where you'll be asked for a portal URL"),
      p("Not every device asks for this information the same way."),
      ...ul([
        "MAG boxes and Android boxes running Stalker middleware ask for a \"Portal URL\" directly in their system settings, with no separate login step. The box itself is usually what's tied to your subscription.",
        "Smart IPTV on Samsung and LG TVs works differently again. You activate your TV's MAC address on the Smart IPTV website first, then load your playlist from there rather than typing a portal URL straight into the TV.",
        "Apps like IPTV Smarters Pro, TiviMate and GSE Smart IPTV let you choose Xtream Codes API and fill in the three fields, or paste an M3U link instead, whichever your provider gave you.",
      ]),
      p([
        "If you're setting up a new device and aren't sure which category it falls into, our ",
        { text: "installation guide", href: "/installation-guide/" },
        " walks through the exact steps for Fire Stick, Android TV, iPhone, Smart TV and more, matched to the app each device actually uses.",
      ]),

      image(
        "/blog/portal-url-diagram.svg",
        "Diagram showing server URL, username and password feeding into an IPTV player app"
      ),

      h2("How to enter it step by step"),
      p("The process is nearly identical across most apps:"),
      ...ol([
        "Open your IPTV player and look for \"Add user\" or \"Add playlist\".",
        "Choose Xtream Codes API, or \"Login\" if that's the only option shown.",
        "Paste your server URL exactly as it was sent to you, including http:// and the port number.",
        "Enter your username and password.",
        "Save, and give it a minute to load your channel list.",
      ]),
      p(
        "If you were given an M3U link instead, select the M3U option in your app and paste the full link into that single box. A few apps also ask for a separate EPG URL to load the program guide; if your provider sent one, add it in the EPG or guide settings rather than the main login screen."
      ),

      h2("Why your portal URL sometimes stops working"),
      p(
        "A portal URL that worked yesterday and doesn't today is almost always one of a handful of things, and it's worth checking them in order before assuming something bigger is wrong."
      ),
      ...ul([
        "The subscription expired. This is by far the most common reason, so check your renewal date before anything else.",
        "A typo crept in somewhere. Copy and paste the URL instead of typing it out by hand, especially on a TV remote where it's easy to miss a character.",
        "http got swapped for https, or the other way around. It has to match exactly what your provider sent, even though the two look almost identical.",
        "The port number got dropped or changed during setup. Double check it's still there and hasn't been auto-corrected by your device's keyboard.",
        "Your provider changed servers, which happens occasionally on the provider's end and means support will need to send you an updated portal URL.",
      ]),
      p(
        "If you've checked all of that and it still won't connect, message your provider's support rather than resetting your device repeatedly. A quick chat with them is usually faster than restarting your router five times, and they can tell you immediately if the issue is on their end."
      ),

      h2("Does the portal URL affect picture quality?"),
      p(
        "No, and this trips up a lot of people. The portal URL only controls where your device connects, not how the video looks once it gets there. Picture quality depends on the plan you bought, the server's own capacity, and your own internet speed. Two people using the exact same portal URL on the same subscription can get different results if one has a much slower connection than the other."
      ),

      h2("A quick way to remember the difference"),
      table([
        ["Term", "What it includes"],
        ["Portal URL / server URL", "The server address only, no login info attached"],
        ["Xtream Codes login", "Portal URL + username + password, entered in separate fields"],
        ["M3U link", "Portal URL + username + password, combined into one link"],
      ]),

      p([
        "Once you've entered your portal URL correctly on one device, adding a second or third takes the same two minutes, since you're reusing the exact same details (unless your plan limits how many screens can stream together). If you're still deciding which app to actually use it in, our guide to the ",
        { text: "best IPTV players", href: "/blog/best-iptv-players/" },
        " breaks down which one fits your device. And if you're still comparing providers and want one that sends clear setup instructions with no guesswork, ",
        { text: "buy an IPTV subscription", href: "/#plans" },
        " with a free trial included, so you can test everything before committing to a longer plan.",
      ]),
    ],
  },
  {
    title: "Is IPTV Legal in the USA? Here's the Honest Answer",
    slug: "is-iptv-legal-in-usa",
    excerpt:
      "IPTV isn't illegal by itself, but not every provider is above board. Here's what US law actually says, and how to spot a legitimate service.",
    publishedAt: "2026-08-21",
    mainImageUrl: "/blog/iptv-legal-usa-cover.svg",
    author,
    categories: [{ title: "Guides", slug: "guides" }],
    seoTitle: "Is IPTV Legal in the USA? Full Explanation",
    seoDescription:
      "Is IPTV legal in the United States? Here's what the DMCA and FCC actually say, why some providers get shut down, and how to spot a legitimate service.",
    faqs: [
      {
        question: "Is IPTV illegal in the US?",
        answer:
          "No, IPTV as a technology is legal. It's the same method of delivery used by Netflix and YouTube TV. Legality depends on whether the specific provider has proper licensing for its channels.",
      },
      {
        question: "Can you get in trouble for using an IPTV service?",
        answer:
          "Enforcement is mostly aimed at the businesses operating unlicensed services rather than individual viewers, but using one still carries risk, mainly sudden shutdowns and lost access with no refund.",
      },
      {
        question: "What is the DMCA and how does it apply to IPTV?",
        answer:
          "The Digital Millennium Copyright Act is the US law that makes it illegal to distribute copyrighted content without permission. It's the main legal tool used against pirate IPTV operations.",
      },
      {
        question: "How do I know if an IPTV subscription is legal?",
        answer:
          "Look for realistic pricing, clear information about the business behind it, published terms of service, and no pressure to hide your usage with a VPN.",
      },
      {
        question: "Is Xtream Codes IPTV legal?",
        answer:
          "Xtream Codes is just software used to manage and deliver IPTV subscriptions. It isn't illegal by itself. Legality still comes down to whether the service using it has the rights to its channels.",
      },
    ],
    body: [
      p(
        "Short answer first: IPTV itself is completely legal in the United States. It's a method of sending television over the internet, the same underlying technology that Netflix, Hulu and YouTube TV use every day. Nobody is coming after you for using an app that streams video over IP. What gets complicated isn't the technology, it's the content behind it. Whether a specific IPTV service is legal comes down to whether that provider actually has the rights to the channels it's selling, and that's the part worth understanding before you hand over your card details."
      ),

      h2("IPTV is a delivery method, not a content type"),
      p(
        "IPTV stands for Internet Protocol Television. It just means TV delivered through an internet connection instead of a satellite dish or a cable line. Legally, that's no different from any other kind of internet streaming. The law doesn't care how content reaches your screen. It cares about whether whoever is sending it had permission to do so. A cable company, a licensed streaming app and an IPTV provider can technically deliver the exact same channel; only one of them needs to have paid for the right to carry it."
      ),
      p(
        "This is why the question \"is IPTV legal\" doesn't really have a single yes or no answer. It's closer to asking \"is email legal\". Email itself is just a protocol for sending messages, and nobody would say it's illegal, even though it can obviously be used for scams. IPTV works the same way: the protocol is neutral, and what matters is who's using it and what they're sending through it."
      ),

      h2("Where things actually go wrong"),
      p(
        "Problems start when a provider streams channels it never licensed. Cable networks, sports leagues and broadcasters sell the rights to show their content, and a legitimate streaming service pays for those rights, the same way Hulu or YouTube TV do. Some IPTV sellers skip that step entirely and resell channels they have no rights to, usually at a fraction of the normal cost. That's copyright infringement, and in the US it falls under the Digital Millennium Copyright Act, better known as the DMCA."
      ),
      p(
        "Under the DMCA, distributing copyrighted content without a license can carry civil penalties of up to $150,000 per work for willful infringement, and in serious commercial cases, criminal charges with fines reaching $250,000 and up to five years in prison for a first offense. Those numbers are aimed at the businesses running large-scale piracy operations, not someone watching TV at home, but they show how seriously US law treats unlicensed content distribution."
      ),

      h2("How anti-piracy enforcement actually works"),
      p(
        "Most of the pressure on illegal IPTV comes from an organization called ACE, the Alliance for Creativity and Entertainment, a coalition backed by major Hollywood studios, broadcasters and streaming platforms. ACE investigates pirate IPTV operations, works with hosting providers and domain registrars to take services offline, and refers the largest cases for criminal prosecution. Some of the operations shut down this way have had hundreds of thousands of paying subscribers before they disappeared overnight, which is usually the first sign to customers that anything was wrong in the first place."
      ),
      p(
        "Payment processors play a role too. Once a card network or processor identifies a merchant as running an unlicensed streaming service, they'll often cut off payment processing, which is a second common reason logins suddenly stop working with no explanation."
      ),

      h2("What the FCC actually regulates"),
      p(
        "Legitimate IPTV providers in the US that offer live TV packages typically register as virtual multichannel video programming distributors, or vMVPDs, which puts them under a form of FCC oversight and requires proper licensing agreements with content owners. This is the same category services like Hulu + Live TV and YouTube TV fall into. A seller advertising thousands of live channels for a few dollars a year, with no clear business information anywhere on their site, isn't operating in that same category, and usually isn't registered as anything at all."
      ),

      h2("What about \"fully loaded\" streaming boxes?"),
      p(
        "You'll sometimes see Android boxes or Fire Sticks sold as \"fully loaded\" or \"jailbroken\", pre-installed with apps set up to access pirated content out of the box. Selling hardware specifically configured this way is treated more seriously under US law than simply using a streaming app, because it's marketed and sold with the explicit purpose of enabling infringement. Sellers of these boxes have faced lawsuits and criminal charges in the past. Buying a plain, unmodified streaming device like a genuine Fire TV Stick and installing your own legitimate apps doesn't carry that same risk."
      ),

      h2("How to spot a legitimate IPTV service"),
      p(
        "A few things are worth checking before you subscribe to anything, and none of them require any legal knowledge, just a bit of common sense."
      ),
      ...ul([
        "The pricing is realistic. Genuine content licensing costs money, so a service dramatically cheaper than cable for the same channels, or selling a full year of thousands of channels for the price of one takeaway meal, should raise a question.",
        "They're upfront about what they offer, with a real website, clear plan details and pricing, instead of hiding behind vague marketing or contact-only-on-Telegram setups.",
        "Support and terms are easy to find, including a real way to reach them and clear information about plans, renewals and refunds.",
        "They don't tell you to hide what you're doing. If a seller specifically suggests using a VPN \"just in case\" before you've even asked, treat that as a signal worth paying attention to.",
      ]),

      h2("What happens if you use a service that turns out to be illegal"),
      p(
        "For most individual subscribers, the practical risk isn't a lawsuit, it's disruption. Illegal IPTV operations get shut down fairly often, sometimes overnight, which means you lose access with no warning and, almost always, no refund. Because these services often change servers, domains and payment methods to stay ahead of enforcement, quality and reliability tend to be inconsistent even while they're still running. If you want a service you can actually rely on month to month, that stability matters just as much as the price."
      ),
      p(
        "There's also a simple cost comparison worth making. A legitimate IPTV subscription in the US typically runs somewhere between $15 and $25 a month, which is already well below the average cable bill. A provider promising the same channel count for a fraction of that price isn't just being generous. Content licensing has a real cost, and a price that low usually means that cost was skipped entirely rather than passed on to you as a discount."
      ),

      h2("Does this apply outside the US too"),
      p([
        "The same basic principle holds in most places: IPTV as a technology is fine, licensing is what determines legality. If you're comparing options elsewhere, we've got dedicated guides for ",
        { text: "IPTV in the UK", href: "/iptv-subscription-uk/" },
        " and ",
        { text: "IPTV in Canada", href: "/iptv-subscription-canada/" },
        " covering what to look for in each of those markets specifically.",
      ]),

      p(
        "None of this is legal advice, just a plain explanation of how the law generally treats IPTV in the US. If you're unsure about a specific provider, the questions above are a reasonable place to start, and it's always worth a quick search for the provider's name plus \"reviews\" before you commit to a longer plan."
      ),
      p([
        "If you'd rather skip the guesswork, we offer an ",
        { text: "IPTV subscription in the USA", href: "/iptv-subscription-usa/" },
        " with transparent pricing, clear terms and a free trial, so you can see exactly what you're getting before committing to a plan.",
      ]),
    ],
  },
  {
    title: "The Best IPTV Players in 2026, and How to Pick One",
    slug: "best-iptv-players",
    excerpt:
      "Your subscription is only half the setup. Here's a plain look at IPTV Smarters Pro, TiviMate, GSE, Smart IPTV and VLC, and which one fits your device.",
    publishedAt: "2026-08-28",
    mainImageUrl: "/blog/best-iptv-players-cover.webp",
    author,
    categories: [{ title: "Devices", slug: "devices" }],
    seoTitle: "Best IPTV Players 2026: Which App to Use",
    seoDescription:
      "A plain-English comparison of the best IPTV player apps, including IPTV Smarters Pro, TiviMate, GSE and Smart IPTV, and which one fits your device.",
    faqs: [
      {
        question: "What is the best free IPTV player?",
        answer:
          "IPTV Smarters Pro is the most widely used free option because it works across Android, iOS, Windows, Mac and Fire Stick with the same login.",
      },
      {
        question: "Is TiviMate better than IPTV Smarters?",
        answer:
          "TiviMate has a better TV guide and a remote-friendly layout, which makes it popular on Android TV and Fire Stick. IPTV Smarters Pro runs on more platforms, including iPhone and Windows. The better choice depends on your device.",
      },
      {
        question: "Does VLC work for watching IPTV channels?",
        answer:
          "Yes, VLC can play an M3U link directly, but it has no channel guide, favorites or on-demand library. It works well as a quick test, not as a daily viewing app.",
      },
      {
        question: "What IPTV player works on Samsung and LG Smart TVs?",
        answer:
          "Smart IPTV, often shown as SS IPTV, is the standard option for these TVs. It's activated using your TV's MAC address rather than a typical login screen.",
      },
      {
        question: "Do I have to pay for an IPTV player app?",
        answer:
          "No, the main players, including IPTV Smarters Pro, TiviMate's free tier, GSE Smart IPTV and VLC, are free to download and use.",
      },
    ],
    body: [
      p(
        "Buying an IPTV subscription gets you the channels. It doesn't get you an app to watch them in. That second piece, the player, is what actually loads your channel list, builds your TV guide, and decides how everything looks on screen. A lot of people don't realize these are two separate things until they're staring at a login screen with nowhere to type their details. The good news is most IPTV players are free, well built, and take a few minutes to set up. Here's an honest look at the ones worth using in 2026, and which device each one suits best."
      ),

      h2("What an IPTV player actually does"),
      p(
        "A player app takes the login details from your subscription, either a server URL with a username and password, or a single M3U link, and turns that into an organized channel list with a program guide, search, favorites, and usually a way to watch shows on demand too. Without a player, your subscription details are just text with nowhere to type them. The subscription and the player are sold and maintained separately, which is why switching to a new player app never means buying a new subscription."
      ),

      h2("What to actually look for in a player"),
      p(
        "Before comparing specific apps, it helps to know what separates a good one from a basic one. A few features matter more than the rest:"
      ),
      ...ul([
        "EPG support, meaning a proper program guide that shows what's on now and later, not just a bare list of channel names.",
        "Catch-up or on-demand support, so you can watch something that already aired instead of only live channels.",
        "Multiple playlist support, useful if you ever keep more than one subscription active at the same time.",
        "A remote-friendly layout if you're using a TV box or Fire Stick, versus a touch-friendly layout on phones and tablets.",
        "Parental controls, if you want to lock certain channels or categories behind a PIN for kids using the same device.",
      ]),
      p(
        "Not every app does all of this well, which is exactly why the right choice depends on your device rather than a single universal \"best\" app. A player that feels great on a big screen with a remote can feel clunky on a phone, and the other way around."
      ),

      h2("IPTV Smarters Pro"),
      p(
        "This is the closest thing to a universal option. It runs on Android, iOS, Windows, Mac, Fire Stick and most Smart TVs, using the same login on every device. The layout separates live channels, movies and series clearly, it supports EPG and catch-up where your provider offers it, setup takes about two minutes, and it's completely free. If you only want to install one app and use it everywhere, this is usually the one."
      ),

      h2("TiviMate"),
      p(
        "TiviMate is built specifically for Android TV boxes and Fire Stick, and it shows. The TV guide is easier to read from across the room, navigation feels made for a remote control instead of a touchscreen, and it supports multiple playlists if you ever run more than one subscription. The free version covers what most people need; a paid Premium tier, priced as a small one-time or yearly fee, adds extras like cloud-based recording and a picture-in-picture channel bar. The catch is it's Android only, so it won't help you on an iPhone or a Windows PC."
      ),

      h2("GSE Smart IPTV"),
      p(
        "GSE is the flexible option. It accepts nearly every playlist format you'll come across, plus multiple EPG sources at once, which makes it a useful fallback when another app refuses to load a particular provider's format. It's also one of the few players with a genuinely usable iOS version that isn't a stripped-down copy of the Android app. The interface looks a little more technical than Smarters or TiviMate, but the extra format support genuinely helps if you ever switch providers or run into a playlist another app can't parse."
      ),

      h2("Smart IPTV (for Samsung and LG TVs)"),
      p(
        "If you're setting up directly on a Samsung or LG Smart TV without a separate streaming box, Smart IPTV, often shown as SS IPTV, is usually the app for the job. It works differently from the others: instead of typing in login details on the TV itself, you activate the app using your TV's MAC address on the Smart IPTV website, then load your playlist from there. It's an extra step compared to a normal login screen, but it's the standard way to get IPTV running on a TV that doesn't support the usual Android-based apps."
      ),

      h2("VLC"),
      p(
        "VLC isn't built for IPTV specifically, but it plays M3U links without any setup at all, on practically any device, including ones that can't run a dedicated IPTV app at all. There's no channel guide, no favorites, no polish, just a straightforward way to check that a playlist link actually works before installing something more full-featured. It's a useful backup and a quick troubleshooting tool, not a long-term way to watch day to day."
      ),
      p(
        "It's also worth keeping installed even after you settle on a main player, purely for troubleshooting. If a channel won't load anywhere else, opening the same link in VLC tells you within seconds whether the problem is your provider's stream or something wrong with the other app's settings."
      ),

      h2("What about Kodi?"),
      p(
        "Kodi comes up a lot in IPTV discussions, but it's a general media center, not an IPTV player by default. To use it for live TV, you need to add a separate PVR client add-on and configure it with your M3U or Xtream details, which is a more technical setup than any of the apps above. It's a solid option if you're already using Kodi for other media and don't mind the extra configuration, but it's not the easiest starting point if IPTV is the only thing you're trying to watch."
      ),

      h2("Which player fits your device"),
      p("If you'd rather skip the comparison and just pick something, this covers most setups:"),
      table([
        ["Device", "Recommended player"],
        ["Fire Stick / Fire TV", "TiviMate or IPTV Smarters Pro"],
        ["Android TV Box", "TiviMate"],
        ["iPhone / iPad", "IPTV Smarters Pro or GSE Smart IPTV"],
        ["Samsung / LG Smart TV", "Smart IPTV (SS IPTV)"],
        ["Windows / Mac", "IPTV Smarters Pro"],
        ["Quick test on any device", "VLC"],
      ]),

      h2("Setting up your chosen player"),
      p([
        "Once you've picked an app, the setup is almost always the same: open it, choose \"Add user\" or \"Xtream Codes API\", and enter the ",
        { text: "portal URL", href: "/blog/what-is-an-iptv-portal-url/" },
        ", username and password from your subscription, or paste your M3U link if that's what you were given. Our ",
        { text: "installation guide", href: "/installation-guide/" },
        " has exact steps for Fire Stick, Android TV, iPhone, Samsung, LG and more if you'd rather follow along screen by screen instead of guessing where each setting lives.",
      ]),

      p([
        "There's no single \"best\" player for everyone, only the one that fits the device you're actually using. Pick based on your hardware first, then decide if you want extras like recording or multiple playlist support. If you don't have a subscription to test any of this with yet, ",
        { text: "buy an IPTV subscription", href: "/#plans" },
        " with a free trial and try a couple of these apps side by side before settling on one.",
      ]),
    ],
  },
];

export function getStaticPosts(): BlogPostSummary[] {
  return posts
    .slice()
    .sort((a, b) => (a.publishedAt! < b.publishedAt! ? 1 : -1))
    .map(({ title, slug, excerpt, publishedAt, mainImageUrl, author, categories }) => ({
      title,
      slug,
      excerpt,
      publishedAt,
      mainImageUrl,
      author,
      categories,
    }));
}

export function getStaticPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getStaticPostBySlug(slug: string): BlogPost | null {
  const post = posts.find((post) => post.slug === slug);
  return (post as unknown as BlogPost) ?? null;
}
