import { SearchInputUI } from './style';
import SearchSvg from '@/public/icon/search.svg';
import Image from 'next/image';

interface SearchInputProps {
  /** 입력한 검색어 */
  value: string;
  /** 검색창을 클릭하여 Active 상태 */
  onFocus: () => void;
  /** value에 영향을 주는 함수 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** SmallerButton 컴포넌트 */
  smallerCancelButton: React.ReactNode;
  /** BiggerButton 컴포넌트 */
  biggerCancelButton: React.ReactNode;
}

function SearchInput({
  value,
  onFocus,
  onChange,
  smallerCancelButton,
  biggerCancelButton,
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
              onChange={onChange}
              placeholder="주식 이름 혹은 티커 검색"
            />
          </div>
          <div>{smallerCancelButton}</div>
        </SearchInputUI.InputContainer>
        <div>{biggerCancelButton}</div>
      </SearchInputUI.Item>
    </SearchInputUI.Container>
  );
}

export default SearchInput;
