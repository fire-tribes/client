import { SearchInputUI } from './style';
import SearchSvg from '@/public/icon/search.svg';
import Image from 'next/image';

interface SearchInputProps {
  value: string;
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

function SearchInput({ value, onFocus, onChange, children }: SearchInputProps) {
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
              onChange={onChange}
              placeholder="주식 이름 혹은 티커 검색"
            />
          </div>
        </SearchInputUI.InputContainer>
        <div>{children}</div>
      </SearchInputUI.Item>
    </SearchInputUI.Container>
  );
}

export default SearchInput;
