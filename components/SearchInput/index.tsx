import { SearchInputUI } from './style';
import SearchSvg from '@/public/icon/search.svg';
import CloseSvg from '@/public/icon/close.svg';
import Image from 'next/image';
import { useState } from 'react';

function SearchInput() {
  const [stock, setStock] = useState('');
  const handleShowSearchResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.value);
  };
  return (
    <SearchInputUI.Container>
      <SearchInputUI.Item>
        <SearchInputUI.InputContainer>
          <Image src={SearchSvg} width={24} height={24} alt="Search Icon" />
          <div>
            <SearchInputUI.Input
              type="text"
              value={stock}
              onChange={handleShowSearchResult}
              placeholder="주식 이름 혹은 티커 검색"
            />
          </div>
        </SearchInputUI.InputContainer>
        <Image src={CloseSvg} width={24} height={24} alt="Close Icon" />
        <div>{stock}</div>
      </SearchInputUI.Item>
    </SearchInputUI.Container>
  );
}

export default SearchInput;
