import { SearchResultUI } from './style';
import checkFalseSvg from '@/public/icon/checkFalse.svg';
import checkTrueSvg from '@/public/icon/checkTrue.svg';
import testCircleSvg from '@/public/icon/testCircle.svg';
import Image from 'next/image';
import { useState } from 'react';

interface SearchResultProps {
  stockName: string; // default : 'apple'
  stockTickerCode: string; // default : 'APPL'
}

function SearchResult({ stockName, stockTickerCode }: SearchResultProps) {
  const [isAddStock, setIsAddStock] = useState(false);
  const handleAddStocks = () => {
    {
      isAddStock ? setIsAddStock(false) : setIsAddStock(true);
    }
  };

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
        <div onClick={handleAddStocks}>
          {isAddStock ? (
            <button>
              <Image src={checkTrueSvg} alt="checkTrue Svg" />
            </button>
          ) : (
            <button>
              <Image src={checkFalseSvg} alt="checkFalse Svg" />
            </button>
          )}
        </div>
      </SearchResultUI.Item>
    </SearchResultUI.Container>
  );
}

export default SearchResult;
