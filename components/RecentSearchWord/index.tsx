import { RecentSearchWordUI } from './style';
import DateDisplay from '../common/DateDisplay';
import searchSvg from '../../public/icon/search.svg';
import cancelDotSvg from '../../public/icon/closeDot.svg';
import Image from 'next/image';

interface RecentSearchWordProps {
  recentSearchWord: string;
}

function RecentSearchWord({ recentSearchWord }: RecentSearchWordProps) {
  return (
    <article>
      <RecentSearchWordUI.Container>
        <div>
          <button>
            <Image src={searchSvg} width={18} height={18} alt="Search Icon" />
            <span>{recentSearchWord}</span>
          </button>
        </div>
        <div>
          <DateDisplay />
        </div>
        <div>
          <button>
            <Image
              src={cancelDotSvg}
              width={14}
              height={14}
              alt="cancelDot Icon"
            />
          </button>
        </div>
      </RecentSearchWordUI.Container>
    </article>
  );
}

export default RecentSearchWord;
