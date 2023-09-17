import { SearchResultUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import Image from 'next/image';

interface SearchResultProps {
  stockName: string; // default : 'apple'
  stockTickerCode: string; // default : 'APPL'
  children: React.ReactNode;
}

function SearchResult({
  stockName,
  stockTickerCode,
  children,
}: SearchResultProps) {
  return (
    <SearchResultUI.Container>
      <SearchResultUI.Item>
        <SearchResultUI.StockContainer>
          <Image src={testCircleSvg} alt="testCircle Svg" />
          <div>
            <div>{stockName}</div>
            <div>{stockTickerCode}</div>
          </div>
        </SearchResultUI.StockContainer>
        <div>{children}</div>
      </SearchResultUI.Item>
    </SearchResultUI.Container>
  );
}

export default SearchResult;
