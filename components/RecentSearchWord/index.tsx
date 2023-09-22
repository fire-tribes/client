import { RecentSearchWordUI } from './style';
import DateDisplay from '../common/DateDisplay';
import searchSvg from '../../public/icon/search.svg';
import cancelDotSvg from '../../public/icon/closeDot.svg';
import Image from 'next/image';

interface RecentSearchWordProps {
  /** 최근 검색어 데이터 객체 */
  item: {
    /** 최근 검색어 이름 */
    word: string;
    /** 최근 검색 날짜 */
    date: string;
  };
}

function RecentSearchWord({ item }: RecentSearchWordProps) {
  // TODO: 최근 검색어에 있는 데이터 클릭 시, Input창에 검색어 추가하는 함수
  const handleAddRecentSearchWord = () => {
    // 검색창에 최근 검색어 추가하기
  };
  // TODO: 최근 검색어 취소 버튼 클릭 시, 최근 검색어 Layout 및 데이터 제거하는 함수
  const handleDeleteRecentSearchWord = () => {
    // 검색창에 최근 검색어 제거하기
  };

  return (
    <RecentSearchWordUI.Container>
      <RecentSearchWordUI.Item>
        <RecentSearchWordUI.LeftContainer onClick={handleAddRecentSearchWord}>
          <Image src={searchSvg} width={18} height={18} alt="Search Icon" />
          <button>{item.word}</button>
        </RecentSearchWordUI.LeftContainer>
        <RecentSearchWordUI.RightContainer>
          <DateDisplay dateString={item.date} />
          <Image
            src={cancelDotSvg}
            width={14}
            height={14}
            alt="cancelDot Icon"
            onClick={handleDeleteRecentSearchWord}
          />
        </RecentSearchWordUI.RightContainer>
      </RecentSearchWordUI.Item>
    </RecentSearchWordUI.Container>
  );
}

export default RecentSearchWord;
