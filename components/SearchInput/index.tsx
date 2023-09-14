import { SearchInputUI } from './style';
import SearchSvg from '@/public/icon/search.svg';
import CloseSvg from '@/public/icon/close.svg';
import Image from 'next/image';

interface SearchInputProps {
  value: string;
  onFocus: () => void;
  handleShowSearchResult: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({
  value,
  onFocus,
  handleShowSearchResult,
}: SearchInputProps) {
  return (
    <SearchInputUI.Container>
      <SearchInputUI.Item>
        <SearchInputUI.InputContainer>
          <div>
            <Image src={SearchSvg} width={24} height={24} alt="Search Icon" />
          </div>
          <div>
            <SearchInputUI.Input
              type="text"
              id="searchInput"
              value={value}
              onFocus={onFocus}
              onChange={handleShowSearchResult}
              placeholder="주식 이름 혹은 티커 검색"
            />
          </div>
        </SearchInputUI.InputContainer>
        <div>
          <Image src={CloseSvg} width={24} height={24} alt="Close Icon" />
        </div>
      </SearchInputUI.Item>
    </SearchInputUI.Container>
  );
}

export default SearchInput;
