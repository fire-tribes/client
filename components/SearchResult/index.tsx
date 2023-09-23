import { SearchResultUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import checkFalseSvg from '@/public/icon/checkFalse.svg';
import checkTrueSvg from '@/public/icon/checkTrue.svg';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';
import Image from 'next/image';

interface SearchResultProps {
  /** 검색 결과에 해당하는 데이터 객체 */
  stock?: SelectedStocksAtomProps;
  /** 주식 종목 포트폴리오에 추가 선택 */
  isSelected: boolean;
  /** 주식 종목 포트폴리오에 추가 선택 시, 실행할 함수 */
  toggleSelected?: (stock: SelectedStocksAtomProps) => void;
}

function SearchResult({
  stock,
  isSelected,
  toggleSelected,
}: SearchResultProps) {
  console.log('toggleSelected: ', toggleSelected);
  return (
    <SearchResultUI.Container>
      <SearchResultUI.Item>
        <SearchResultUI.StockContainer>
          <Image src={testCircleSvg} alt="testCircle Svg" />
          <div>
            <div>{stock?.name}</div>
            <div>{stock?.stockCode}</div>
          </div>
        </SearchResultUI.StockContainer>
        <button
        // onClick={() => toggleSelected(stock)}
        >
          {isSelected ? (
            <Image src={checkTrueSvg} alt="checkTrue Svg" />
          ) : (
            <Image src={checkFalseSvg} alt="checkFalse Svg" />
          )}
        </button>
      </SearchResultUI.Item>
    </SearchResultUI.Container>
  );
}

export default SearchResult;
