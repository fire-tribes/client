import OverlayRectangleToggleSwitch from '@/components/common/Switch/OverlayRectangleToggleSwitch';
import { useControlCurrencyMode } from '@/hook/useControlCurrencyMode';

export const CurrencySwitch = () => {
  const { currencyMode, toggleCurrencyMode } = useControlCurrencyMode();

  return (
    <OverlayRectangleToggleSwitch
      onClick={toggleCurrencyMode}
      activedKey={currencyMode}
      items={[
        { key: 'USD', value: '$' },
        { key: 'KRW', value: '원' },
      ]}
    />
  );
};
