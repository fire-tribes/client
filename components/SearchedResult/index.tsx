import { SearchedResultUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import checkFalseSvg from '@/public/icon/checkFalse.svg';
import checkTrueSvg from '@/public/icon/checkTrue.svg';
import { basic } from '@/styles/palette';
import Image from 'next/image';
// import { css } from '@emotion/react';

interface Stock {
  assetId: number;
  tickerCode: string;
  stockCode: string;
  name: string;
  countryType: 'KOR' | 'USA';
  marketType:
    | 'KRX'
    | 'KRX_KOSPI'
    | 'KRX_KOSDAQ'
    | 'KRX_KONEX'
    | 'NYSE'
    | 'AMEX'
    | 'NASDAQ'
    | 'UNKNOWN';
  assetCategoryType: 'STOCK' | 'ETF' | 'ETN';
}
interface SearchedResultProps {
  /** 검색 결과에 해당하는 데이터 객체 */
  stock: Stock;
  /** 검색 결과 */
  debouncedValue: string;
  /** 주식 종목 포트폴리오에 추가 선택 */
  isSelected: boolean;
  /** 주식 종목 포트폴리오에 추가 선택 시, 실행할 함수 */
  toggleSelected: (stock: Stock) => void;
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
  isSelected,
  toggleSelected,
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

  return (
    <SearchedResultUI.Container>
      <SearchedResultUI.Item>
        <SearchedResultUI.StockContainer>
          <div>
            <div>{stock.name.split('')[0]}</div>
            <Image src={testCircleSvg} alt="testCircle Svg" />
          </div>
          <div>
            <div>
              {stock.name.toLowerCase().split(debouncedValue)[0]}
              <span style={{ color: `${basic.point_blue02}` }}>
                {debouncedValue}
              </span>
              {stock.name.toLowerCase().split(debouncedValue)[1]}
            </div>
            {/* <span dangerouslySetInnerHTML={{ __html: truncatedText }} /> */}
            {/* <div className={multilineTruncate}>{highlightedText}</div> */}
            <div>{stock.tickerCode}</div>
          </div>
        </SearchedResultUI.StockContainer>
        <button onClick={() => toggleSelected(stock)}>
          {isSelected ? (
            <Image src={checkTrueSvg} alt="checkTrue Svg" />
          ) : (
            <Image src={checkFalseSvg} alt="checkFalse Svg" />
          )}
        </button>
      </SearchedResultUI.Item>
    </SearchedResultUI.Container>
  );
}

export default SearchedResult;
