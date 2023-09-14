// import { FeedStockInfosUI } from './style';
import FeedStockInfo from '../FeedStockInfo';
import CommonButton from '../common/Button/CommonButton';
import AlertModal from '../common/Modal/AlertModal';
import CheckSvg from '@/public/icon/check.svg';
// import { useState } from 'react';
import Image from 'next/image';

function FeedStockInfos() {
  const searchResults = [
    { name: 'abca', tickercode: 'ABCA' },
    { name: 'aaca', tickercode: 'AACA' },
    { name: 'aaaa', tickercode: 'AAAA' },
    { name: 'abbc', tickercode: 'ABBC' },
    { name: 'abbb', tickercode: 'ABBB' },
    { name: '가나다라', tickercode: '000001' },
    { name: '가가다라', tickercode: '000011' },
    { name: '가가가라', tickercode: '001122' },
    { name: '가가가가', tickercode: '112233' },
    { name: '가나나라', tickercode: '113344' },
  ];

  // const [showModal, setShowModal] = useState(false);

  // const handleDeleteStocksAll = () => {
  //   setShowModal(true);
  // };

  return (
    <>
      <div>
        <AlertModal
          title={'종목 삭제'}
          message={'이 종목을 정말 삭제하시겠어요?'}
        >
          <CommonButton
            style={{ padding: '14px' }}
            // onClick={handleDeleteStocksAll}
          >
            <Image src={CheckSvg} alt="check Svg" />
            현재가 전체 자동 입력
          </CommonButton>
        </AlertModal>
      </div>
      <div>
        {searchResults.map((item, id) => {
          return (
            <FeedStockInfo
              key={id}
              stockName={item.name}
              stockTickerCode={item.tickercode}
            />
          );
        })}
      </div>
    </>
  );
}

export default FeedStockInfos;
