import { RecentSearchWordUI } from './style';
import DateDisplay from '../common/DateDisplay';
import searchSvg from '../../public/icon/search.svg';
import cancelDotSvg from '../../public/icon/closeDot.svg';
import Image from 'next/image';

interface RecentSearchWordProps {
  recentSearchWord: string;
}

function RecentSearchWord({ recentSearchWord }: RecentSearchWordProps) {
  const handleAddRecentSearchWord = () => {
    // 검색창에 최근 검색어 추가하기
  };
  return (
    <RecentSearchWordUI.Container>
      <RecentSearchWordUI.Item>
        <RecentSearchWordUI.LeftContainer onClick={handleAddRecentSearchWord}>
          <Image src={searchSvg} width={18} height={18} alt="Search Icon" />
          <button>{recentSearchWord}</button>
        </RecentSearchWordUI.LeftContainer>
        <RecentSearchWordUI.RightContainer>
          <DateDisplay />
          <div>
            <Image
              src={cancelDotSvg}
              width={14}
              height={14}
              alt="cancelDot Icon"
            />
          </div>
        </RecentSearchWordUI.RightContainer>
      </RecentSearchWordUI.Item>
    </RecentSearchWordUI.Container>
  );
}

export default RecentSearchWord;
