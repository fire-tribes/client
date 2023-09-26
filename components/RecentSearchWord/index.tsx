import { RecentSearchWordUI } from './style';
import DateDisplay from '../common/DateDisplay';
import searchSvg from '../../public/icon/search.svg';
import cancelDotSvg from '../../public/icon/closeDot.svg';
import { RecentSearchWordsAtomProps } from '@/hook/useRecentSearchWords/state';
import Image from 'next/image';

interface RecentSearchWordProps {
  /** 최근 검색어 데이터 객체 */
  stock: RecentSearchWordsAtomProps;
  /** 버튼을 클릭했을 때, 해당 index에 위치한 값을 삭제하는 함수 */
  // handleDeleteRecentSearchWord: () => void;
}

function RecentSearchWord({
  stock, // handleDeleteRecentSearchWord,
}: RecentSearchWordProps) {
  // useEffect(() => {}, []);
  // TODO: 최근 검색어에 있는 데이터 클릭 시, Input창에 검색어 추가하는 함수
  const handleAddRecentSearchWord = () => {
    // 검색창에 최근 검색어 추가하기
  };

  return (
    <RecentSearchWordUI.Container>
      <RecentSearchWordUI.Item>
        <RecentSearchWordUI.LeftContainer onClick={handleAddRecentSearchWord}>
          <Image src={searchSvg} width={18} height={18} alt="Search Icon" />
          <button>{stock.word}</button>
        </RecentSearchWordUI.LeftContainer>
        <RecentSearchWordUI.RightContainer>
          <DateDisplay dateString={stock.date} />
          <button
            style={{ display: 'block' }}
            // onClick={handleDeleteRecentSearchWord}
          >
            <Image
              src={cancelDotSvg}
              width={14}
              height={14}
              alt="cancelDot Icon"
            />
          </button>
        </RecentSearchWordUI.RightContainer>
      </RecentSearchWordUI.Item>
    </RecentSearchWordUI.Container>
  );
}

export default RecentSearchWord;
