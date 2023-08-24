import useControlPopup from '@/hook/useControlPopup';
import Popup from '@/components/common/Popup';
import Head from 'next/head';
import { atom, useAtom } from 'jotai';
import type { NextPage } from 'next';

const countAtom = atom(0);

const Home: NextPage = () => {
  const [count, setCount] = useAtom(countAtom);
  const onClickHandler = () => setCount((pre) => pre + 1);

  const { closePopup, isShow, openPopup } = useControlPopup();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Popup
          show={isShow}
          onClose={() => closePopup()}
          disableBackgroundClick
        >
          <Popup.Title>알림</Popup.Title>
          <Popup.Content>test</Popup.Content>

          <Popup.Actions>
            <Popup.Button onClick={() => closePopup()}>취소</Popup.Button>
            <Popup.Button onClick={() => closePopup()}>확인</Popup.Button>
          </Popup.Actions>
        </Popup>

        <button onClick={onClickHandler}>버튼</button>
        <br />
        <button onClick={() => openPopup()}>버튼22222</button>
        <div>{count}</div>
        <h1>Welcome</h1>
        <div>Next.js</div>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
