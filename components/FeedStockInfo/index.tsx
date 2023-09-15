import { FeedStockInfoUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import trashSvg from '@/public/icon/trash.svg';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface FeedStockInfoProps {
  stockName: string;
  stockTickerCode: string;
}

function FeedStockInfo({ stockName, stockTickerCode }: FeedStockInfoProps) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const onDeleteStock = () => {
    // 삭제 내용 입력
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // 오류 메시지 초기화
    setError('');
  };
  const handleInputBlur = () => {
    if (inputValue.trim() === '') {
      setError('* 보유 수량 및 가격을 정확히 입력해주세요.');
    }
  };

  return (
    <FeedStockInfoUI.Container>
      <FeedStockInfoUI.Item>
        <FeedStockInfoUI.TopContainer>
          <FeedStockInfoUI.NativeStockInfoContainer>
            <Image src={testCircleSvg} alt="testCircle Svg" />
            <div>
              <div>{stockName}</div>
              <div>{stockTickerCode}</div>
            </div>
          </FeedStockInfoUI.NativeStockInfoContainer>
          <FeedStockInfoUI.ButtonContainer onClick={onDeleteStock}>
            <Image src={trashSvg} alt="trash Svg" />
            <button>삭제</button>
          </FeedStockInfoUI.ButtonContainer>
        </FeedStockInfoUI.TopContainer>
        <FeedStockInfoUI.BottomContainer>
          <div>
            <input
              type="text"
              value={inputValue}
              placeholder="보유 수량"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div>
            <input
              type="text"
              value={inputValue}
              placeholder="구매 가격($)"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <button>현재가 입력</button>
          </div>
        </FeedStockInfoUI.BottomContainer>
        {error && (
          <FeedStockInfoUI.ErrorContainer>
            {error}
          </FeedStockInfoUI.ErrorContainer>
        )}
      </FeedStockInfoUI.Item>
    </FeedStockInfoUI.Container>
  );
}

export default FeedStockInfo;
