import { SearchedResultUI } from './style';
import checkFalseSvg from '@/public/icon/checkFalse.svg';
import checkTrueSvg from '@/public/icon/checkTrue.svg';
import { basic } from '@/styles/palette';
import StockAvatar from '@/components/common/StockAvatar';
import { GetSearchedResult } from '@/@types/models/getSearchedResults';
import Image from 'next/image';
// import { css } from '@emotion/react';

interface SearchedResultProps {
  /** 검색 결과에 해당하는 데이터 객체 */
  stock: GetSearchedResult;
  /** 검색 결과 */
  debouncedValue: string;
  /** 기존 포트폴리오에 검색한 값이 있다면? */
  hasAlreadyStockInPortfolio: boolean;
  /** 주식 종목 포트폴리오에 추가 선택 시, 실행할 함수 */
  toggleSelected: (stock: GetSearchedResult) => void;
  /** 주식 종목 포트폴리오에 추가 선택 */
  isSelected: boolean;
}

// // 스타일링할 클래스
// const multilineTruncate = css`
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 2; /* 2줄까지 표시 */
//   overflow: hidden;
// `;

// // 강조할 텍스트에 적용할 클래스
// const highlightedTextStyle = css`
//   color: ${basic.point_blue02}; /* 파란색으로 강조 예시 */
// `;

function SearchedResult({
  stock,
  debouncedValue,
  hasAlreadyStockInPortfolio,
  toggleSelected,
  isSelected,
}: SearchedResultProps) {
  /** debounceValue를 jotai로 만들기 */

  // 결과 텍스트를 스타일 적용한 클래스로 감싸기
  // const truncatedText = (
  //   <div className={multilineTruncate}>
  //     {STOCK_NAME.replace(
  //       new RegExp(`(${DEBOUNCED_VALUE})`, 'gi'),
  //       (match: string) => (
  //         <span className={css(highlightedText)}>{match}</span>
  //       ),
  //     )}
  //   </div>
  // );
  // const highlightedText = STOCK_NAME.replace(
  //   new RegExp(`(${DEBOUNCED_VALUE})`, 'gi'),
  //   (match) => <span style={highlightedTextStyle}>{match}</span>,
  // );

  /** 검색어가 주식 종목명이 아닌 Ticker에 있을 때 구분하기 */
  const hasValueInTicker = stock.name.split(debouncedValue).length !== 1;

  return (
    <SearchedResultUI.Container>
      <SearchedResultUI.Item>
        <SearchedResultUI.StockContainer>
          <div>
            <StockAvatar primary={stock.tickerCode} secondary={stock.name} />
          </div>
          <div>
            {hasValueInTicker ? (
              <>
                <div>
                  {stock.name.split(debouncedValue)[0]}
                  <span style={{ color: `${basic.point_blue02}` }}>
                    {debouncedValue}
                  </span>
                  {stock.name.split(debouncedValue)[1]}
                </div>
                <div>
                  {stock.tickerCode ? stock.tickerCode : stock.stockCode}
                </div>
              </>
            ) : (
              <>
                <div>{stock.name}</div>
                <div style={{ color: `${basic.point_blue02}` }}>
                  {stock.tickerCode ? stock.tickerCode : stock.stockCode}
                </div>
              </>
            )}
          </div>
        </SearchedResultUI.StockContainer>
        {hasAlreadyStockInPortfolio ? (
          <div></div>
        ) : (
          <button onClick={() => toggleSelected(stock)}>
            {isSelected ? (
              <Image src={checkTrueSvg} alt="checkTrue Svg" />
            ) : (
              <Image src={checkFalseSvg} alt="checkFalse Svg" />
            )}
          </button>
        )}
      </SearchedResultUI.Item>
    </SearchedResultUI.Container>
  );
}

export default SearchedResult;
