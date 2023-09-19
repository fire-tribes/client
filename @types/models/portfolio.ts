import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

export type MyPortfolioModel = {
  portfolioId: number;
  totalValue: number; // 총 자산 가격
  totalValueChange: number; // 총 자산 변동금액
  totalValueChangeRate: number; // 총 자산 변동률
  assetDetails: MyportfoliAssetDetailModel[]; // 자산별 정보
};

export type MyportfoliAssetDetailModel = {
  assetId: number; // 자산Id
  tickerCode: string; // 미국주식코드
  stockCode: string; // 한국주식코드
  count: number; // 자산수량
  averagePrice: string; // 평단가
  currentPrice: string; // 현재가
  assetPriceChangeRate: string; // 등락율
  assetPriceChange: string; // 등략
  value: number; // 자산가치
  rateOfReturn: number; // 수익률
  dividendYield: number; // 배당수익률
  dividendMonth: number[]; // 배당주기
  currencyType: ExchangeRateSymbol; // 통화
};
