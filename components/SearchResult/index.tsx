import { SearchResultUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import checkFalseSvg from '@/public/icon/checkFalse.svg';
import checkTrueSvg from '@/public/icon/checkTrue.svg';
import { SelectedStocksAtomProps } from '@/hook/useAtom/state';
import Image from 'next/image';

interface SearchResultProps {
  stock: SelectedStocksAtomProps;
  isSelected: boolean;
  toggleSelected: (stock: SelectedStocksAtomProps) => void;
}

function SearchResult({
  stock,
  isSelected,
  toggleSelected,
}: SearchResultProps) {
  return (
    <SearchResultUI.Container>
      <SearchResultUI.Item>
        <SearchResultUI.StockContainer>
          <Image src={testCircleSvg} alt="testCircle Svg" />
          <div>
            <div>{stock.name}</div>
            <div>{stock.stockCode}</div>
          </div>
        </SearchResultUI.StockContainer>
        <button onClick={() => toggleSelected(stock)}>
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
