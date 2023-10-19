import { type RefObject, useEffect } from 'react';

/**
 * @param {RefObject<HTMLDivElement>} targetRef - 옵저버가 지켜볼 DOM
 * @param {Function} callback - DOM 뷰포트내에 들어왔을 떄 실행될 callback
 */

export const useIntersectionObserver = (
  targetRef: RefObject<HTMLDivElement>,
  callback: (...args: unknown[]) => unknown,
) => {
  useEffect(() => {
    // targetRef.current 는 null || HTMLDivElement 일 수 있음
    if (targetRef.current === null) {
      return;
    }

    // 1. 옵저버가 실행할 함수
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        callback();
      }
    };

    // 2. 옵저버의 기본 설정
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    // 1,2 번으로 새로운 옵저버 인스턴스를 생성
    const observer = new IntersectionObserver(handleIntersection, options);
    // 외부에서 넘겨받은 targetRef의 current(HTMLDivElement 타입의 DOM 객체가 담겨있음)를 지켜보도록 선언
    observer.observe(targetRef.current);

    // unmounted시 observer의 연결 해제
    return () => observer.disconnect();

    // TODO: ref.current의 변경사항을 추적하지 못한다는 말들도 존재 (버전이 변경되면서 해결이 되었을 수도 있습니다.)
    // or [targetRef]
  }, [targetRef.current]);
  // ref가 있을 경우 callback을 호출

  // 여기서 return하고 컴포넌트에서 사용
  return;
};
