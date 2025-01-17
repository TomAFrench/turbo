import { FINANCE } from "../../utils/constants";
import {
  MedicalIcon,
  PoliticsIcon,
  USPoliticsIcon,
  WorldPoliticsIcon,
  EntertainmentIcon,
  FinanceIcon,
  CryptoIcon,
  SportsIcon,
  EntertainmentAwardsIcon,
  EntertainmentMoviesIcon,
  EntertainmentSocialMediaIcon,
  GolfIcon,
  TennisIcon,
  BasketballIcon,
  HorseRacingIcon,
  SoccerIcon,
  FootballIcon,
  HockeyIcon,
  OlympicIcon,
  BaseballIcon,
  BoxingIcon,
  MMAIcon,
  CarRacingIcon,
  BTCIcon,
  ETHIcon,
  COMPIcon,
  BALIcon,
  REPV2Icon,
  MKRIcon,
  LINKIcon,
  ZRXIcon,
  AMPLIcon,
  LTCIcon,
  AdditionalCryptoIcon,
  WETHIcon,
  ETCIcon,
  ATOMIcon,
  ALGOIcon,
  DASHIcon,
  EOSIcon,
  KNCIcon,
  OMGIcon,
  OXTIcon,
  XLMIcon,
  XRPIcon,
  XTZIcon,
  USDTIcon,
} from "./category-icons";
// SUB CATEGORIES
// MEDICAL
// POLITICS
// ENTERTAINMENT
// FINANCE
// CRYPTO
// SPORTS

const WETH: string = "WETH";
const ETC: string = "ETC";
const ATOM: string = "ATOM";
const ALGO: string = "ALGO";
const DASH: string = "DASH";
const EOS: string = "EOS";
const KNC: string = "KNC";
const OMG: string = "OMG";
const OXT: string = "OXT";
const XLM: string = "XLM";
const XRP: string = "XRP";
const XTZ: string = "XTZ";
const USDT: string = "USDT";
const SPORTS = "Sports";
const POLITICS = "Politics";
const ECONOMICS = "Economics";
const ENTERTAINMENT = "Entertainment";
const CRYPTO = "Crypto";
const MEDICAL = "Medical";
const SOCCER = "Football (Soccer)";
const AMERICAN_FOOTBALL = "American Football";
const OLYMPICS = "Olympics";
const BASEBALL = "Baseball";
const GOLF = "Golf";
const MMA = "MMA";
const BOXING = "Boxing";
const CAR_RACING = "Car Racing";
const BASKETBALL = "Basketball";
const TENNIS = "Tennis";
const HOCKEY = "Hockey";
const HORSE_RACING = "Horse Racing";
const US_POLITICS = "US Politics";
const WORLD = "World";
const BITCOIN = "Bitcoin";
const ETHEREUM = "Ethereum";
const LITECOIN = "Litecoin";
const AUGUR = "Augur";
const MAKER = "Maker";
const AMPLE = "Ample";
const COMPOUND = "Compound";
const BALANCER = "Balancer";
const ZEROX = "0x";
const CHAINLINK = "Chainlink";
const ADDITIONAL_TOKENS = "Additional Tokens";
const AWARDS = "Awards";
const TV_MOVIES = "TV & Movies";
const SOCIAL_MEDIA = "Social Media";
export const CATEGORIES_ICON_MAP = {
  [MEDICAL.toLowerCase()]: {
    icon: MedicalIcon,
    subOptions: {},
  },
  [POLITICS.toLowerCase()]: {
    icon: PoliticsIcon,
    subOptions: {
      [US_POLITICS.toLowerCase()]: { icon: USPoliticsIcon },
      [WORLD.toLowerCase()]: { icon: WorldPoliticsIcon },
    },
  },
  [ENTERTAINMENT.toLowerCase()]: {
    icon: EntertainmentIcon,
    subOptions: {
      [AWARDS.toLowerCase()]: { icon: EntertainmentAwardsIcon },
      [TV_MOVIES.toLowerCase()]: { icon: EntertainmentMoviesIcon },
      [SOCIAL_MEDIA.toLowerCase()]: { icon: EntertainmentSocialMediaIcon },
    },
  },
  [FINANCE.toLowerCase()]: { icon: FinanceIcon, subOptions: {} },
  [ECONOMICS.toLowerCase()]: { icon: FinanceIcon, subOptions: {} },
  [CRYPTO.toLowerCase()]: {
    icon: CryptoIcon,
    subOptions: {
      [BITCOIN.toLowerCase()]: { icon: BTCIcon },
      [ETHEREUM.toLowerCase()]: { icon: ETHIcon },
      [COMPOUND.toLowerCase()]: { icon: COMPIcon },
      [BALANCER.toLowerCase()]: { icon: BALIcon },
      [AUGUR.toLowerCase()]: { icon: REPV2Icon },
      [MAKER.toLowerCase()]: { icon: MKRIcon },
      [AMPLE.toLowerCase()]: { icon: AMPLIcon },
      [ZEROX.toLowerCase()]: { icon: ZRXIcon },
      [CHAINLINK.toLowerCase()]: { icon: LINKIcon },
      [LITECOIN.toLowerCase()]: { icon: LTCIcon },
      [ADDITIONAL_TOKENS.toLowerCase()]: { icon: AdditionalCryptoIcon },
      [WETH.toLowerCase()]: { icon: WETHIcon },
      [ETC.toLowerCase()]: { icon: ETCIcon },
      [ATOM.toLowerCase()]: { icon: ATOMIcon },
      [ALGO.toLowerCase()]: { icon: ALGOIcon },
      [DASH.toLowerCase()]: { icon: DASHIcon },
      [EOS.toLowerCase()]: { icon: EOSIcon },
      [KNC.toLowerCase()]: { icon: KNCIcon },
      [OMG.toLowerCase()]: { icon: OMGIcon },
      [OXT.toLowerCase()]: { icon: OXTIcon },
      [XLM.toLowerCase()]: { icon: XLMIcon },
      [XRP.toLowerCase()]: { icon: XRPIcon },
      [XTZ.toLowerCase()]: { icon: XTZIcon },
      [USDT.toLowerCase()]: { icon: USDTIcon },
    },
  },
  [SPORTS.toLowerCase()]: {
    icon: SportsIcon,
    subOptions: {
      [BASKETBALL.toLowerCase()]: { icon: BasketballIcon },
      [TENNIS.toLowerCase()]: { icon: TennisIcon },
      [HORSE_RACING.toLowerCase()]: { icon: HorseRacingIcon },
      [SOCCER.toLowerCase()]: { icon: SoccerIcon },
      [AMERICAN_FOOTBALL.toLowerCase()]: { icon: FootballIcon },
      [HOCKEY.toLowerCase()]: { icon: HockeyIcon },
      [GOLF.toLowerCase()]: { icon: GolfIcon },
      [OLYMPICS.toLowerCase()]: { icon: OlympicIcon },
      [BASEBALL.toLowerCase()]: { icon: BaseballIcon },
      [BOXING.toLowerCase()]: { icon: BoxingIcon },
      [MMA.toLowerCase()]: { icon: MMAIcon },
      [CAR_RACING.toLowerCase()]: { icon: CarRacingIcon },
    },
  },
};
