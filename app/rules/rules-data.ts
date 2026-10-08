import type { IconType } from "react-icons";
import {
  FaInfoCircle,
  FaFutbol,
  FaFootballBall,
  FaBasketballBall,
  FaTrophy,
} from "react-icons/fa";
import { GiCricketBat, GiShuttlecock } from "react-icons/gi";

export type BasicTerm = { title: string; desc: string };
export type StructuredRule = { title: string; desc: string };

export type RuleSection = {
  id: string;
  navTitle: string;
  title: string;
  icon: IconType;
  accent: string;
  type: "terms" | "rules" | "structured";
  terms?: BasicTerm[];
  rules?: string[];
  structured?: StructuredRule[];
};

export const sectionsMeta: Pick<RuleSection, "id" | "navTitle" | "icon" | "accent">[] = [
  { id: "basic-terms", navTitle: "1. Basic Terms", icon: FaInfoCircle, accent: "#F6C453" },
  { id: "soccer", navTitle: "2.1 Soccer", icon: FaFutbol, accent: "#1EBF6A" },
  { id: "american-football", navTitle: "2.2 American Football", icon: FaFootballBall, accent: "#E8303A" },
  { id: "basketball", navTitle: "2.3 Basketball", icon: FaBasketballBall, accent: "#F5A623" },
  { id: "tennis", navTitle: "2.4 Tennis", icon: FaTrophy, accent: "#A3E635" },
  { id: "baseball", navTitle: "2.5 Baseball", icon: FaTrophy, accent: "#D4AF37" },
  { id: "handball", navTitle: "2.6 Handball", icon: FaTrophy, accent: "#F6C453" },
  { id: "volleyball", navTitle: "2.7 Volleyball", icon: FaTrophy, accent: "#FFF2C6" },
  { id: "ice-hockey", navTitle: "2.8 Ice Hockey", icon: FaTrophy, accent: "#60a5fa" },
  { id: "rugby", navTitle: "2.9 Rugby Union & League", icon: FaTrophy, accent: "#1EBF6A" },
  { id: "badminton", navTitle: "2.10 Badminton", icon: GiShuttlecock, accent: "#00A8FF" },
  { id: "futsal", navTitle: "2.11 Futsal", icon: FaFutbol, accent: "#1EBF6A" },
  { id: "beach-volleyball", navTitle: "2.12 Beach Volleyball", icon: FaTrophy, accent: "#F5A623" },
  { id: "bowls", navTitle: "2.13 Bowls", icon: FaTrophy, accent: "#F6C453" },
  { id: "table-tennis", navTitle: "2.14 Table Tennis", icon: FaTrophy, accent: "#E8303A" },
  { id: "snooker", navTitle: "2.15 Snooker", icon: FaTrophy, accent: "#1EBF6A" },
  { id: "darts", navTitle: "2.16 Darts", icon: FaTrophy, accent: "#E8303A" },
  { id: "rugby-sevens", navTitle: "2.17 Rugby Sevens", icon: FaTrophy, accent: "#A3E635" },
  { id: "cricket", navTitle: "2.18 Cricket", icon: GiCricketBat, accent: "#F5A623" },
];

export const basicTerms: BasicTerm[] = [
  { title: "1.1 Betting Operator", desc: "A betting operator or sportsbook platform refers to a legally authorized organization that provides betting and gaming services according to the licensing laws and regulations of the applicable jurisdiction." },
  { title: "1.2 Client", desc: "A client is any individual who accepts the terms and conditions of Reddy Line and successfully creates a registered account on the platform or its related services." },
  { title: "1.3 Bet", desc: "A bet is a wagering agreement between the Client and Reddy Line regarding the outcome of a sports event game or third party activity in which the Client is not directly involved. Bets are placed according to predefined platform rules and available betting markets." },
  { title: "1.4 Bet Amount", desc: "The bet amount refers to the monetary value deposited or placed by the Client for participation in betting activities available on Reddy Line." },
  { title: "1.5 Result", desc: "A result is the official outcome of a sporting event or gaming market that determines the settlement of bets placed by users." },
  { title: "1.6 Odds", desc: "Odds are numerical values used to calculate the possible payout of a successful wager. The final payout is determined by multiplying the bet amount with the applicable odds." },
  { title: "1.7 Winnings", desc: "Winnings are the funds credited to the Client after a successful prediction according to the official event result and settlement rules." },
  { title: "1.8 Single Bet", desc: "A single bet is a wager placed on one individual outcome or event. The payout for a winning single bet is calculated by multiplying the stake with the selected odds." },
  { title: "1.9 Combo Bet", desc: "A combo or accumulator bet combines multiple independent selections into one betting ticket. Every selection included in the combo must win for the overall bet to be successful. If one selection loses the entire combo bet is considered unsuccessful." },
  { title: "1.10 System Bet", desc: "A system bet consists of multiple betting combinations created from a selected group of outcomes. Each combination carries the same number of selections and stake amount. Returns are calculated based on the total number of winning combinations within the system." },
  { title: "1.11 Odds Rounding", desc: "If betting odds contain more than two digits after the decimal point the final payout amount may be rounded to the nearest hundredth according to platform settlement standards." },
  { title: "1.12 Cash Out", desc: "The Cash Out feature allows users to settle a bet before the official conclusion of the event. The sportsbook may offer updated settlement values based on live match conditions current odds and betting activity. Users can either accept or reject the Cash Out offer. By accepting a Cash Out offer the Client agrees to the revised settlement conditions. Cash Out may be available for both pre match and live betting markets. Reddy Line reserves the right to modify suspend or remove Cash Out functionality at any time without prior notice." },
];

export const sportRules: Record<string, { title: string; rules: string[] }> = {
  soccer: {
    title: "2.1 Soccer Betting Rules",
    rules: [
      "2.1.1 Match Result Settlement: Soccer bets placed on match outcomes are settled according to the result at the end of regular playing time including injury time and stoppage time added by the referee. Extra time and penalty shootouts are not included unless specifically mentioned in the betting market.",
      "2.1.2 Corner Kick Rules: Corner kicks that are awarded but not actually taken will not count for settlement purposes.",
      "2.1.3 Own Goals: Goals scored as own goals are excluded from Goalscorer Player to Score and Next Goalscorer betting markets.",
      "2.1.4 Eligible Players: Players who have participated in the match from kickoff or since the previous goal are considered eligible selections for betting markets.",
      "2.1.5 Active Players: Only players actively participating in the match are included in available betting selections.",
      "2.1.6 Unlisted Goalscorers: If a goal is scored by a player not listed in the betting market all existing bets on listed players remain valid.",
      "2.1.7 Goalscorer Settlement: Anytime Goalscorer Next Goalscorer and Player to Score markets are settled using official television broadcasts and verified sports data sources unless proven incorrect.",
      "2.1.8 Goal Time Markets: Markets involving specific time intervals are settled according to the official goal time shown during broadcasts or official match clocks.",
      "2.1.9 Goal Interval Timing: Goal interval markets are determined by the moment the ball crosses the goal line and not by the timing of the shot attempt.",
      "2.1.10 Corner Interval Timing: Corner interval markets are settled according to the moment the corner kick is taken rather than when it was awarded.",
      "2.1.11 Booking Interval Timing: Card and booking interval markets are settled based on the exact moment the referee shows the card.",
      "2.1.12 Offside Betting Rules: Offside betting markets are settled according to the referee's official decision including decisions reviewed through VAR technology.",
      "2.1.13 Penalty Betting Rules: Penalty related betting markets are settled according to the moment the referee officially awards the penalty including VAR confirmed decisions.",
      "2.1.14 Untaken Penalties: Penalties awarded but not taken are excluded from all related betting markets.",
      "2.1.15 Next Scoring Type Rules:\n- Freekick: The goal must be scored directly from a free kick or corner kick. Minor deflections count only if the original taker is officially credited with the goal.\n- Penalty: The goal must be scored directly from the penalty kick. Goals scored from rebounds after missed penalties do not qualify.\n- Own Goal: If a player scores into their own team's net the goal is classified as an own goal.\n- Header: The final touch before the ball enters the goal must be made using the head.\n- Shot: The goal must be scored using any body part other than the head and must not qualify under another scoring category.\n- No Goal: No goal is scored during the specified timeframe.",
      "2.1.16 Incorrect Red Card Information: If a red card is missing or incorrectly displayed when a betting market opens Reddy Line reserves the right to void affected bets.",
      "2.1.17 Incorrect Match Time: If the displayed match time differs by more than five minutes the sportsbook may cancel affected betting markets.",
      "2.1.18 Incorrect Score Display: If an incorrect score is shown all markets affected during that period may be declared void.",
      "2.1.19 Incorrect Team Names: If team names competition names or categories are displayed incorrectly the sportsbook reserves the right to void related wagers.",
      "2.1.20 Card Counting Rules: Yellow cards count as one card unit while direct red cards or second yellow cards leading to a red count as two units. A second yellow resulting in a red card is not counted separately. A single player cannot receive more than three total card units.",
      "2.1.21 Card Market Settlement: Card related betting markets are settled according to verified information from regular 90 minute match play only.",
      "2.1.22 Post Match Cards: Cards shown after the final whistle are not included in betting settlements.",
      "2.1.23 Non Playing Individuals: Cards issued to substitutes coaches managers or bench staff are excluded from card betting markets.",
      "2.1.24 Booking Points System: Yellow Card = 10 Booking Points, Red Card = 25 Booking Points, Second Yellow Leading to Red = Not Counted Separately. A single player may contribute a maximum of 35 booking points in total according to sportsbook settlement rules.",
      "2.1.25 Card Market Settlement Rules: All card related betting markets at Reddy Line are settled using officially verified match data from the regular 90 minutes of play including injury and stoppage time.",
      "2.1.26 Post Match Cards: Any yellow cards red cards or disciplinary actions issued after the final whistle are not included in sportsbook settlement calculations.",
      "2.1.27 Non Participating Individuals: Cards shown to substitutes coaches managers support staff or other non playing individuals are excluded from all card betting markets and settlement rules.",
      "2.1.28 Match Format Changes: If the format structure or conditions of a match are changed after betting markets have opened Reddy Line reserves the right to void affected bets and betting markets.",
      "2.1.29 Friendly Match Rules: If a friendly soccer match is ended before 80 minutes of play due to referee decision abandonment or external circumstances the sportsbook may declare all related bets void according to settlement policies.",
    ],
  },
  "american-football": {
    title: "2.2 American Football Betting Rules",
    rules: [
      "2.2.1 Match Delays: If an American football match is delayed due to weather conditions such as rain darkness or other external factors all active betting markets will remain open and unsettled. Betting activity may resume once the match officially restarts.",
      "2.2.2 Overtime Rules: Unless specifically stated within the betting market all wagers are settled based on regulation time only and do not include overtime results.",
      "2.2.3 Incorrect Score Display: If a betting market remains active while an incorrect score is displayed and the error significantly impacts betting odds Reddy Line reserves the right to void affected bets.",
      "2.2.4 Incorrect Match Time: If betting odds are offered using an incorrect game clock with a discrepancy greater than 89 seconds the sportsbook may cancel all impacted wagers.",
      "2.2.5 Inaccurate Match Information: If inaccurate scores or live data are displayed during betting activity wagers placed during the affected period may be declared void at the discretion of Reddy Line.",
      "2.2.6 Postponed or Abandoned Matches: If an American football match is postponed suspended or abandoned all betting markets may be void unless the event resumes within the same official weekly NFL schedule period running from Thursday to Wednesday based on local stadium time.",
      "2.2.7 Incorrect Team Names: If team names or match listings are displayed incorrectly the sportsbook reserves the right to void all related wagers.",
      "2.2.8 Eligible Players: All players listed in betting markets are considered eligible participants for settlement purposes.",
      "2.2.9 Next Touchdown Scorer Market: If no additional touchdowns are scored during the match bets placed on the \"Next Touchdown Scorer\" market including overtime selections will be declared void.",
      "2.2.10 Unlisted Players: Players not individually listed in betting markets may be settled under categories such as \"Competitor 1 Other Players\" or \"Competitor 2 Other Players\" except in cases where players are listed without active betting odds.",
      "2.2.11 Defensive and Special Teams Players: Defensive and special teams players may be settled under \"D/ST Player\" categories even if individual player listings are available.",
      "2.2.12 Official Settlement Data: All American football betting markets are settled according to official league sources broadcast information and verified sports data unless there is clear evidence proving the data incorrect.",
    ],
  },
  basketball: {
    title: "2.3 Basketball Betting Rules",
    rules: [
      "2.3.1 Regulation Time Settlement: Unless otherwise stated basketball betting markets are settled according to the score at the end of regular playing time and do not include overtime periods.",
      "2.3.2 Incorrect Match Time: If the game time used for odds calculation differs by more than two minutes the sportsbook reserves the right to void affected betting markets.",
      "2.3.3 Incorrect Score Display: If a market remains open while an incorrect score is displayed and this error significantly impacts odds Reddy Line may void wagers placed during that timeframe.",
      "2.3.4 Overtime Qualification Games: In matches where overtime is played for qualification purposes but a winner existed after regulation time all betting markets are settled according to the score at the end of four quarters.",
      "2.3.5 Xth Point Markets: If a basketball game ends before the specified milestone point is reached betting markets such as \"Which Team Scores X Points First\" or \"Who Reaches X Points First\" will be void.",
      "2.3.6 Overtime Betting Market: For betting markets asking \"Will There Be Overtime\" a game tied at the end of regulation time will automatically be settled as \"Yes\" regardless of whether overtime is officially played.",
    ],
  },
  tennis: {
    title: "2.4 Tennis Betting Rules",
    rules: [
      "2.4.1 Player Retirement or Forfeit: If a player retires withdraws or forfeits a tennis match all unresolved betting markets will automatically be declared void.",
      "2.4.2 Match Delays: In the event of delays caused by weather darkness or other interruptions all active betting markets will remain open and unsettled until the match officially resumes.",
      "2.4.3 Penalty Points: Penalty points awarded by the umpire do not affect the validity of existing betting markets and all related wagers will remain active.",
      "2.4.4 Incomplete Point or Game Markets: If a tennis match ends prematurely and certain point or game related betting markets are not completed those specific markets will be voided.",
      "2.4.5 Incorrect Score Display: If betting markets remain available while an incorrect score is displayed and the error significantly affects betting odds Reddy Line reserves the right to void affected wagers.",
      "2.4.6 Incorrect Player or Team Information: If players teams or match listings are displayed incorrectly the sportsbook reserves the right to cancel all associated betting markets.",
      "2.4.7 Match Withdrawals: If a player officially withdraws from a match all unresolved betting markets will be canceled.",
      "2.4.8 Match Tie Break Rules: If a tennis match is decided using a match tie break it will be treated as the third set for all betting settlement purposes.",
      "2.4.9 Tie Break Settlement: Every tie break or match tie break is counted as one full game when settling applicable betting markets.",
    ],
  },
  baseball: {
    title: "2.5 Baseball Betting Rules",
    rules: [
      "2.5.1 Race to X Points Markets: If an inning concludes before the specified point milestone is reached including during extra innings all bets on \"Race to X Points\" or \"Who Scores the Xth Point\" markets will be void.",
      "2.5.2 Match Decision Market: The market \"When Will the Match Be Decided\" will be settled as \"Any Extra Inning\" if the game remains tied after nine innings regardless of whether extra innings are played.",
      "2.5.3 Overtime Betting Market: The \"Will There Be Overtime\" market will be settled as \"Yes\" if the score is tied after regulation time even if extra innings are not officially played.",
      "2.5.4 Extra Innings Rules: Extra innings are excluded from betting settlements unless specifically stated within the betting market description.",
      "2.5.5 Standard Market Settlement: Standard baseball betting markets are settled according to the result after nine innings or after eight and a half innings if the home team is leading.",
      "2.5.6 Suspended or Canceled Games: If a baseball game is suspended canceled or stopped and not resumed on the same day all unresolved betting markets will be declared void.",
      "2.5.7 Incorrect Match Information: If markets remain open while incorrect scores or game information are displayed and this significantly impacts odds Reddy Line reserves the right to cancel affected wagers.",
    ],
  },
  handball: {
    title: "2.6 Handball Betting Rules",
    rules: [
      "2.6.1 Xth Point Betting Markets: If the handball match ends before a team or player reaches the specified point milestone bets on the \"Who Scores the Xth Point\" market will be void.",
      "2.6.2 Race to X Points Markets: If the game ends before either team reaches the specified points target all bets on \"Race to X Points\" markets will be canceled.",
      "2.6.3 Regulation Time Settlement: Unless otherwise stated all handball betting markets except \"Who Scores the Xth Point\" and \"Race to X Points\" are settled according to regulation time results only.",
      "2.6.4 Seven Meter Shootout Rules: If a match proceeds to a seven meter shootout all related point markets including \"Who Scores the Xth Point\" and \"Race to X Points\" will be voided.",
      "2.6.5 Incorrect Match Time: If the displayed game time differs by more than three minutes Reddy Line reserves the right to void affected betting markets.",
      "2.6.6 Incorrect Score Display: If betting markets remain active while incorrect scores are displayed and this significantly affects betting odds the sportsbook may void all impacted wagers.",
    ],
  },
  volleyball: {
    title: "2.7 Volleyball Betting Rules",
    rules: [
      "2.7.1 Xth Point Markets: If a volleyball set finishes before the specified point milestone is reached such as \"Xth Point in Set Y\" all related betting markets will be void.",
      "2.7.2 Incomplete Matches: If a volleyball match is not completed for any reason all unresolved betting markets will be canceled.",
      "2.7.3 Golden Set Rules: Any golden set played after the regular match format will not be included in the settlement of listed betting markets unless specifically stated.",
      "2.7.4 Incorrect Score Display: If a betting market remains open while an incorrect score is displayed and the error significantly affects the betting odds Reddy Line reserves the right to void affected wagers.",
      "2.7.5 Official Point Deductions: Official point deductions will apply to all unresolved betting markets. Bets already settled before the deduction announcement will remain unchanged.",
    ],
  },
  "ice-hockey": {
    title: "2.8 Ice Hockey Betting Rules",
    rules: [
      "2.8.1 Regulation Time Settlement: Unless specifically stated otherwise all ice hockey betting markets are settled according to the result at the end of regulation time excluding overtime and penalty shootouts.",
      "2.8.2 Penalty Shootout Settlement: If a match is decided through a penalty shootout one additional goal will be awarded to the winning team for final score settlement purposes across applicable betting markets.",
      "2.8.3 Open Markets After Goals or Penalties: If a betting market remains available after a goal penalty or other major event has already occurred Reddy Line reserves the right to void wagers placed under those conditions.",
      "2.8.4 Incorrect Match Time: If betting odds are offered while the displayed match time differs by more than two minutes the sportsbook may cancel all affected bets.",
      "2.8.5 Incorrect Score Information: If an incorrect score is displayed all wagers placed during the affected timeframe may be declared void.",
    ],
  },
  rugby: {
    title: "2.9 Rugby Union & League Rules",
    rules: [
      "2.9.1 Standard Match Duration: All rugby betting markets excluding halftime first half overtime and penalty shootout markets apply only to regular match time unless otherwise specified.",
      "2.9.2 Regular 80 Minute Settlement: All bets are settled according to the result after the standard 80 minutes of play including injury time but excluding extra time sudden death or shootouts unless specifically stated.",
      "2.9.3 Delayed Market Closure: If a betting market remains open after a major event such as a score change or red card Reddy Line reserves the right to void affected wagers.",
      "2.9.4 Incorrect Red Card Information: If a betting market opens with a missing or incorrect red card display the sportsbook may cancel all related bets.",
      "2.9.5 Incorrect Match Time: If the displayed game time differs by more than two minutes when odds are offered all impacted betting markets may be voided.",
      "2.9.6 Incorrect Team Information: If team names categories or classifications are shown incorrectly the sportsbook reserves the right to cancel related wagers.",
    ],
  },
  badminton: {
    title: "2.10 Badminton Betting Rules",
    rules: [
      "2.10.1 Xth Point Markets: If a badminton set concludes before the specified point milestone is reached such as \"Who Scores the Xth Point in the Nth Set\" all related wagers will be void.",
      "2.10.2 Incomplete Matches: If a badminton match is not completed for any reason all unresolved betting markets will be canceled.",
      "2.10.3 Incorrect Score Display: If a market remains active while an incorrect score is displayed and the error significantly impacts betting odds Reddy Line may void all affected wagers.",
      "2.10.4 Player or Team Retirement: If a player or team retires before the completion of the match all unsettled betting markets will be declared void.",
      "2.10.5 Incorrect Player or Team Information: If players teams or match details are incorrectly displayed the sportsbook reserves the right to invalidate related betting markets.",
      "2.10.6 Official Point Deductions: Official point deductions will apply to all unresolved betting markets. Bets that have already been settled will not be adjusted following any point deductions.",
    ],
  },
  futsal: {
    title: "2.11 Futsal Betting Rules",
    rules: [
      "2.11.1 Regulation Time Settlement: Unless otherwise specified all futsal betting markets excluding halftime first half overtime and penalty shootout markets are settled according to regulation time only.",
      "2.11.2 Interrupted Matches: If a futsal match is interrupted but resumes within 48 hours of the original scheduled start time all open betting markets will be settled according to the final result. If the match does not resume within this period unresolved wagers will be void.",
      "2.11.3 Major Match Incidents: If a betting market remains open after major incidents such as goals red cards or penalties have already occurred Reddy Line reserves the right to cancel affected wagers.",
      "2.11.4 Incorrect Red Card Information: If a red card is missing incorrectly displayed or not updated when the betting market is created the sportsbook may void all related wagers.",
      "2.11.5 Incorrect Match Time: If the displayed match time differs by more than two minutes during betting activity affected wagers may be canceled.",
      "2.11.6 Incorrect Score Display: If an incorrect score is displayed all betting markets active during the affected period may be declared void.",
      "2.11.7 Incorrect Team Information: If team names or competition categories are displayed incorrectly Reddy Line reserves the right to void associated betting markets.",
    ],
  },
  "beach-volleyball": {
    title: "2.12 Beach Volleyball Betting Rules",
    rules: [
      "2.12.1 Xth Point Markets: If a beach volleyball set concludes before the specified point milestone is reached all bets related to \"Who Scores the Xth Point in Set Y\" will be void.",
      "2.12.2 Incomplete Matches: If a beach volleyball match is not completed all unresolved betting markets will be canceled.",
      "2.12.3 Golden Set Rules: Any golden set played outside the regular match format will not be included in the settlement of listed betting markets.",
      "2.12.4 Incorrect Score Display: If betting markets remain active while incorrect scores are displayed and this significantly affects betting odds the sportsbook may void all impacted wagers.",
      "2.12.5 Team Withdrawal: If a team withdraws before the match is officially completed all unsettled betting markets will be declared void.",
      "2.12.6 Official Point Deductions: Official point deductions will apply to unresolved betting markets while previously settled wagers will remain unchanged.",
    ],
  },
  bowls: {
    title: "2.13 Bowls Betting Rules",
    rules: [
      "2.13.1 Race to X Points Markets: If a set finishes before the specified points target is achieved such as \"Race to X Points in Set X\" all related betting markets will be void.",
      "2.13.2 Player Withdrawal or Forfeit: If a player withdraws retires or forfeits the match all unresolved betting markets will be canceled.",
      "2.13.3 Incorrect Score Display: If a betting market remains active while an incorrect score is displayed and the error significantly affects betting odds Reddy Line reserves the right to void affected wagers.",
      "2.13.4 Incorrect Player or Team Information: If teams or players are incorrectly listed the sportsbook may cancel all associated betting markets.",
    ],
  },
  "table-tennis": {
    title: "2.14 Table Tennis Betting Rules",
    rules: [
      "2.14.1 Xth Point Markets: If a table tennis set finishes before reaching the specified point milestone all wagers placed on \"Who Scores the Xth Point in Set Y\" will be void.",
      "2.14.2 Incomplete Matches: If a table tennis match is not completed all unresolved betting markets will be declared void.",
      "2.14.3 Incorrect Score Information: If betting markets remain active while incorrect scores are displayed and the error significantly impacts betting odds Reddy Line may void all affected wagers.",
      "2.14.4 Incorrect Player or Team Information: If players or teams are incorrectly represented or mislabeled all related betting markets may be canceled.",
      "2.14.5 Player Retirement: If a player retires during the match all unsettled betting markets will be void.",
      "2.14.6 Official Point Deductions: Official point deductions will apply to all unresolved betting markets. Previously settled wagers will remain unchanged.",
    ],
  },
  snooker: {
    title: "2.15 Snooker Betting Rules",
    rules: [
      "2.15.1 Player Disqualification or Retirement: If a player is disqualified retires or withdraws from a snooker match all unsettled betting markets will be declared void.",
      "2.15.2 Re Rack Situations: In the event of a re rack any betting markets already settled before the restart will remain valid if the outcome had already been officially determined.",
      "2.15.3 Potted Colour Markets: Fouls and free balls are not included in the settlement of \"Potted Colour\" betting markets.",
      "2.15.4 Incomplete Frames: If a snooker frame begins but is not completed all bets related to that frame will be void unless the market outcome had already been decided before interruption.",
      "2.15.5 Incorrect Score Display: If a betting market remains active while an incorrect score is displayed and the error significantly impacts betting odds Reddy Line reserves the right to void affected wagers.",
      "2.15.6 Incorrect Player or Team Information: If players teams or match labels are displayed incorrectly all related betting markets may be canceled.",
      "2.15.7 Incomplete Matches: If a snooker match is not completed all unresolved betting markets will be declared void.",
    ],
  },
  darts: {
    title: "2.16 Darts Betting Rules",
    rules: [
      "2.16.1 Incomplete Matches: If a darts match is abandoned suspended or not completed all unsettled betting markets will be void.",
      "2.16.2 Incorrect Score Display: If a betting market remains live while an incorrect score is displayed and this significantly affects betting odds the sportsbook may void all impacted wagers.",
      "2.16.3 Incorrect Player or Team Information: If player names team details or match information are displayed incorrectly related betting markets may be canceled.",
      "2.16.4 Match Cancellation or Abandonment: Any betting market that remains unresolved at the time of match cancellation or abandonment will be declared void.",
      "2.16.5 Bullseye Settlement: For settlement purposes a bullseye checkout is classified as a red checkout in all related betting markets.",
    ],
  },
  "rugby-sevens": {
    title: "2.17 Rugby Sevens Betting Rules",
    rules: [
      "2.17.1 Regulation Time Settlement: Unless otherwise specified all Rugby Sevens betting markets excluding first half halftime overtime and penalty shootout markets are settled according to regular match time only.",
      "2.17.2 Regular 14 or 20 Minute Settlement: All betting outcomes are settled based on the official result after 14 or 20 minutes of play including injury and stoppage time but excluding overtime or penalty shootouts unless specifically stated.",
      "2.17.3 Major Match Incidents: If a betting market remains open after a score change red card or major match incident has occurred Reddy Line reserves the right to void wagers placed during that period.",
      "2.17.4 Incorrect Red Card Information: If a red card is missing incorrectly displayed or unavailable when the betting market opens all affected wagers may be canceled.",
      "2.17.5 Incorrect Match Time: If the displayed match time differs by more than one minute during odds calculation affected betting markets may be voided.",
      "2.17.6 Incorrect Team or Competition Information: If team names competition details or category information are displayed incorrectly all related betting markets may be invalidated.",
    ],
  },
};

export const cricketRules: StructuredRule[] = [
  { title: "2.18.1 Match Betting", desc: "Description: This market predicts which team will win the cricket match. Rules: All cricket match betting markets on Reddy Line are settled according to official competition rules and verified match results. If a match is affected by weather interruptions or external factors bets will be settled according to the official result declared by the governing authority. If no official result is declared all bets will be void. In the event of a tied match where competition rules do not determine a winner dead heat settlement rules will apply. For tournaments where a Super Over or Bowl Out is used to determine the winner bets will be settled according to the official final result. For First Class cricket matches if the official result is declared as a tie bets will be settled as a dead heat between both teams while draw selections will be settled as losing bets. If a cricket match is abandoned due to external circumstances bets will be void unless an official winner is declared according to competition rules. If a scheduled match is canceled and not replayed or restarted within 36 hours of the official start time all betting markets will be void." },
  { title: "2.18.2 Double Chance", desc: "Description: The Double Chance market allows users to bet on two possible match outcomes from the available three result options. Rules: All Double Chance betting markets are settled according to official competition rules and final match results. If the match result ends in a tie the market will be settled according to dead heat rules. If there is no official result all bets will be declared void." },
  { title: "2.18.3 Match Betting Draw No Bet", desc: "Description: This market predicts which team will win the match with all bets refunded if the final result is a draw. Rules: All Draw No Bet cricket markets are settled according to official competition results. If the match ends in a tie dead heat settlement rules will apply. If there is no official result all wagers will be void." },
  { title: "2.18.4 Tied Match", desc: "Description: This market predicts whether the cricket match will end in a tie. Rules: All bets are settled according to the official result announced by the governing authority. If the match is abandoned or no official result is declared all bets will be void. For First Class cricket matches a tie occurs when the team batting second is bowled out during the second innings with both teams finishing on equal scores." },
  { title: "2.18.5 Most Fours", desc: "Description: This market predicts which team will score the highest number of fours during the match. Rules: In limited overs cricket matches all bets will be void if less than 80 percent of the scheduled overs are completed in either innings due to external interruptions including bad weather unless the market outcome has already been determined. In drawn First Class cricket matches betting markets will be void if fewer than 200 overs are bowled unless settlement had already been confirmed. Only boundaries scored directly from the bat will count toward the total fours including runs scored off legal or illegal deliveries. Overthrows extras and all run fours will not count. Fours scored during a Super Over are excluded from settlement. For First Class cricket matches only first innings fours will count toward settlement." },
  { title: "2.18.6 Most Sixes", desc: "Description: This market predicts which team will hit the highest number of sixes during the match. Rules: In limited overs cricket matches bets will be void if fewer than 80 percent of the scheduled overs are completed in either innings due to weather or other interruptions unless the result had already been determined. In drawn First Class matches bets will be void if fewer than 200 overs have been bowled unless the market outcome was already settled. Only sixes scored directly from the bat will count toward settlement including sixes from legal or illegal deliveries. Overthrows extras and additional runs will not count. Sixes scored during a Super Over are excluded from all betting settlements. For First Class cricket matches only sixes scored during the first innings will count toward the final result." },
  { title: "2.18.7 Most Extras", desc: "Description: This market predicts which team will receive the highest number of extras added to their batting total during the match. Rules: In limited overs cricket matches bets will be void if less than 80 percent of the scheduled overs are completed in either innings due to external factors including bad weather unless the result had already been determined before the interruption. In drawn First Class cricket matches bets will be void if fewer than 200 overs are bowled unless the betting outcome had already been settled. The following extras count toward settlement: Wide balls, No balls, Byes, Leg byes, Penalty runs. If runs are scored from the bat on the same delivery as extras only the extras will count toward this market while runs scored from the bat will be excluded. Extras scored during a Super Over do not count toward settlement. For First Class cricket matches only first innings extras are included in the final result." },
  { title: "2.18.8 Most Run Outs Conceded", desc: "Description: This market predicts which team will concede the highest number of run outs while batting during the match. Rules: A run out conceded means that a batter from the selected team is dismissed through a run out while batting. In limited overs matches all bets will be void if less than 80 percent of the scheduled overs are completed in either innings due to external interruptions including weather conditions unless the market result had already been determined. In drawn First Class matches bets will be void if fewer than 200 overs have been bowled unless settlement was already confirmed. Run outs occurring during a Super Over are excluded from settlement. For First Class cricket matches only run outs from the first innings are counted." },
  { title: "2.18.9 Highest First Over", desc: "Description: This market predicts which team will score the highest number of runs during the first over of their innings. Rules: The first over of both innings must be completed for bets to stand unless the market outcome had already been determined. If the innings ends during the first over due to external interruptions including weather conditions all bets will be void unless settlement had already been confirmed before the interruption. For First Class cricket matches this market applies only to the first innings of each team. Extras and penalty runs scored during the specified over are included in settlement calculations." },
];

export function getSectionRuleCount(id: string): number {
  if (id === "basic-terms") return basicTerms.length;
  if (id === "cricket") return cricketRules.length;
  const sport = sportRules[id];
  return sport?.rules.length ?? 0;
}

export const totalRuleCount =
  basicTerms.length +
  cricketRules.length +
  Object.values(sportRules).reduce((sum, s) => sum + s.rules.length, 0);
