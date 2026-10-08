import type { Metadata, MetadataRoute } from "next";

const siteName = "Reddy Line";
const defaultSiteUrl = "https://www.reddyline.com";
const defaultImage = "/logo.png";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords: string[];
  changeFrequency: ChangeFrequency;
  priority: number;
};

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
  const siteUrl = raw.replace(/\/$/, "");

  try {
    const url = new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);

    if (
      !url.hostname.startsWith("www.") &&
      !url.hostname.includes("localhost") &&
      !url.hostname.includes("127.0.0.1") &&
      url.hostname.includes(".")
    ) {
      url.hostname = `www.${url.hostname}`;
      url.protocol = "https:";
    }

    return url.origin;
  } catch {
    return defaultSiteUrl;
  }
}

export const seoPages = {
  "/": {
    title: "Best Online Cricket ID & Casino Games India | Reddy Line",
    description:
      "Get a trusted Online Cricket ID for IPL betting, live cricket betting, sports betting, and 200+ casino games with fast withdrawals and secure payments.",
    path: "/",
    image: "/logo.webp",
    keywords: [
      "Reddy Line",
      "online cricket ID",
      "IPL betting",
      "live cricket betting",
      "casino games online",
      "sports betting India",
      "fast withdrawals",
    ],
    changeFrequency: "weekly",
    priority: 1,
  },
  "/about": {
    title: "About Reddy Line | Trusted Online Cricket ID & Gaming Platform",
    description:
      "Learn about Reddy Line, a trusted platform for Online Cricket ID, casino games, IPL betting, secure access, and sports entertainment.",
    path: "/about",
    keywords: [
      "about Reddy Line",
      "online cricket ID",
      "trusted gaming platform",
      "casino games",
      "IPL betting",
      "sports entertainment",
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/affiliate": {
    title: "Reddy Line Affiliate Program - Earn Rewards",
    description:
      "Join the Reddy Line Affiliate Program and earn commission by referring active users to a trusted online casino, sports betting, and gaming platform.",
    path: "/affiliate",
    keywords: ["Reddy Line affiliate", "affiliate program", "gaming affiliate", "casino affiliate"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/apps": {
    title: "Reddy Line App Download | Online Cricket ID & Casino Games App",
    description:
      "Download the Reddy Line app for Online Cricket ID, IPL betting, live casino games, and secure sports betting on Android and iOS.",
    path: "/apps",
    image: "/iphone.jpg",
    keywords: [
      "Reddy Line app download",
      "online cricket ID app",
      "IPL betting app",
      "casino games app",
      "sports betting app",
      "Android iOS gaming app",
    ],
    changeFrequency: "monthly",
    priority: 0.75,
  },
  "/badminton": {
    title: "Badminton Betting India | Live Badminton Betting Online | Reddy Line",
    description:
      "Enjoy live badminton betting with real-time odds, top international tournaments, secure betting markets, and a mobile-friendly experience.",
    path: "/badminton",
    image: "/badminton-gold-v2.png",
    keywords: [
      "badminton betting India",
      "live badminton betting",
      "badminton betting markets",
      "BWF tournaments",
      "online sports betting",
      "Reddy Line badminton",
    ],
    changeFrequency: "weekly",
    priority: 0.82,
  },
  "/blog": {
    title: "Reddy Line Blog - Betting Tips & Guides",
    description:
      "Read the latest Reddy Line articles, platform updates, betting insights, casino guides, and online gaming tips for players.",
    path: "/blog",
    keywords: ["Reddy Line blog", "betting guide", "casino guide", "gaming news"],
    changeFrequency: "weekly",
    priority: 0.65,
  },
  "/casino": {
    title: "Casino Games Online India | Live Casino & Aviator Games | Reddy Line",
    description:
      "Play Aviator, Blackjack, Roulette, Baccarat, Teen Patti, Dragon Tiger, and live casino games with secure access on Reddy Line.",
    path: "/casino",
    image: "/casino-slots.jpg",
    keywords: [
      "casino games online India",
      "live casino",
      "aviator game",
      "teen patti online",
      "blackjack roulette baccarat",
      "Reddy Line casino",
    ],
    changeFrequency: "weekly",
    priority: 0.88,
  },
  "/contact": {
    title: "Contact Reddy Line - Customer Support",
    description:
      "Contact the Reddy Line support team for account help, platform questions, payment assistance, and online gaming support.",
    path: "/contact",
    keywords: ["contact Reddy Line", "Reddy Line support", "gaming support", "betting help"],
    changeFrequency: "monthly",
    priority: 0.55,
  },
  "/contact-us": {
    title: "Reddy Line Customer Support | 24/7 Cricket ID & Betting Help",
    description:
      "Get 24/7 customer support for Cricket ID, account login, deposits, withdrawals, casino games, sports betting, and technical assistance at Reddy Line.",
    path: "/contact-us",
    keywords: [
      "Reddy Line customer support",
      "24/7 betting help",
      "cricket ID support",
      "deposit withdrawal help",
      "live chat support",
    ],
    changeFrequency: "monthly",
    priority: 0.55,
  },
  "/cricket": {
    title: "Online Cricket ID & Live Cricket Betting Platform | Reddy Line",
    description:
      "Get a trusted Online Cricket ID for live cricket betting, IPL matches, real-time odds, and secure betting with Reddy Line.",
    path: "/cricket",
    image: "/cricket-gold-v2.png",
    keywords: [
      "online cricket ID",
      "live cricket betting",
      "IPL betting",
      "cricket exchange ID",
      "cricket betting markets",
      "Reddy Line cricket",
    ],
    changeFrequency: "weekly",
    priority: 0.95,
  },
  "/deposit": {
    title: "Deposit Funds Securely - Reddy Line",
    description:
      "Deposit funds on Reddy Line using a secure and simple payment flow designed for fast account top-ups and uninterrupted gameplay.",
    path: "/deposit",
    keywords: ["Reddy Line deposit", "deposit funds", "secure payment", "online gaming deposit"],
    changeFrequency: "monthly",
    priority: 0.5,
  },
  "/deposit-and-withdrawal": {
    title: "Deposit & Withdrawal Guide - Reddy Line",
    description:
      "Learn how deposits and withdrawals work on Reddy Line, including secure transactions, account verification, mobile payments, and support.",
    path: "/deposit-and-withdrawal",
    keywords: ["Reddy Line deposit", "Reddy Line withdrawal", "payment guide", "secure transactions"],
    changeFrequency: "monthly",
    priority: 0.72,
  },
  "/games": {
    title: "Explore Casino Games & Cricket Betting Markets | Reddy Line",
    description:
      "Explore cricket betting, casino games, football, tennis, horse racing, and live sports with fast, secure access.",
    path: "/games",
    keywords: [
      "Reddy Line games hub",
      "casino games online",
      "cricket betting markets",
      "live sports betting",
      "football tennis horse racing",
      "mobile gaming",
    ],
    changeFrequency: "weekly",
    priority: 0.86,
  },
  "/highlights": {
    title: "Cricket Match Highlights & Live Streams",
    description:
      "Watch the latest cricket match highlights, live streams, and top moments on Reddy Line. Stream IPL, international, and T20 action powered by YouTube.",
    path: "/highlights",
    image: "/reddy-sports-v2.png",
    keywords: ["cricket highlights", "live cricket stream", "IPL highlights", "cricket videos", "Reddy Line highlights"],
    changeFrequency: "daily",
    priority: 0.9,
  },
  "/horse-racing": {
    title: "Horse Racing Betting India | Live Horse Racing Odds | Reddy Line",
    description:
      "Experience live horse racing betting with real-time odds, global race events, fast markets, and secure mobile betting.",
    path: "/horse-racing",
    image: "/horse-racing-gold-v2.png",
    keywords: [
      "horse racing betting India",
      "live horse racing odds",
      "horse racing betting markets",
      "online horse racing",
      "Reddy Line horse racing",
    ],
    changeFrequency: "weekly",
    priority: 0.82,
  },
  "/partner": {
    title: "Reddy Line Partner Program - Join Today",
    description:
      "Become a Reddy Line partner and grow revenue with a transparent program for gaming, casino, and sports betting traffic.",
    path: "/partner",
    keywords: ["Reddy Line partner", "partner program", "gaming partnership", "sports betting partner"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/privacy-policy": {
    title: "Privacy Policy - Reddy Line",
    description:
      "Read the Reddy Line Privacy Policy to understand how user information, cookies, account data, and platform security are handled.",
    path: "/privacy-policy",
    keywords: ["Reddy Line privacy policy", "user privacy", "data protection", "cookie policy"],
    changeFrequency: "yearly",
    priority: 0.45,
  },
  "/responsible-gambling": {
    title: "Responsible Gambling - Reddy Line",
    description:
      "Review Reddy Line responsible gambling guidance, player protection practices, betting limits, account control, and safer gaming advice.",
    path: "/responsible-gambling",
    keywords: ["responsible gambling", "safe betting", "player protection", "gaming limits"],
    changeFrequency: "monthly",
    priority: 0.58,
  },
  "/rules": {
    title: "Sports Betting Rules - Reddy Line",
    description:
      "Read Reddy Line rules for sports betting, market settlement, cricket betting, tennis, football, account use, and fair gaming standards.",
    path: "/rules",
    image: "/reddy-sports-v2.png",
    keywords: ["Reddy Line rules", "sports betting rules", "bet settlement", "gaming rules"],
    changeFrequency: "monthly",
    priority: 0.62,
  },
  "/support": {
    title: "Reddy Line Help Centre | 24/7 Support for Cricket ID & Betting",
    description:
      "Visit the Reddy Line Help Centre for 24/7 support with account access, Cricket ID, deposits, withdrawals, casino games, sports betting, and technical help.",
    keywords: [
      "Reddy Line help centre",
      "Reddy Line support",
      "24/7 betting help",
      "cricket ID support",
      "deposit withdrawal help",
      "live chat support",
    ],
    path: "/support",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  "/soccer": {
    title: "Soccer Betting Online India | Live Football Odds | Reddy Line",
    description:
      "Enjoy live soccer betting with Premier League, Champions League, FIFA events, real-time odds, and secure football betting markets.",
    path: "/soccer",
    image: "/football-gold-v2.png",
    keywords: [
      "soccer betting India",
      "live football odds",
      "football betting markets",
      "Premier League betting",
      "Champions League betting",
      "Reddy Line soccer",
    ],
    changeFrequency: "weekly",
    priority: 0.84,
  },
  "/tennis": {
    title: "Tennis Betting Online India | Live Tennis Odds | Reddy Line",
    description:
      "Bet on ATP, WTA, and Grand Slam tennis with live odds, real-time markets, and a smooth betting experience on Reddy Line.",
    path: "/tennis",
    image: "/tennis-gold-v2.png",
    keywords: [
      "tennis betting online India",
      "live tennis odds",
      "ATP WTA betting",
      "Grand Slam betting",
      "live tennis betting",
      "Reddy Line tennis",
    ],
    changeFrequency: "weekly",
    priority: 0.84,
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions - Reddy Line",
    description:
      "Read the Reddy Line Terms and Conditions covering account use, payments, bonuses, responsible gaming, privacy, and platform rules.",
    path: "/terms-and-conditions",
    keywords: ["Reddy Line terms", "terms and conditions", "platform rules", "gaming terms"],
    changeFrequency: "yearly",
    priority: 0.5,
  },
  "/withdrawal": {
    title: "Withdraw Winnings Securely - Reddy Line",
    description:
      "Withdraw winnings from Reddy Line with a simple secure payout flow for UPI and bank transfer requests.",
    path: "/withdrawal",
    keywords: ["Reddy Line withdrawal", "withdraw winnings", "secure payout", "online gaming withdrawal"],
    changeFrequency: "monthly",
    priority: 0.5,
  },
} satisfies Record<string, PageSeo>;

export type SeoPath = keyof typeof seoPages;

export const homeFaqs = [
  {
    question: "What is Reddy Line?",
    answer:
      "Reddy Line is an online gaming and entertainment platform that offers casino games, cricket ID services, sports entertainment, and a smooth gaming experience across desktop and mobile devices.",
  },
  {
    question: "How can I get a Cricket ID on Reddy Line?",
    answer:
      "Getting a Cricket ID on Reddy Line is quick and simple. Register an account, complete the required details, and gain access to live cricket betting markets, IPL betting, and international cricket events.",
  },
  {
    question: "Can I bet on IPL matches on Reddy Line?",
    answer:
      "Yes, Reddy Line offers IPL betting with live odds, ball-by-ball betting markets, match winner bets, and real-time score updates.",
  },
  {
    question: "What casino games are available on Reddy Line?",
    answer:
      "Players can enjoy a wide range of casino games including Teen Patti, Aviator, Roulette, Blackjack, Andar Bahar, Slots, Dragon Tiger, Baccarat, and live dealer games.",
  },
  {
    question: "How can I download the Reddy Line App?",
    answer:
      "Users can download the Reddy Line App on supported Android and iOS devices to access casino games, sports betting, and cricket betting on the go.",
  },
  {
    question: "Is Reddy Line Safe and Secure?",
    answer:
      "Yes, Reddy Line uses advanced security systems to help protect user accounts, personal information, and transactions. The platform is designed to provide a secure, reliable, and smooth gaming experience for all players.",
  },
  {
    question: "What payment methods are available on Reddy Line?",
    answer:
      "Reddy Line supports multiple payment methods, including UPI, bank transfers, and other secure payment options for deposits and withdrawals.",
  },
  {
    question: "How long do withdrawals take on Reddy Line?",
    answer:
      "Withdrawal processing times may vary depending on the payment method used, account status, and verification requirements.",
  },
  {
    question: "What sports are available for betting on Reddy Line?",
    answer:
      "Users can explore betting markets for cricket, football, tennis, basketball, esports, horse racing, and other international sporting events.",
  },
  {
    question: "Is online cricket betting available 24/7?",
    answer:
      "Yes, users can access cricket betting markets throughout the day, including IPL, T20, ODI, Test matches, and international tournaments.",
  },
] as const;

export const appsFaqs = [
  {
    question: "What is the Reddy Line App?",
    answer:
      "The Reddy Line App is a mobile gaming platform that provides access to online cricket ID services, IPL betting, sports betting, and casino games through Android and iOS devices.",
  },
  {
    question: "How can I download the Reddy Line App?",
    answer:
      "You can download the Reddy Line App by clicking the Download APK button for Android devices or by adding the app to your home screen on iPhone using Safari.",
  },
  {
    question: "Is the Reddy Line App available for Android and iOS?",
    answer:
      "Yes, the Reddy Line App is optimized for both Android smartphones and iPhones, offering a smooth gaming experience across devices.",
  },
  {
    question: "Can I get an Online Cricket ID through the Reddy Line App?",
    answer:
      "Yes, users can access and manage their Online Cricket ID directly through the Reddy Line App for live cricket betting and sports markets.",
  },
  {
    question: "What games are available on the Reddy Line App?",
    answer:
      "The app offers casino games, live casino tables, Teen Patti, Andar Bahar, Poker, Blackjack, Aviator, Slots, and multiple sports betting options.",
  },
  {
    question: "Is the Reddy Line App safe to use?",
    answer:
      "Yes, the platform uses secure systems, encrypted transactions, and account protection features to help provide a secure gaming experience.",
  },
  {
    question: "Can I place live cricket bets using the Reddy Line App?",
    answer:
      "Yes, the app allows users to access live cricket betting markets, IPL betting, and real-time sports odds directly from their mobile devices.",
  },
  {
    question: "Does the Reddy Line App support instant deposits and withdrawals?",
    answer:
      "Yes, users can access fast deposit and withdrawal options through supported payment methods available on the platform.",
  },
  {
    question: "Do I need a desktop computer to use Reddy Line?",
    answer:
      "No, the Reddy Line App is fully mobile-optimized, allowing users to enjoy casino games, sports betting, and cricket ID services directly from their smartphones.",
  },
  {
    question: "Why should I choose the Reddy Line App?",
    answer:
      "The Reddy Line App offers fast performance, Online Cricket ID access, live sports betting, casino games, mobile-friendly navigation, secure transactions, and 24/7 platform accessibility in one place.",
  },
] as const;

export const aboutFaqs = [
  {
    question: "What is Reddy Line?",
    answer:
      "Reddy Line is an online gaming and entertainment platform that offers casino games, cricket ID services, sports entertainment, and a smooth gaming experience across desktop and mobile devices.",
  },
  {
    question: "What casino games are available on Reddy Line?",
    answer:
      "Reddy Line offers a variety of casino games including Poker, Blackjack, Roulette, Baccarat, Teen Patti, Andar Bahar, Aviator, Dragon Tiger, and Slots.",
  },
  {
    question: "What makes Reddy Line different from other gaming platforms?",
    answer:
      "Reddy Line focuses on fast performance, secure systems, mobile-friendly access, user-friendly navigation, and reliable customer support to provide a better gaming experience.",
  },
  {
    question: "Is Reddy Line available on mobile devices?",
    answer:
      "Yes, Reddy Line is fully optimized for smartphones, tablets, and desktops, allowing users to enjoy gaming and entertainment from anywhere.",
  },
  {
    question: "Is Reddy Line a safe and secure platform?",
    answer:
      "Yes, Reddy Line uses advanced security measures to help protect user accounts, personal information, and transactions while providing a secure gaming environment.",
  },
  {
    question: "Does Reddy Line provide customer support?",
    answer:
      "Yes, the Reddy Line support team is available to assist users with account-related questions, technical guidance, and general platform support.",
  },
  {
    question: "Can I access Reddy Line from anywhere?",
    answer:
      "Reddy Line is designed for a global audience and supports users across multiple regions with a fast and responsive platform experience.",
  },
  {
    question: "What services does Reddy Line provide?",
    answer:
      "Reddy Line provides access to Online Cricket ID, casino games, live sports entertainment, IPL betting, mobile gaming features, and customer support services.",
  },
  {
    question: "Is Reddy Line suitable for new users?",
    answer:
      "Yes, Reddy Line is designed with a user-friendly interface that makes it easy for both beginners and experienced users to explore the platform.",
  },
  {
    question: "How does Reddy Line focus on user experience?",
    answer:
      "Reddy Line focuses on fast loading speeds, simple navigation, mobile optimization, and smooth platform performance to ensure a better user experience.",
  },
] as const;

export const gamesFaqs = [
  {
    question: "What games are available on Reddy Line?",
    answer:
      "Reddy Line offers casino games, cricket betting, soccer, tennis, horse racing, badminton, and other live sports entertainment options.",
  },
  {
    question: "Can I play casino games online on Reddy Line?",
    answer:
      "Yes, users can explore a variety of casino games online, including popular table games, live dealer games, and modern gaming experiences.",
  },
  {
    question: "Does Reddy Line provide cricket betting markets?",
    answer:
      "Yes, Reddy Line provides access to cricket betting markets, including major tournaments, international matches, and live cricket action.",
  },
  {
    question: "Are live sports available on Reddy Line?",
    answer:
      "Yes, users can access live sports markets for cricket, football, tennis, horse racing, badminton, and other sporting events.",
  },
  {
    question: "Is the Games Hub mobile-friendly?",
    answer:
      "Yes, the Reddy Line Games Hub is optimized for smartphones, tablets, and desktop devices for a smooth gaming experience.",
  },
  {
    question: "Why choose Reddy Line Games Hub?",
    answer:
      "Reddy Line offers a wide range of casino games, sports markets, mobile optimization, fast performance, and user-friendly navigation.",
  },
  {
    question: "Does Reddy Line support multiple gaming categories?",
    answer:
      "Yes, the platform provides access to multiple gaming and sports categories from a single interface.",
  },
  {
    question: "Can I explore football and tennis markets on Reddy Line?",
    answer:
      "Yes, users can access football and tennis entertainment categories along with other sports options.",
  },
  {
    question: "Does Reddy Line offer horse racing and badminton sections?",
    answer:
      "Yes, the Games Hub includes horse racing and badminton categories for users interested in diverse sports entertainment.",
  },
  {
    question: "Can I use the Games Hub on Android and iPhone?",
    answer:
      "Yes, the platform is compatible with Android and iOS devices.",
  },
] as const;

export const cricketFaqs = [
  {
    question: "What is an Online Cricket ID?",
    answer:
      "An Online Cricket ID provides access to cricket betting markets, live match updates, and cricket-related entertainment features on the platform.",
  },
  {
    question: "How can I get an Online Cricket ID?",
    answer:
      "Users can request an Online Cricket ID through the registration process and gain access to cricket markets quickly and securely.",
  },
  {
    question: "What is live cricket betting?",
    answer:
      "Live cricket betting allows users to follow a match in real time and access dynamic betting markets as the game progresses.",
  },
  {
    question: "Can I use my Cricket ID for IPL betting?",
    answer:
      "Yes, users can access IPL-related cricket markets and follow live IPL action using their Cricket ID.",
  },
  {
    question: "What cricket tournaments are available on Reddy Line?",
    answer:
      "Users can explore markets related to IPL, ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, Champions Trophy, Test Series, and domestic cricket leagues.",
  },
  {
    question: "Is Online Cricket ID access available on mobile devices?",
    answer:
      "Yes, users can access their Cricket ID through mobile-friendly platforms on Android and iOS devices.",
  },
  {
    question: "What betting markets are available for cricket matches?",
    answer:
      "Popular markets include Match Winner, Toss Winner, Session Betting, Top Batsman, Top Bowler, Most Sixes, Most Fours, and Live Betting Markets.",
  },
  {
    question: "Can beginners use the Reddy Line Cricket Exchange platform?",
    answer:
      "Yes, the platform is designed with a simple interface that helps both new and experienced users explore cricket markets easily.",
  },
  {
    question: "What is a Cricket Exchange ID?",
    answer:
      "A Cricket Exchange ID helps users access multiple cricket markets, live odds, and match-related betting opportunities through a single account.",
  },
  {
    question: "Does Reddy Line provide live cricket odds?",
    answer:
      "Yes, live cricket odds are updated in real time to reflect match conditions and market activity.",
  },
] as const;

export const casinoFaqs = [
  {
    question: "What casino games are available on Reddy Line?",
    answer:
      "Reddy Line offers Aviator, Blackjack, Roulette, Baccarat, Teen Patti, Dragon Tiger, Slots, and Live Casino games.",
  },
  {
    question: "Can I play casino games online on mobile devices?",
    answer:
      "Yes, the platform is fully optimized for Android, iPhone, tablets, and desktop devices for smooth casino gaming.",
  },
  {
    question: "What is the Aviator Game?",
    answer:
      "Aviator is a popular crash-style game where players watch a virtual aircraft rise and decide when to cash out before it flies away.",
  },
  {
    question: "Does Reddy Line provide live casino games?",
    answer:
      "Yes, players can enjoy live casino experiences with real-time dealer rooms and interactive gaming environments.",
  },
  {
    question: "Is Reddy Line suitable for beginners?",
    answer:
      "Yes, the platform offers a simple interface that makes it easy for both new and experienced players to explore casino games.",
  },
  {
    question: "Can I access casino games anytime?",
    answer:
      "Yes, users can access casino entertainment 24/7 through the platform from supported devices.",
  },
  {
    question: "What is a Live Casino?",
    answer:
      "A Live Casino allows players to participate in real-time gaming sessions featuring live dealers and interactive game tables.",
  },
  {
    question: "Can I play Teen Patti Online on Reddy Line?",
    answer:
      "Yes, players can explore Teen Patti and other popular card-based casino entertainment options.",
  },
  {
    question: "What is the difference between Live Casino and regular casino games?",
    answer:
      "Live Casino games feature real dealers and real-time interaction, while regular casino games are software-based experiences.",
  },
  {
    question: "Does Reddy Line offer Aviator Game Online?",
    answer:
      "Yes, Aviator is one of the featured casino games available on the platform.",
  },
] as const;

export const badmintonFaqs = [
  {
    question: "What is badminton betting?",
    answer:
      "Badminton betting allows users to explore betting markets related to badminton matches, tournaments, and live match action.",
  },
  {
    question: "Can I enjoy live badminton betting on Reddy Line?",
    answer:
      "Yes, Reddy Line provides live badminton betting markets with real-time updates and dynamic match information.",
  },
  {
    question: "What badminton betting markets are available?",
    answer:
      "Users can explore Match Winner, Set Betting, Total Points, Handicap Betting, Live Betting Markets, and Tournament Betting options.",
  },
  {
    question: "Is badminton betting available on mobile devices?",
    answer:
      "Yes, Reddy Line is optimized for smartphones and tablets, allowing users to access badminton betting markets from mobile devices.",
  },
  {
    question: "Which badminton tournaments can I follow on Reddy Line?",
    answer:
      "Users can follow major events such as the BWF World Championships, Thomas Cup, Uber Cup, Sudirman Cup, All England Open, and Olympic badminton competitions.",
  },
  {
    question: "Can beginners use the badminton betting platform?",
    answer:
      "Yes, the platform is designed with simple navigation and easy access to sports markets for both new and experienced users.",
  },
  {
    question: "Does Reddy Line provide real-time badminton odds?",
    answer:
      "Yes, users can access real-time odds updates and live sports market information during ongoing badminton matches.",
  },
  {
    question: "What makes badminton betting exciting?",
    answer:
      "Fast-paced gameplay, quick momentum shifts, and competitive international matches make badminton one of the most engaging sports to follow.",
  },
  {
    question: "What are the most popular badminton betting markets?",
    answer:
      "Popular markets include Match Winner, Set Betting, Total Points, Handicap Betting, Tournament Winner, and Live Betting Markets.",
  },
  {
    question: "Why choose Reddy Line for badminton betting?",
    answer:
      "Reddy Line offers live betting markets, international tournament coverage, mobile-friendly access, secure systems, and a smooth user experience.",
  },
] as const;

export const soccerFaqs = [
  {
    question: "What is Soccer Betting?",
    answer:
      "Soccer betting allows users to predict different outcomes of football matches, including match winners, total goals, correct scores, and live match events through online betting markets.",
  },
  {
    question: "Can I enjoy Live Soccer Betting at Reddy Line?",
    answer:
      "Yes, Reddy Line offers live soccer betting with real-time football odds, live score updates, and dynamic betting markets during ongoing matches.",
  },
  {
    question: "Which football leagues are available for betting?",
    answer:
      "Users can explore betting markets for major competitions including the Premier League, UEFA Champions League, La Liga, Serie A, Bundesliga, FIFA World Cup, UEFA Euro, and Copa America.",
  },
  {
    question: "What football betting markets are available on Reddy Line?",
    answer:
      "Reddy Line provides Match Winner, Both Teams to Score, Total Goals, Correct Score, Handicap Betting, First Goal Scorer, Corner Betting, and Live Football Betting Markets.",
  },
  {
    question: "Is Soccer Betting available on mobile devices?",
    answer:
      "Yes. Reddy Line is fully optimized for Android smartphones, iPhones, tablets, and desktop devices, allowing users to enjoy football betting anytime.",
  },
  {
    question: "Does Reddy Line provide Live Football Odds?",
    answer:
      "Yes, users can access live football odds that are updated continuously throughout the match to reflect the latest game situations.",
  },
  {
    question: "Can beginners use the Soccer Betting platform?",
    answer:
      "Yes. The platform features a simple interface and easy navigation, making it suitable for both beginners and experienced football betting enthusiasts.",
  },
  {
    question: "Why choose Reddy Line for Soccer Betting?",
    answer:
      "Reddy Line offers live football odds, international league coverage, secure betting systems, mobile-friendly access, fast performance, and an easy-to-use betting interface.",
  },
  {
    question: "Is Soccer Betting available throughout the year?",
    answer:
      "Yes. Football fans can enjoy betting on domestic leagues, international tournaments, club competitions, and major championships throughout the year.",
  },
  {
    question: "How does Live Football Odds work in Soccer Betting?",
    answer:
      "Live Football Odds change throughout the match based on goals, possession, player performance, and other match events. At Reddy Line, users can access real-time odds updates and explore live soccer betting markets while the game is in progress.",
  },
] as const;

export const horseRacingFaqs = [
  {
    question: "What is horse racing betting?",
    answer:
      "Horse racing betting allows users to explore betting markets on horse races, race winners, place betting, and other race outcomes.",
  },
  {
    question: "Can I enjoy live horse racing betting on Reddy Line?",
    answer:
      "Yes, Reddy Line provides live horse racing betting with real-time race updates and continuously changing odds.",
  },
  {
    question: "What horse racing betting markets are available?",
    answer:
      "Users can explore Race Winner, Place Betting, Each Way Betting, Forecast Betting, Tricast Betting, and Live Horse Racing Markets.",
  },
  {
    question: "Is horse racing betting available on mobile devices?",
    answer:
      "Yes, Reddy Line is optimized for Android smartphones, iPhones, tablets, and desktop devices for a seamless betting experience.",
  },
  {
    question: "Can beginners use the horse racing betting platform?",
    answer:
      "Yes, the platform offers a simple interface and user-friendly navigation suitable for both beginners and experienced users.",
  },
  {
    question: "Does Reddy Line provide live horse racing odds?",
    answer:
      "Yes, users can access real-time horse racing odds and live market updates during racing events.",
  },
  {
    question: "What international horse racing events are available?",
    answer:
      "Users can explore betting markets for international horse racing championships, premium racing tournaments, and seasonal race meetings.",
  },
  {
    question: "Why choose Reddy Line for horse racing betting?",
    answer:
      "Reddy Line offers live race coverage, real-time odds, fast betting markets, mobile-friendly access, secure transactions, and a smooth betting experience.",
  },
  {
    question: "Can I access horse racing betting anytime?",
    answer:
      "Yes, users can access upcoming races, live events, and betting markets anytime through the Reddy Line platform.",
  },
  {
    question: "Why is horse racing betting popular?",
    answer:
      "Horse racing betting is popular because of fast-paced races, exciting finishes, multiple betting options, and international race events throughout the year.",
  },
] as const;

export const tennisFaqs = [
  {
    question: "What is Tennis Betting Online?",
    answer:
      "Tennis Betting Online allows users to explore betting markets on professional tennis matches, including ATP, WTA, Grand Slam tournaments, and live tennis events.",
  },
  {
    question: "Can I enjoy Live Tennis Betting on Reddy Line?",
    answer:
      "Yes, Reddy Line offers live tennis betting with real-time odds, live match coverage, and dynamic betting markets throughout the match.",
  },
  {
    question: "Which tennis tournaments can I follow on Reddy Line?",
    answer:
      "Users can explore betting markets for Wimbledon, Australian Open, French Open, US Open, ATP Masters 1000, ATP Tour, WTA Tour, Davis Cup, and Olympic Tennis events.",
  },
  {
    question: "What tennis betting markets are available?",
    answer:
      "Reddy Line offers Match Winner, Set Winner, First Set Winner, Total Games, Handicap Betting, Correct Score, Tournament Winner, and Live Tennis Betting markets.",
  },
  {
    question: "Is Tennis Betting Online available on mobile devices?",
    answer:
      "Yes, the platform is fully optimized for Android, iPhone, tablets, and desktop devices, allowing users to enjoy tennis betting from anywhere.",
  },
  {
    question: "Does Reddy Line provide Live Tennis Odds?",
    answer:
      "Yes, Reddy Line provides real-time tennis odds that update continuously based on live match action.",
  },
  {
    question: "Can beginners use the Tennis Betting platform?",
    answer:
      "Yes, the platform is designed with a simple interface and easy navigation, making it suitable for both beginners and experienced users.",
  },
  {
    question: "Can I place bets during a live tennis match?",
    answer:
      "Yes, users can place bets while a match is in progress using live betting markets with continuously updated odds.",
  },
  {
    question: "What makes Tennis Betting exciting?",
    answer:
      "Tennis betting is exciting because every point, game, and set can change the momentum of the match, creating multiple betting opportunities.",
  },
  {
    question: "What are Live Tennis Odds?",
    answer:
      "Live Tennis Odds change throughout the match based on points, games, sets, and player performance, providing real-time betting opportunities.",
  },
] as const;

export const contactUsFaqs = [
  {
    question: "How can I contact Reddy Line Customer Support?",
    answer:
      "You can contact the Reddy Line Customer Support team through live chat, email, or the online contact form available on the website.",
  },
  {
    question: "Is Reddy Line Customer Support available 24/7?",
    answer:
      "Yes, the support team is available 24 hours a day, 7 days a week to assist users with platform-related queries.",
  },
  {
    question: "Can I get help with my Cricket ID?",
    answer:
      "Yes, the support team can assist with Cricket ID registration, account access, and general Cricket ID-related questions.",
  },
  {
    question: "Does Reddy Line provide Live Chat support?",
    answer:
      "Yes, users can connect with the support team through live chat for quick assistance with their questions.",
  },
  {
    question: "Can I get help with deposits and withdrawals?",
    answer:
      "Yes, customer support can provide guidance regarding deposits, withdrawals, and supported payment methods.",
  },
  {
    question: "Does Reddy Line offer technical support?",
    answer:
      "Yes, the technical support team can help with login issues, website performance, app-related questions, and other technical concerns.",
  },
  {
    question: "Can I contact support for casino games and sports betting?",
    answer:
      "Yes, users can contact the support team for assistance related to casino games, sports betting, promotions, and platform features.",
  },
  {
    question: "How quickly does Reddy Line respond to support requests?",
    answer:
      "Response times may vary depending on the support channel, but the team aims to respond as quickly as possible.",
  },
  {
    question: "Is my information secure when contacting support?",
    answer:
      "Yes, Reddy Line uses secure communication channels to help protect user information during support interactions.",
  },
  {
    question: "Can I contact Reddy Line through email?",
    answer:
      "Yes, users can reach the support team through the official email addresses listed on the Contact or Support page.",
  },
] as const;

export const supportFaqs = [
  {
    question: "How do I get help on Reddy Line?",
    answer:
      "You can reach the Reddy Line Help Centre 24/7 through live chat, email, WhatsApp, or Telegram. Pick a help topic on this page to jump straight to the right guide, or open a support ticket and our team will assist you.",
  },
  {
    question: "Is Reddy Line support available 24/7?",
    answer:
      "Yes. Our support agents are available 24 hours a day, 7 days a week to help with account access, Cricket ID, deposits, withdrawals, casino games, and sports betting.",
  },
  {
    question: "I can't log in to my account. What should I do?",
    answer:
      "First check your username and password, then clear your browser cache or update the app. If you still can't log in, contact live chat or email support and our team will help you restore access securely.",
  },
  {
    question: "How long do deposits and withdrawals take?",
    answer:
      "Deposits are usually credited instantly. Withdrawal times vary depending on the payment method used, account verification, and processing checks. Visit the Deposit & Withdrawal guide for full details.",
  },
  {
    question: "How do I get or recover my Online Cricket ID?",
    answer:
      "Register an account to receive your Online Cricket ID, or contact support if you need help recovering an existing ID. Our team can guide you through verification and account access.",
  },
  {
    question: "Where can I find responsible gambling tools?",
    answer:
      "Reddy Line provides deposit limits, account controls, and self-exclusion options. Visit the Responsible Gambling page or contact support to set up limits on your account.",
  },
  {
    question: "How quickly will I get a reply from support?",
    answer:
      "Live chat is typically answered within a few minutes. Email responses usually arrive within a few hours, depending on the volume of requests.",
  },
  {
    question: "Is my information safe when I contact support?",
    answer:
      "Yes. Reddy Line uses secure, encrypted communication channels to protect your personal and account information during every support interaction.",
  },
] as const;

export const pageFaqs: Partial<
  Record<SeoPath, readonly { question: string; answer: string }[]>
> = {
  "/": homeFaqs,
  "/about": aboutFaqs,
  "/apps": appsFaqs,
  "/games": gamesFaqs,
  "/cricket": cricketFaqs,
  "/casino": casinoFaqs,
  "/badminton": badmintonFaqs,
  "/soccer": soccerFaqs,
  "/horse-racing": horseRacingFaqs,
  "/tennis": tennisFaqs,
  "/contact-us": contactUsFaqs,
  "/support": supportFaqs,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seoPages["/"].title,
    template: `%s | ${siteName}`,
  },
  description: seoPages["/"].description,
  applicationName: siteName,
  generator: "Next.js",
  creator: siteName,
  publisher: siteName,
  authors: [{ name: siteName }],
  category: "Gaming",
  keywords: seoPages["/"].keywords,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "1YAWCtaVVXalPfAeMjzwUthOX-HPWQGcuEesmiZZNWE",
  },
  alternates: {
    canonical: seoPages["/"].path,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Reddy Line",
    title: seoPages["/"].title,
    description: seoPages["/"].description,
    url: `${getSiteUrl()}/`,
    images: [
      {
        url: `${getSiteUrl()}/_next/image?url=%2Flogo.webp&w=384&q=75`,
        width: 384,
        height: 75,
        alt: `${siteName} online casino and cricket betting`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoPages["/"].title,
    description: seoPages["/"].description,
    images: [seoPages["/"].image || defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  formatDetection: {
    telephone: false,
  },
};

export function createPageMetadata(path: SeoPath): Metadata {
  const page: PageSeo = seoPages[path];
  const image = page.image || defaultImage;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      title: page.title,
      description: page.description,
      url: page.path,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${page.title} at ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/logo.webp",
      shortcut: "/logo.webp",
      apple: "/logo.webp",
    },
  };
}

/* ─────────── JSON-LD structured data ───────────
   Emitted as <script type="application/ld+json"> for rich results.
   Organization + WebSite are site-wide; WebPage + BreadcrumbList are per-route. */

const ORG_ID = `${getSiteUrl()}/#organization`;
const SITE_ID = `${getSiteUrl()}/#website`;

export function organizationSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteName,
    url: `${url}/`,
    logo: { "@type": "ImageObject", url: `${url}${defaultImage}` },
    description: seoPages["/"].description,
  };
}

export function websiteSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteName,
    url: `${url}/`,
    description: seoPages["/"].description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path === "/" ? "/" : path}`;
}

export { absoluteUrl };

export function webPageSchema(path: SeoPath) {
  const page = seoPages[path];
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: `${getSiteUrl()}${"image" in page && page.image ? page.image : defaultImage}` },
  };
}

export function breadcrumbSchema(path: SeoPath) {
  const page = seoPages[path];
  const itemListElement: Array<Record<string, unknown>> = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
  ];
  if (path !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: page.title,
      item: absoluteUrl(page.path),
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function faqPageSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
