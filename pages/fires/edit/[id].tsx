import Backward from '@/components/common/Backward';
// import FeedStockInfo from '@/components/FeedStockInfo';
import SearchLayout from '@/components/common/Layout/SearchLayout';
// import { assetDetailsAtomProps } from '@/hook/useGetAssetDetails/state';
// import { portfolioListAtom } from '@/hook/useGetPortfolioList/state';
// import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

const Post = () => {
  /** 전체 편집 페이지에서 받아온 개별 종목 assetId */
  const router = useRouter();
  const { id } = router.query;
  // const [portfolioList] = useAtom(portfolioListAtom);

  /**
   * 현재 해당 객체의 assetId Key를 알고 있으므로,
   * 이를 이용해 FeedStockInfo에 반환할 Stock 객체에 접근할 수 있다.
   * Stock 객체의 index를 assetId Key를 이용해 접근하는 방법
   */
  /** 1. AssetId의 value가 router.query로 받은 id이므로 AssetId로 index를 찾는다. */
  // const findIndexByAssetIdKey = (value: number | undefined) => {
  //   const assetDetailsArray = portfolioList?.data.assetDetails;
  //   if (assetDetailsArray !== undefined) {
  //     for (let i = 0; i < assetDetailsArray.length; i++) {
  //       if (assetDetailsArray[i].assetId === value) {
  //         return i;
  //       }
  //     }
  //   }
  //   return -1;
  // };

  /** 2. findIndexByAssetIdKey함수로 받은 index를 통해 assetDetails의 index번째 stock 객체를 반환한다. */
  // const makeAssetDetailsStock = (value: string | string[] | undefined) => {
  //   if (value !== undefined) {
  //     const stock =
  //       portfolioList?.data.assetDetails[findIndexByAssetIdKey(Number(value))];
  //     console.log(stock);
  //     return stock;
  //   }
  // };

  return (
    <SearchLayout isDisabled={false} buttonName={'수정 완료'} hasButton={true}>
      <section>
        <Backward title={'보유 주식 편집'} />
      </section>
      <section>
        {/* <FeedStockInfo
          stock={makeAssetDetailsStock(id)}
          removeSelected={undefined}
        /> */}
        post : {id}
      </section>
    </SearchLayout>
  );
};

export default Post;
