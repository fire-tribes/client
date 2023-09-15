import { useExampleItemQuery } from '@/hook/useQueryHook/useExampleItemQuery';
import { ChangeEventHandler, useState } from 'react';

export default function UseQueryExampleComp() {
  // 6 ~ 13 번은 별도의 hook으로도 구현가능 ex) useSearchStock
  const [value, setValue] = useState('');
  const { useGetExampleItem } = useExampleItemQuery();
  const { data } = useGetExampleItem(value);

  const onChangeHandleValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandleValue} />
      <div>
        <div>검색 결과</div>
        <div>
          {data?.data?.map((value: string, index: number) => (
            <li key={index}>{value}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
